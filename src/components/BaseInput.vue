<script setup>
import { computed } from "vue"

const props = defineProps({
    modelValue: {
        type: [String, Number],
        default: "",
    },
    type: {
        type: String,
        default: "text",
    },
    label: {
        type: String,
        default: "",
    },
    placeholder: {
        type: String,
        default: "",
    },
    error: {
        type: String,
        default: "",
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    readonly: {
        type: Boolean,
        default: false,
    },
    prefixIcon: {
        type: [String, Object, Function],
        default: "",
    },
    suffixIcon: {
        type: [String, Object, Function],
        default: "",
    },
})

const emit = defineEmits(["update:modelValue"])

const inputClass = computed(() => [
    "block w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 transition",
    props.error
        ? "border-red-500 focus:ring-red-500"
        : "border-gray-300 focus:ring-blue-500",
    { "bg-gray-100 cursor-not-allowed": props.disabled },
])
</script>

<template>
    <div class="w-full mb-4">
        <!-- Label -->
        <label v-if="label" class="block mb-1 text-sm font-medium text-gray-700">
            {{ label }}
        </label>

        <div class="relative flex items-center">
            <!-- Prefix Icon -->
            <span v-if="prefixIcon" class="absolute left-3 text-gray-400 pointer-events-none">
                <component :is="prefixIcon" class="w-5 h-5" />
            </span>

            <!-- Input -->
            <input :type="type" :placeholder="placeholder" :value="modelValue" :disabled="disabled" :readonly="readonly"
                :class="[inputClass, prefixIcon ? 'pl-10' : '', suffixIcon ? 'pr-10' : '']"
                @input="emit('update:modelValue', $event.target.value)" />

            <!-- Suffix Icon -->
            <span v-if="suffixIcon" class="absolute right-3 text-gray-400 cursor-pointer">
                <component :is="suffixIcon" class="w-5 h-5" />
            </span>
        </div>

        <!-- Error -->
        <p v-if="error" class="mt-1 text-sm text-red-600">{{ error }}</p>
    </div>
</template>
