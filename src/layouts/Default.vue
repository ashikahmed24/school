<script setup>
import { ref } from 'vue'
import Sidebar from './Sidebar.vue'
import IconBar from '@/components/icons/IconBar.vue';

import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from '@headlessui/vue';

import IconInbox from '@/components/icons/IconInbox.vue';
import IconChevronUpDown from '@/components/icons/IconChevronUpDown.vue';
import IconCheck from '@/components/icons/IconCheck.vue';
import IconBell from '@/components/icons/IconBell.vue';


const years = [
    { name: '2025-2026' },
    { name: '2024-2025' },
    { name: '2023-2024' },
    { name: '2022-2023' },
]
const selectedYear = ref(years[0]);

const openSidebar = ref(false);

const toggleSidebar = () => {
    openSidebar.value = !openSidebar.value;
}

</script>

<template>
    <header class="bg-white sticky top-0 z-40 border-b border-slate-200">
        <div class="flex items-center gap-4 px-4 py-2">
            <button type="button" @click="toggleSidebar"
                class="bg-gray-100 hover:bg-gray-200 rounded-full cursor-pointer p-2">
                <IconBar class="size-5" />
            </button>
            <!-- Left: Logo -->
            <RouterLink to="/" class="w-40 flex items-center">
                <img src="/logo.png" alt="logo" class="h-10 w-auto" />
            </RouterLink>

            <!-- Center: Search -->
            <div class="flex-1 px-4">
                <div class="relative max-w-sm hidden md:block">
                    <input type="text" placeholder="Search..." class="form__control pl-10 pr-3" />
                    <svg class="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="11" cy="11" r="7" />
                        <path d="M20 20l-3.5-3.5" />
                    </svg>
                </div>
            </div>

            <!-- Right: Actions -->
            <div class="flex items-center gap-4 px-4">


                <Listbox v-model="selectedYear">
                    <div class="relative mt-1">
                        <ListboxButton
                            class="relative w-full cursor-default rounded border border-border bg-white py-2 pl-3 pr-10 text-left  focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                            <span class="block truncate">Session: {{ selectedYear.name }}</span>
                            <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <IconChevronUpDown class="size-5" aria-hidden="true" />
                            </span>
                        </ListboxButton>

                        <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100"
                            leave-to-class="opacity-0">
                            <ListboxOptions
                                class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                <ListboxOption v-slot="{ active, selected }" v-for="year in years" :key="year.name"
                                    :value="year" as="template">
                                    <li :class="[
                                        active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                                        'relative cursor-default select-none py-2 pl-10 pr-4',
                                    ]">
                                        <span :class="[
                                            selected ? 'font-medium' : 'font-normal',
                                            'block truncate',
                                        ]">{{ year.name }}</span>
                                        <span v-if="selected"
                                            class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                            <IconCheck class="h-5 w-5" aria-hidden="true" />
                                        </span>
                                    </li>
                                </ListboxOption>
                            </ListboxOptions>
                        </transition>
                    </div>
                </Listbox>

                <!-- Notifications -->
                <button
                    class="relative inline-flex items-center justify-center p-2 rounded border border-gray-200 transition-all duration-200 bg-white">
                    <IconBell class="size-5 text-body" />
                    <span class="absolute -top-1 right-0 flex size-3">
                        <span
                            class="absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75 animate-ping"></span>
                        <span class="relative inline-flex size-3 rounded-full bg-sky-500 border border-white"></span>
                    </span>
                </button>

                <!-- Inbox -->
                <button
                    class="relative inline-flex items-center justify-center p-2 rounded border border-gray-200 transition-all duration-200 bg-white">
                    <IconInbox class="size-5 text-body" />
                    <span class="absolute -top-1 right-0 flex size-3">
                        <span
                            class="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-ping"></span>
                        <span class="relative inline-flex size-3 rounded-full bg-red-500 border border-white"></span>
                    </span>
                </button>



                <!-- User info -->
                <div class="flex items-center gap-2">
                    <img src="https://i.pravatar.cc/40?img=5" alt="avatar" class="w-9 h-9 rounded-full" />
                    <div class="hidden sm:block">
                        <div class="text-sm font-semibold">Neurotic Spy</div>
                        <div class="text-xs text-slate-500">neurotic@taildo.com</div>
                    </div>
                </div>
            </div>
        </div>
    </header>


    <div class="flex">
        <Sidebar :open="openSidebar" @close="openSidebar = false" />

        <main class="flex-1 p-6">
            <slot />
        </main>
    </div>
</template>
