<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    :stroke="color"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="icon"
    v-html="paths[name]"
  />
</template>

<script setup>
defineProps({
  name: { type: String, required: true },
  size: { type: [Number, String], default: 24 },
  color: { type: String, default: 'currentColor' },
})

const paths = {
  // Music note (double)
  music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',

  // Piano keys
  piano: '<rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor"/><line x1="8" y1="4" x2="8" y2="14" stroke="currentColor"/><line x1="16" y1="4" x2="16" y2="14" stroke="currentColor"/><line x1="12" y1="4" x2="12" y2="14" stroke="currentColor"/><line x1="2" y1="14" x2="22" y2="14" stroke="currentColor"/>',

  // Shield / discipline
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',

  // Book / teaching
  book: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',

  // Body awareness (person in balance)
  body: '<circle cx="12" cy="5" r="2"/><path d="M12 7v6"/><path d="M8 21l4-8 4 8"/><path d="M6 12h12"/>',

  // Target / focus  
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',

  // Mountain / perseverance
  mountain: '<path d="M8 21l4-10 4 10"/><path d="M2 21h20"/><path d="M15 11l3 10"/><path d="M12 11l-1.5 3"/>',

  // Wave / balance
  wave: '<path d="M2 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0"/><path d="M2 17c2-3 4-3 6 0s4 3 6 0 4-3 6 0"/>',

  // Map pin / location
  mapPin: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',

  // Clock
  clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',

  // Mail
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22 4 12 13 2 4"/>',

  // Check
  check: '<polyline points="20 6 9 17 4 12"/>',

  // Star / sparkle (for the musical note in lists)
  sparkle: '<path d="M12 2l1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5z"/>',
}
</script>

<style scoped>
.icon {
  flex-shrink: 0;
  display: inline-block;
  vertical-align: middle;
}
</style>
