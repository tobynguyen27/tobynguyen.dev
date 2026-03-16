<script setup lang="ts">
interface Props {
    icon: string
    label: string
}

defineProps<Props>()
</script>

<template>
    <div
        flex="~ row"
        bg="gray-100 hover:gray-200"
        class="p-1 rounded-lg gap-2 w-fit items-center justify-center hover:(cursor-pointer)"
    >
        <i class="size-5" :class="[icon]" /> {{ label }}
    </div>
</template>
