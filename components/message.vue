<script setup lang="ts">
import type { Message } from "~/types/types";

defineProps<{
    message: Message;
}>();
</script>

<template>
    <UCard>
        <div class="flex flex-col gap-8">
            <p>{{ message.name }}</p>
            <p>{{ message.email }}</p>
            <p>{{ message.topic }}</p>
            <p>{{ message.message }}</p>
        </div>
    </UCard>
</template>

<style scoped></style>
