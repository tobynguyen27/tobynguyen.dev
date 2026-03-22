<script setup lang="ts">
interface Method {
    name: string
    description: string
}

const items: Method[] = [
    {
        name: "Discovery",
        description: "Understand the problem.",
    },
    {
        name: "Strategy",
        description: "Defining the architecture, tech stack and design system.",
    },
    {
        name: "Build",
        description: "Writing clean, accessible, and performant code.",
    },
    {
        name: "Refine",
        description: "Polishing details, fixing edge cases and elevation of overall quality standards.",
    },
]
</script>

<template>
    <div class="mb-24 mt-36 w-full space-y-12">
        <h1 class="text-5xl font-serif">
            Methodology
        </h1>

        <div class="gap-5 grid grid-cols-1 place-items-center lg:grid-cols-4 sm:grid-cols-2">
            <div v-for="(it, index) in items" :key="it.name" class="pb-3 border-b-2 border-b-base h-full w-full duration-200 space-y-5 hover:border-b-gray-1000">
                <p class="font-mono">
                    0{{ index + 1 }}
                </p>
                <h2 class="text-3xl font-serif underline-offset-5">
                    {{ it.name }}
                </h2>
                <p class="text-muted">
                    {{ it.description }}
                </p>
            </div>
        </div>
    </div>
</template>
