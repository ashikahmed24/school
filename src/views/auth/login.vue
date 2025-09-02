<script setup>
import BaseButton from '@/components/BaseButton.vue';
import BaseInput from '@/components/BaseInput.vue';
import { RouterLinkStub } from '@vue/test-utils';
import { reactive } from 'vue';
import { RouterLink } from 'vue-router';

const form = reactive({
    email: 'info@ashikahmed.net',
    password: 'password',
});

</script>

<template>
    <div class="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4">
        <!-- Main Card -->
        <div class="w-full max-w-5xl bg-white rounded-lg grid grid-cols-1 md:grid-cols-2">

            <!-- Left Section -->
            <div class="flex flex-col justify-center items-center p-10">
                <img src="/auth.jpg" alt="Illustration" class="mb-6">
                <h2 class="text-2xl font-bold text-center mb-3">Show your skills be an innovator</h2>
                <p class="text-gray-500 text-center">
                    Seize the moment and help shape the future by starting a career in blockchain now
                </p>
                <div class="flex justify-center mt-6 space-x-2">
                    <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span class="w-2 h-2 bg-gray-300 rounded-full"></span>
                    <span class="w-2 h-2 bg-gray-300 rounded-full"></span>
                    <span class="w-2 h-2 bg-gray-300 rounded-full"></span>
                </div>
            </div>

            <!-- Right Section -->
            <div class="p-10">
                <h2 class="text-2xl font-bold mb-2">Sign In</h2>
                <p class="text-gray-500 mb-6">Welcome back, you've been missed!</p>

                <!-- Form -->
                <form>
                    <BaseInput v-model="form.email" label="Email" placeholder="Enter your email" />

                    <BaseInput v-model="form.password" label="Password" type="password" placeholder="Enter password"
                        error="Password is required" />

                    <div class="flex items-center justify-between mb-6">
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" class="accent-emerald-500">
                            <span class="text-sm text-gray-600">Remember Me</span>
                        </label>
                        <RouterLink :to="{ name: 'forgot' }" class="text-sm text-blue-600 hover:underline">Forget
                            Password?</RouterLink>
                    </div>

                    <BaseButton :loading="false" :block="true">Submit</BaseButton>

                </form>

                <p class="text-sm text-center text-gray-600 mt-6">
                    Don’t have an account yet?
                    <RouterLink :to="{ name: 'register' }" class="text-blue-600 hover:underline">Sign Up</RouterLink>
                </p>
            </div>
        </div>

        <div class="mt-6 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <a href="#">Terms & Condition</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Help</a>
        </div>
    </div>

</template>