<script setup lang="ts">
import { computed, ref } from 'vue'
import { mockAuctions } from '../data/auctions'
import type { CarAuction } from '../types/CarAuction'
import AuctionFilters from './AuctionFilters.vue'
import AuctionCard from './AuctionCard.vue'

const selectedMake = ref<string | null>(null)
const selectedStatus = ref<string | null>(null)

// handlerit, EI templateen nuolifunktioita TypeScript-annotaatioilla
const handleChangeMake = (value: string | null) => {
  selectedMake.value = value
}

const handleChangeStatus = (value: string | null) => {
  selectedStatus.value = value
}

const filteredAuctions = computed<CarAuction[]>(() => {
  const make = selectedMake.value
  const status = selectedStatus.value

  return mockAuctions.filter((a) => {
    if (make && a.make !== make) return false
    if (status && a.status !== status) return false
    return true
  })
})
</script>

<template>
  <section aria-label="Car auctions">
    <div class="mb-3 flex items-baseline justify-between gap-2">
      <h2 class="text-sm font-semibold uppercase tracking-wide text-slate-300">
        Live auctions
      </h2>
      <p class="text-xs text-slate-500">
        Showing
        <span class="font-semibold text-slate-200">{{ filteredAuctions.length }}</span>
        of
        <span class="text-slate-300">{{ mockAuctions.length }}</span>
        auctions
      </p>
    </div>

    <AuctionFilters
      :selected-make="selectedMake"
      :selected-status="selectedStatus"
      :on-change-make="handleChangeMake"
      :on-change-status="handleChangeStatus"
    />

    <div
      v-if="filteredAuctions.length"
      class="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
    >
      <AuctionCard
        v-for="auction in filteredAuctions"
        :key="auction.id"
        :auction="auction"
      />
    </div>

    <p
      v-else
      class="mt-6 rounded-2xl border border-dashed border-slate-700 bg-slate-900/60 p-6 text-sm text-slate-300"
    >
      No auctions match the current filters. Try clearing the filters or adjusting your criteria.
    </p>
  </section>
</template>
