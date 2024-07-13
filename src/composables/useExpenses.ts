import { computed, ref } from 'vue'

import type { TCartItem } from '../../types'

export const useExpenses = (data: TCartItem[]) => {
	const expenseSelectedCategoryModel = ref<string[]>([])

	const filteredExpenseData = computed(() => {
		if (!expenseSelectedCategoryModel.value?.length) return data
		return data.filter(
			(item: TCartItem) => expenseSelectedCategoryModel.value?.includes(item.category)
		)
	})

	const expenseCategories = computed(() =>
		data.map((item: TCartItem) => item.category)
	)

	const computedLabels = computed(() => {
		return expenseSelectedCategoryModel.value?.length
			? expenseSelectedCategoryModel.value
			: filteredExpenseData.value.map((item: TCartItem) => item.category)
	})

	const expenseChartData = computed(() => {
		return {
			labels: computedLabels.value,
			datasets: [
				{
					label: 'Expenses',
					data: filteredExpenseData.value.map((item: TCartItem) => item.amount),
					borderColor: 'red',
					backgroundColor: 'rgb(10, 100, 100)'
				}
			]
		}
	})

	return {
		expenseChartData,
		expenseCategories,
		expenseSelectedCategoryModel
	}
}
