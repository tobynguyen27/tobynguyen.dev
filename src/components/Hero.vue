<script setup lang="ts"></script>

<template>
    <div class="flex flex-col gap-18 min-h-screen items-start justify-center">
        <div class="">
            <h1 class="text-7xl font-serif md:text-9xl sm:text-8xl">
                Toby <br> Nguyen
            </h1>
        </div>
        <div class="text-xl flex flex-row w-full items-center justify-between">
            <p>A passionate <span class="font-serif">Open Sourcer</span>. I make free softwares for everyone.</p>
            <p class="text-sm flex-row gap-1 hidden items-center justify-center lg:flex">
                <i class="i-lucide-map-pin" />
                Ho Chi Minh City, Vietnam
            </p>
        </div>
        <div class="flex flex-row gap-5">
            <a href="https://resume.tobynguyen.net" target="_blank" border="~ default" class="text-black p-3 bg-white duration-200 hover:(opacity-80 cursor-pointer)">
                View Resume
            </a><a href="mailto:hi@tobynguyen.net" border="~ default hover:hover" class="p-3 duration-200 hover:(bg-gray-200 cursor-pointer)">
                Contact Me
            </a>
        </div>
    </div>
</template>
