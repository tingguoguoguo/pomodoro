<template>
  <v-container>
    <v-row class="bg-secondary carats">
      <v-col cols="12">
        <h1>{{ currentText }}</h1>
        <h1>{{ currentTime }}</h1>
      </v-col>
      <v-col cols="12">
        <v-btn variant="text" icon="mdi-play"
          :disabled="status === STATUS.COUNTING || (currentItem.length === 0 && items.length === 0)"
          @click="startTimer"></v-btn>
        <v-btn variant="text" icon="mdi-pause" :disabled="status !== STATUS.COUNTING" @click="pauseTimer"></v-btn>
        <v-btn variant="text" icon="mdi-skip-next" :disabled="currentItem.length === 0" @click="finishTimer"></v-btn>
      </v-col>
    </v-row>
    <div class="spacer"></div>
    <!-- 卡片圖片 -->
    <v-row class="mx-auto">
      <v-col cols="12" md="4" v-for="(item, index) in cardItems" :key="index">
        <!--  v-card -->
        <v-card max-width="200" height="200" :image="item.image" :title="item.title" theme="dark"
          style="position: relative;left:185px;color:#525455;"></v-card>
      </v-col>
    </v-row>

    <v-footer class="d-flex flex-column" id="footer">
      <div class="bg-secondary w-100 text-center">
        <strong>天天是好日</strong>

        <v-spacer></v-spacer>

      </div>

      <div class="px-4 py-2 bg-primary text-center w-100">
        {{ new Date().getFullYear() }} — <strong>Guo</strong>
      </div>
    </v-footer>
  </v-container>
</template>

<script setup>
import { useListStore } from '@/store/list'
import { useSettingsStore } from '@/store/settings'
import { storeToRefs } from 'pinia'
import { ref, computed } from 'vue'
import { useWebNotification } from '@vueuse/core'

const list = useListStore()
const { currentItem, items, timeleft } = storeToRefs(list)
const { setCurrentItem, countdown, setFinishedItem } = list

const settings = useSettingsStore()
const { selectedAlarmFile, notify } = storeToRefs(settings)
const cardItems = ref([
  { title: 'Say', image: 'https://i.pinimg.com/1200x/53/ce/8a/53ce8a42afa02be00f98fa37eec4f9c2.jpg' },
  { title: 'The', image: 'https://i.pinimg.com/originals/48/6e/88/486e88cd7f351f1fd3bc91eb0d082a0e.jpg' },
  { title: 'Name', image: 'https://i.pinimg.com/1200x/d7/20/3c/d7203c5e320f6f9ee2d7e16481f2075e.jpg' },
  { title: 'Seventeen', image: 'https://i.pinimg.com/originals/00/08/d9/0008d909dd716a04e2963c0da7293680.jpg' },
  { title: 'Hoshi', image: 'https://i.pinimg.com/236x/25/8d/c8/258dc826fd8cef565062c5f526d53905.jpg' },
  { title: '! !', image: 'https://pbs.twimg.com/media/EVX-id_UYAAvwy3.jpg' }
  // Add more items as needed
])

// 0 = 停止
// 1 = 倒數中
// 2 = 暫停
const STATUS = {
  STOP: 0,
  COUNTING: 1,
  PAUSE: 2
}

const status = ref(STATUS.STOP)

let timer = 0
const startTimer = () => {
  if (status.value === STATUS.STOP && items.value.length > 0) {
    setCurrentItem()
  }

  status.value = STATUS.COUNTING

  timer = setInterval(() => {
    countdown()
    if (timeleft.value === 0) {
      finishTimer()
    }
  }, 1000)
}

const pauseTimer = () => {
  status.value = STATUS.PAUSE
  clearInterval(timer)
}

const finishTimer = () => {
  clearInterval(timer)
  status.value = STATUS.STOP

  const audio = new Audio()
  audio.src = selectedAlarmFile.value
  audio.play()

  if (notify.value) {
    const { show, isSupported } = useWebNotification({
      title: '事項完成',
      body: currentItem.value,
      icon: new URL('@/assets/tomato.png', import.meta.url).href
    })
    if (isSupported.value) {
      show()
    }
  }

  setFinishedItem()

  if (items.value.length > 0) {
    startTimer()
  }
}

const currentText = computed(() => {
  if (currentItem.value.length > 0) {
    return currentItem.value
  } else if (items.value.length > 0) {
    return '點擊開始'
  } else {
    return '沒有事項'
  }
})

const currentTime = computed(() => {
  const m = Math.floor(timeleft.value / 60).toString().padStart(2, '0')
  const s = (timeleft.value % 60).toString().padStart(2, '0')
  return m + ':' + s
})
</script>

<style>
#footer {
  position: absolute;
  width: 100%;
  padding: 0;
  bottom: 0;
  left: 0;
  /* 垂直置中 */
}

.carats {
  width: 600px;
  margin: auto;
  border-radius: 20px;
  text-align: center;
}

.spacer {
  height: 20px;
}
</style>
