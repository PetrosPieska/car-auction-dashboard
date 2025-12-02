<script setup lang="ts">
import AuctionList from './components/AuctionList.vue'
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-50">
    <header class="border-b border-slate-800 bg-slate-900/60 backdrop-blur">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div class="flex items-center gap-2">
          <div
            class="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400"
          >
            CA
          </div>
          <div>
            <p class="text-sm font-semibold tracking-wide text-slate-100">
              Car Auction Dashboard
            </p>
            <p class="text-xs text-slate-400">
              Vue 3 + TypeScript + Tailwind – portfolio demo
            </p>
          </div>
        </div>
      </div>
    </header>

    <main class="mx-auto max-w-6xl px-4 py-8">
      <section class="mb-8 grid gap-6 md:grid-cols-[minmax(0,2fr),minmax(0,1fr)]">
        <div>
          <h1 class="mb-2 text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
            Live dealer auctions at a glance
          </h1>
          <p class="mb-4 max-w-xl text-sm text-slate-300">
            This demo shows how I would structure a modern, component-driven frontend for a car
            auction platform: auction list, filters by make and status, and clear visual states for
            open, ending and closed auctions.
          </p>
          <ul class="flex flex-wrap gap-2 text-xs text-slate-300">
            <li class="rounded-full bg-slate-800 px-3 py-1">Vue 3 + TypeScript</li>
            <li class="rounded-full bg-slate-800 px-3 py-1">Tailwind CSS</li>
            <li class="rounded-full bg-slate-800 px-3 py-1">Component-driven UI</li>
            <li class="rounded-full bg-slate-800 px-3 py-1">Mock data only</li>
          </ul>
        </div>
        <div
          class="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-slate-900 p-4 text-xs text-slate-100"
        >
          <p class="mb-2 font-semibold text-emerald-300">What this demo is meant to show</p>
          <ul class="mb-3 list-disc space-y-1 pl-4 text-slate-200">
            <li>Comfort with Vue 3 + TypeScript + Tailwind</li>
            <li>Breaking UI into reusable components (filters, list, cards, badges)</li>
            <li>Attention to UX details: auction states, time left, empty states</li>
          </ul>
          <p class="text-[11px] text-slate-400">
            The scope is intentionally small so you can scan the code and UI quickly.
          </p>
        </div>
      </section>

      <AuctionList />
    </main>

    <footer class="mt-10 border-t border-slate-800 py-6 text-center text-xs text-slate-500">
      Built by Petros Pieskä – portfolio demo project (not affiliated with any company).
    </footer>
  </div>
</template>
