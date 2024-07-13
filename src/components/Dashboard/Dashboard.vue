<script setup lang="ts">
import chartDataJSON from '../../assets/data/chart'
import { useExpenses, useSales } from '../../composables'
import { BarChart, LineChart } from '../'

const {
	salesChartData,
	salesMonthes,
	salesSelectedMonthModel
} = useSales(chartDataJSON.salesData)
const {
	expenseChartData,
	expenseCategories,
	expenseSelectedCategoryModel
} = useExpenses(chartDataJSON.expenseData)
</script>

<template>
  <div class="l-grid">
    <aside class="l-grid__aside">
      <h3 class="mb-8">Filters</h3>

      <VSelect
        v-model="salesSelectedMonthModel"
        label="Select month"
        chips
        multiple
        clearable
        :items="salesMonthes"
      />
    </aside>

    <main class="l-grid__main">
      <LineChart :data="salesChartData"/>
    </main>
  </div>

  <hr class="my-10" />

  <div class="l-grid">
    <aside class="l-grid__aside">
      <h3 class="mb-8">Filters</h3>

      <VSelect
        v-model="expenseSelectedCategoryModel"
        label="Select month"
        chips
        multiple
        clearable
        :items="expenseCategories"
      />
    </aside>
    <main class="l-grid__main">
      <BarChart :data="expenseChartData"/>
    </main>
  </div>
</template>

<style lang="scss">
  .l-grid {
    display: flex;
    gap: 40px;

    &__aside {
      flex-basis: 300px;
      flex-shrink: 0;
    }
  }
</style>
