<template>
    <div>
        <!-- <h2>Performance graph</h2> -->
        <Line :data="data" :options="options" />
        </div>
</template>


<script>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'
import * as chartConfig from '@/rawdata/chartConfig.ts'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default {
  name: 'LineBarTracking',
  components: {
    Line
  },
  data() {
    return chartConfig
  }
}
</script>

<style>

</style>