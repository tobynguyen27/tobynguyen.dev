<script setup lang="ts">
import { useClipboard } from "@vueuse/core"

interface Props {
    content: string
}

defineProps<Props>()

const { copy, copied } = useClipboard()
</script>

<template>
    <button
        :disabled="copied"
        flex="~ row"
        class="text-blue-700 font-mono gap-1 items-center justify-center hover:cursor-pointer"
        @click="copy(content)"
    >
        <i class="i-lucide-link size-4" />{{ copied ? "Copied to clipboard" : "Copy URL" }}
    </button>
</template>
