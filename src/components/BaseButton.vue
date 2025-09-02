<script setup>
import { computed } from "vue"

const props = defineProps({
    variant: {
        type: String,
        default: "primary",
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    loading: {
        type: Boolean,
        default: false,
    },
    block: {
        type: Boolean,
        default: false,
    },
})

const buttonClass = computed(() => {
    const base =
        "focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"

    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
        secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
        outline:
            "border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-blue-500",
        danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    }

    const width = props.block ? "w-full" : "w-auto"

    return [base, variants[props.variant], width].join(" ")
})
</script>

<template>
    <button :disabled="disabled || loading" :class="buttonClass"
        class="px-4 py-2 cursor-pointer inline-flex items-center justify-center font-medium rounded transition focus:outline-none">
        <!-- Loader -->
        <svg v-if="loading" class="animate-spin h-5 w-5 mr-2 text-current" xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
        </svg>

        <!-- Text -->
        <span v-if="loading">Please wait...</span>
        <slot v-else />
    </button>
</template>
