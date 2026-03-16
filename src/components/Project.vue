<script setup lang="ts">
import { UseImage } from "@vueuse/components"

interface Props {
    link: string
    icon: string
    name: string
    description: string
}

defineProps<Props>()
</script>

<template>
    <a
        :href="link"
        target="_blank"
        border="~ default hover:hover"
        flex="~ col"
        class="p-5 rounded-lg gap-3 duration-200 hover:(bg-gray-200 cursor-pointer)"
    >
        <div class="gap-3 items-center" flex="~ row">
            <UseImage :src="icon" alt="icon" class="rounded-lg size-28">
                <template #loading>
                    <div class="rounded-lg bg-gray-300 size-28 animate-pulse" />
                </template>
            </UseImage>
            <h1 class="text-lg font-semibold">{{ name }}</h1>
        </div>
        <div class="text-muted">
            <p>{{ description }}</p>
        </div>
    </a>
</template>
