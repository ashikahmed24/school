<template>
  <BaseTabs :tabs="[
    { label: 'Tab 1', slot: 'tab1' },
    { label: 'Tab 2', slot: 'tab2' },
    { label: 'Tab 3', slot: 'tab3' }
  ]">
    <template #tab1>
      <p>Content for Tab 1</p>
    </template>

    <template #tab2>
      <p>Content for Tab 2</p>
    </template>

    <template #tab3>
      <p>Content for Tab 3</p>
    </template>
  </BaseTabs>





  <div class="space-y-4">
    <BaseButton>Default</BaseButton>

    <BaseButton variant="secondary">Secondary</BaseButton>

    <BaseButton variant="outline">Outline</BaseButton>

    <BaseButton variant="danger">Danger</BaseButton>

    <BaseButton size="lg" :loading="true">Loading...</BaseButton>

    <BaseButton :disabled="true">Disabled</BaseButton>

    <BaseButton block>Full Width</BaseButton>
  </div>
</template>

<script setup>
import BaseTabs from '@/components/BaseTabs.vue'
</script>
