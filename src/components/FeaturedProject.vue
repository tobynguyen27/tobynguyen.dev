<script setup lang="ts">
interface Props {
    releaseYear: number
    name: string
    description: string
    image: string
    tags: string[]
}

const { image } = defineProps<Props>()
</script>

<template>
    <a href="/" target="_blank" class="group border border-default flex flex-row">
        <div class="flex w-3/5 hidden items-center justify-center xl:block">
            <img :src="`/img/features/${image}`" class="aspect-3/2">
        </div>
        <div class="p-8 flex flex-col gap-8 w-full justify-between xl:w-2/5">
            <div class="space-y-8">
                <div class="flex items-center justify-between">
                    <p class="text-sm font-mono">
                        {{ releaseYear }}
                    </p>
                    <i class="i-ic-baseline-arrow-outward text-sm hidden xl:text-xl group-hover:block xl:block" />
                </div>

                <div class="space-y-8">
                    <h1 class="text-4xl font-serif">
                        {{ name }}
                    </h1>
                    <p class="text-lg">{{ description }}</p>
                </div>
            </div>

            <div class="flex flex-row flex-wrap gap-5">
                <div v-for="it in tags" :key="it" class="text-muted px-3 py-2 border border-default flex flex-row gap-1 uppercase items-center justify-center">
                    <p class="text-xs text-center">
                        {{ it }}
                    </p>
                </div>
            </div>
        </div>
    </a>
</template>
