<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">通知設定</h1>
      </v-col>
      <v-col cols="12">
        <v-radio-group inline v-model="notify">
          <v-radio label="開啟" :value="true"></v-radio>
          <v-radio label="關閉" :value="false"></v-radio>
        </v-radio-group>
      </v-col>
      <v-col cols="12">
        <h1 class="text-center">鈴聲設定</h1>
      </v-col>
      <v-col cols="12">
        <v-table>
          <thead>
            <tr>
              <th>名稱</th>
              <th>試聽</th>
              <th>選擇</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="alarm in alarms" :key="alarm.id">
              <td>{{ alarm.name }}</td>
              <td>
                <audio :src="alarm.file" controls></audio>
              </td>
              <td>
                <v-radio-group v-model="selectedAlarm">
                  <v-radio :value="alarm.id"></v-radio>
                </v-radio-group>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
    <v-row justify="space-around">
      <v-date-picker color="primary"></v-date-picker>
    </v-row>
    <v-bottom-navigation mode="shift" class="bg-primary">
      <v-btn value="recent">
        <v-icon style="color:#F8BBD0;">mdi-star</v-icon>

        <span>I</span>
      </v-btn>

      <v-btn value="favorites">
        <v-icon style="color:#F8BBD0;">mdi-heart</v-icon>

        <span>Love</span>
      </v-btn>

      <v-btn value="nearby">
        <v-icon style="color:#F8BBD0;">mdi-heart-cog</v-icon>

        <span>U</span>
      </v-btn>
    </v-bottom-navigation>
  </v-container>
</template>

<script setup>
import { useSettingsStore } from '@/store/settings'
import { storeToRefs } from 'pinia'

const settings = useSettingsStore()
const { alarms, selectedAlarm, notify } = storeToRefs(settings)
</script>

<style scoped>
:deep(.v-selection-control-group.v-selection-control-group--inline) {
  margin: auto
}
</style>
