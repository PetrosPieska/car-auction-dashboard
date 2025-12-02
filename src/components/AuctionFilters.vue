<script setup lang="ts">
defineProps<{
  selectedMake: string | null
  selectedStatus: string | null
  onChangeMake: (value: string | null) => void
  onChangeStatus: (value: string | null) => void
}>()

const makes = ['Volkswagen', 'Volvo', 'Toyota']
const statuses = [
  { value: 'open', label: 'Open' },
  { value: 'endingSoon', label: 'Ending soon' },
  { value: 'closed', label: 'Closed' },
]
</script>

<template>
  <div
    class="mb-4 flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm md:flex-row md:items-end"
  >
    <div class="flex-1">
      <label class="mb-1 block text-xs font-medium uppercase tracking-wide text-slate-400">
        Make
      </label>
      <select
        class="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100"
        :value="selectedMake ?? ''"
        @change="onChangeMake(($event.target as HTMLSelectElement).value || null)"
      >
        <option value="">All</option>
        <option v-for="make in makes" :key="make" :value="make">
          {{ make }}
        </option>
      </select>
    </div>

    <div class="flex-1">
      <label class="mb-1 block text-xs font-medium uppercase tracking-wide text-slate-400">
        Status
      </label>
      <select
        class="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100"
        :value="selectedStatus ?? ''"
        @change="onChangeStatus(($event.target as HTMLSelectElement).value || null)"
      >
        <option value="">All</option>
        <option v-for="status in statuses" :key="status.value" :value="status.value">
          {{ status.label }}
        </option>
      </select>
    </div>

    <div class="text-xs text-slate-400 md:text-right md:w-40">
      Filters update the auction list client-side in real time.
    </div>
  </div>
</template>
