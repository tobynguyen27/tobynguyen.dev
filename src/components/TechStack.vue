<script setup lang="ts">
import Badge from "./Badge.vue"

interface Tech {
    icon: string
    label: string
}

interface Category {
    label: string
    badges: Tech[]
}

const languages: Tech[] = [
    {
        icon: "i-devicon-typescript",
        label: "TypeScript",
    },
    {
        icon: "i-devicon-kotlin",
        label: "Kotlin",
    },
]

const techs: Tech[] = [
    {
        icon: "i-devicon-vscode",
        label: "VSCode",
    },
    {
        icon: "i-devicon-intellij",
        label: "IntelliJ IDEA",
    },
    {
        icon: "i-devicon-archlinux",
        label: "Arch Linux",
    },
]

const categories: Category[] = [
    { label: "I know:", badges: languages },
    { label: "I use:", badges: techs },
]
</script>

<template>
    <div v-for="it in categories" :key="it.label" class="gap-2 items-center" flex="~ row wrap">
        <p>{{ it.label }}</p>
        <Badge v-for="lang in it.badges" :key="lang.label" :label="lang.label" :icon="lang.icon" />
    </div>
</template>
