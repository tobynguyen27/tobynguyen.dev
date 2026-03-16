<script setup lang="ts">
interface Social {
    label: string
    icon: string
    link: string
}

const socials: Social[] = [
    {
        label: "GitHub",
        icon: "i-carbon-logo-github",
        link: "https://github.com/tobynguyen27",
    },
    {
        label: "X",
        icon: "i-carbon-logo-x",
        link: "https://x.com/imtobynguyen",
    },
]
</script>

<template>
    <div class="gap-2" flex="~ row">
        <p>You can find me via:</p>
        <div class="gap-2" flex="~ row">
            <a
                v-for="it in socials"
                :key="it.label"
                :href="it.link"
                :aria-label="it.label"
                class="duration-200 hover:(text-default cursor-pointer)"
                target="_blank"
            >
                <i :class="it.icon" />
            </a>
        </div>
    </div>
</template>
