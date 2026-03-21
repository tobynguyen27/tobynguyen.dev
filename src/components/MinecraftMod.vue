<script setup lang="ts">
import { UseImage } from "@vueuse/components"

interface Props {
    name: string
    icon: string
    description: string
    github?: string | undefined
    modrinth?: string | undefined
    curseforge?: string | undefined
}

defineProps<Props>()
</script>

<template>
    <div
        border="~ default"
        flex="~ col"
        class="p-8 gap-5 justify-between"
    >
        <div class="space-y-5">
            <div class="gap-5 items-center" flex="~ row">
                <UseImage :src="icon" alt="icon" class="rounded-lg size-28">
                    <template #loading>
                        <div class="rounded-lg bg-gray-300 size-28 animate-pulse" />
                    </template>
                </UseImage>
                <h1 class="text-2xl font-serif">
                    {{ name }}
                </h1>
            </div>
            <div class="text-muted">
                <p>{{ description }}</p>
            </div>
        </div>
        <div class="flex flex-row gap-3 items-center justify-start">
            <a v-if="github" class="group p-1" :href="github" target="_blank">
                <i class="i-simple-icons:github text-muted duration-200 group-hover:text-default" />
            </a>
            <a v-if="curseforge" class="group p-1" :href="curseforge" target="_blank">
                <i class="i-simple-icons:curseforge group-hover:text-curseforge text-muted duration-200" />
            </a>
            <a v-if="modrinth" class="group p-1" :href="modrinth" target="_blank">
                <i class="i-simple-icons:modrinth hover:text-modrinth text-muted duration-200" />
            </a>
        </div>
    </div>
</template>
