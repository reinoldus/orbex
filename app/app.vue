<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = computed<NavigationMenuItem[]>(() => [
  { label: 'How It Works', to: '#how-it-works' },
  { label: 'Product', to: '#product' },
  { label: 'Benefits', to: '#benefits' }
])
</script>

<template>
  <UApp>
    <UHeader :ui="{ root: 'bg-transparent backdrop-blur-sm border-b border-white/5' }">
      <template #title>
        <span class="text-xl font-bold text-white">orbex</span>
      </template>

      <UNavigationMenu :items="items" />

      <template #right>
        <UButton label="Request Early Access" to="#early-access" trailing-icon="i-lucide-arrow-right" />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <UFooter :ui="{ root: 'bg-transparent border-t border-white/5' }">
      <template #left>
        <p class="text-sm text-slate-500">Orbex &copy; {{ new Date().getFullYear() }}. All rights reserved.</p>
      </template>
      <template #right>
        <UButton icon="i-lucide-twitter" color="neutral" variant="ghost" to="#" />
        <UButton icon="i-lucide-linkedin" color="neutral" variant="ghost" to="#" />
      </template>
    </UFooter>
  </UApp>
</template>
