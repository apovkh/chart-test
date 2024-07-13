import { computed, ref } from 'vue'

import type { TCartItem } from '../../types'

export const useSales = (data: TCartItem[]) => {
	const salesSelectedMonthModel = ref<string[] >([])

	const filteredSalesData = computed(() => {
		if (!salesSelectedMonthModel.value?.length) return data
		return data.filter(
			(item: TCartItem) => salesSelectedMonthModel.value?.includes(item.month)
		)
	})

	const salesMonthes = computed((): string[] => {
		return data.map((item: TCartItem) => item.month)
	})

	const computedLabels = computed(() => {
		return salesSelectedMonthModel.value?.length
			? salesSelectedMonthModel.value
			: filteredSalesData.value.map((item: TCartItem) => item.month)
	})

	const salesChartData = computed(() => {
		return {
			labels: computedLabels.value,
			datasets: [
				{
					label: 'Sales',
					data: filteredSalesData.value.map((item: TCartItem) => item.sales),
					borderColor: 'green',
					backgroundColor: 'rgba(10, 200, 300, 0.2)'
				}
			]
		}
	})

	return {
		salesChartData,
		salesMonthes,
		salesSelectedMonthModel
	}
}
