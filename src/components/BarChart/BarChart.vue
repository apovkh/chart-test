<script setup lang="ts">
import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	Title,
	Tooltip
} from 'chart.js'
import { Bar } from 'vue-chartjs'

import { ChartWrapper } from '../'

import type { IBarChartProps } from '.'

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
)

defineProps<IBarChartProps>()
</script>

<template>
  <ChartWrapper>
    <Bar
      :data="data"
      class="c-line-chart"
    />
  </ChartWrapper>
</template>

<style lang="scss">
//
</style>
