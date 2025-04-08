<script setup lang="ts">
import type { Message } from "~/types/types";

definePageMeta({
    middleware: ["admin"],
});

const messages = ref<Array<Message> | null>(null);
onMounted(async () => {
    const token = localStorage.getItem("accessToken");
    if (token == null) {
        return navigateTo("/login");
    }
    messages.value = await $fetch<Array<Message>>(
        "https://backend.kacper-preyzner.pl/message",
        {
            headers: { Authorization: `Bearer: ${token}` },
        },
    );
    console.log(messages.value);
});
</script>

<template>
    <div>
        <div>Messages</div>
        <Message v-for="message in messages" :message="message" />
    </div>
</template>

<style scoped></style>
