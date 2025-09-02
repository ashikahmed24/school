<!-- components/BaseTabs.vue -->
<template>
    <TabGroup>
        <!-- Tab Headers -->
        <TabList class="flex space-x-2 border-b">
            <Tab v-for="(tab, index) in tabs" :key="index" v-slot="{ selected }" as="template">
                <button class="px-4 py-2 rounded-t-lg text-sm font-medium focus:outline-none" :class="selected
                    ? 'bg-white border border-b-0 border-gray-300 text-blue-600'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'">
                    {{ tab.label }}
                </button>
            </Tab>
        </TabList>

        <!-- Tab Panels -->
        <TabPanels class="mt-2 border border-gray-300 rounded-b-lg p-4 bg-white">
            <TabPanel v-for="(tab, index) in tabs" :key="index">
                <slot :name="tab.slot" />
            </TabPanel>
        </TabPanels>
    </TabGroup>
</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

defineProps({
    tabs: {
        type: Array,
        required: true,
        // Example: [{ label: "Tab 1", slot: "tab1" }]
    }
})
</script>
