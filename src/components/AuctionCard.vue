<script setup lang="ts">
import type { CarAuction } from '../types/CarAuction'

defineProps<{
  auction: CarAuction
}>()

const badgeClassesByStatus: Record<CarAuction['status'], string> = {
  open: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/40',
  endingSoon: 'bg-amber-500/10 text-amber-300 border-amber-500/40',
  closed: 'bg-slate-700/40 text-slate-300 border-slate-500/40',
}

const badgeLabelByStatus: Record<CarAuction['status'], string> = {
  open: 'Open',
  endingSoon: 'Ending soon',
  closed: 'Closed',
}
</script>

<template>
  <article
    class="group flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/80 p-4 transition hover:-translate-y-0.5 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10"
  >
    <header class="flex items-start justify-between gap-3">
      <div>
        <h2 class="text-sm font-semibold text-slate-50">
          {{ auction.title }}
        </h2>
        <p class="text-xs text-slate-400">
          {{ auction.year }} · {{ auction.mileageKm.toLocaleString('fi-FI') }} km ·
          {{ auction.fuelType }} · {{ auction.transmission }}
        </p>
      </div>
      <span
        class="rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide"
        :class="badgeClassesByStatus[auction.status]"
      >
        {{ badgeLabelByStatus[auction.status] }}
      </span>
    </header>

    <div class="flex items-end justify-between gap-4 text-sm">
      <div>
        <p class="text-[11px] uppercase tracking-wide text-slate-400">Current bid</p>
        <p class="text-lg font-semibold text-slate-50">
          {{ auction.currentBid.toLocaleString('fi-FI') }} €
        </p>
        <p v-if="auction.buyNowPrice" class="text-xs text-slate-400">
          Buy now {{ auction.buyNowPrice.toLocaleString('fi-FI') }} €
        </p>
      </div>

      <div class="text-right">
        <p class="text-[11px] uppercase tracking-wide text-slate-400">Time left</p>
        <p class="text-sm font-medium text-slate-50">
          <span v-if="auction.status === 'closed'">
            Auction ended
          </span>
          <span v-else-if="auction.timeLeftMinutes < 60">
            {{ auction.timeLeftMinutes }} min
          </span>
          <span v-else>
            ~{{ Math.round(auction.timeLeftMinutes / 60) }} h
          </span>
        </p>
        <p class="text-xs text-slate-400">
          {{ auction.location }}
        </p>
      </div>
    </div>
  </article>
</template>
