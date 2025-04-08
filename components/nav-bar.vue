<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items = ref<NavigationMenuItem[]>([
    {
        label: "Home",
        icon: "material-symbols:home",
        to: "/",
    },
    {
        label: "Projects",
        icon: "si:projects-alt-fill",
        to: "/projects",
    },
    {
        label: "Contact",
        icon: "material-symbols:contact-page-rounded",
        to: "/contact",
    },
]);
</script>

<template>
    <div>
        <UNavigationMenu :items="items" />
    </div>
</template>

<style scoped></style>
