<template>
    <div class="">
        
        <DashboardComponent />
        <h2>test page</h2>
        <!-- <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  /> -->

  <!-- <Line :data="data" :options="options" /> -->
    </div>
</template>

<script>
import DashboardComponent from '@/components/layouts/DashboardComponent.vue';

export default {

  components: {
    DashboardComponent
  }
}

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// } from 'chart.js'
// import { Line } from 'vue-chartjs'
// import * as chartConfig from '@/rawdata/chartConfig.ts'

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// )

// export default {
//   name: 'App',
//   components: {
//     Line
//   },
//   data() {
//     return chartConfig
//   }
// }
</script>

<style>

</style>