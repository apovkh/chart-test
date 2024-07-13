import type { ChartData } from 'chart.js'

export type TCartItem = Record<string, string | number>

export type TChart = ChartData<'line', (number | null)[], unknown>
