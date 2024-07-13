<script setup lang="ts">
// eslint-disable-next-line simple-import-sort/imports
import {
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LineElement,
	LinearScale,
	PointElement,
	Title,
	Tooltip
} from 'chart.js'
import { Line } from 'vue-chartjs'

import { ChartWrapper } from '../'

import type { ILineChartProps } from './'

ChartJS.register(
	CategoryScale,
	Legend,
	LinearScale,
	LineElement,
	PointElement,
	Title,
	Tooltip
)

defineProps<ILineChartProps>()
</script>

<template>
  <ChartWrapper>
    <Line
      :data="data"
      :options="{
        responsive: true,
        maintainAspectRatio: false
      }"
    />
  </ChartWrapper>
</template>

<style lang="scss">
//
</style>
