<script setup lang="ts">
import type { LoginResponse } from "~/types/types";

const form = ref({
    login: "",
    password: "",
});

const config = useRuntimeConfig();

async function submit() {
    try {
        const { accessToken } = await $fetch<LoginResponse>(
            `${config.public.backendUrl}/login`,
            {
                method: "POST",
                body: form.value,
            },
        );
        form.value = {
            login: "",
            password: "",
        };
        localStorage.setItem("accessToken", accessToken.toString());
        return navigateTo("/admin");
    } catch (e) {
        console.log(e);
    }
}
</script>

<template>
    <div>
        <UCard>
            <form @submit.prevent="submit">
                <div class="flex flex-col gap-2 w-full">
                    <UFormField label="Login">
                        <UInput
                            class="w-full"
                            icon="material-symbols:person-2-rounded"
                            v-model="form.login"
                            placeholder="Login"
                        />
                    </UFormField>
                    <UFormField label="Password">
                        <UInput
                            class="w-full"
                            icon="material-symbols:mail-rounded"
                            v-model="form.password"
                            type="password"
                            placeholder="password123"
                        />
                    </UFormField>
                    <UButton type="submit" block>Login</UButton>
                </div>
            </form>
        </UCard>
    </div>
</template>

<style scoped></style>
