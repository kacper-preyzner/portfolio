<template>
    <footer class="py-8 mt-20 border-t border-gray-800">
        <div class="flex justify-between items-center">
            <p class="text-sm text-gray-400">
                © {{ new Date().getFullYear() }} Kacper Preyzner. All rights
                reserved.
            </p>
            <div class="flex gap-4">
                <UButton
                    v-for="social in socials"
                    :key="social.name"
                    :to="social.url"
                    target="_blank"
                    variant="ghost"
                    color="gray"
                >
                    <UTooltip :text="social.name">
                        <UIcon
                            :name="social.icon"
                            class="w-5 h-5 duration-300 hover:text-primary-300"
                        />
                    </UTooltip>
                </UButton>
            </div>
        </div>
    </footer>
</template>

<script setup>
const socials = [
    {
        name: "GitHub",
        icon: "i-simple-icons-github",
        url: "https://github.com/kacper-preyzner",
    },
];
</script>
