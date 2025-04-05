<script setup lang="ts">
import { ref } from "vue";
import type { Container } from "@tsparticles/engine";

// Define options and onLoad within the script setup block
const options = {
    fullScreen: {
        enable: false,
    },
    background: {
        color: {
            value: "transparent",
        },
    },
    particles: {
        color: {
            value: "#99A1AF",
        },
        links: {
            color: "#99A1AF",
            enable: true,
        },
        move: {
            enable: true,
        },
        number: {
            value: 75,
        },
    },
};

const onLoad = (container: Container) => {
    container.pause();
    setTimeout(() => container.play(), 2000);
};
</script>

<template>
    <section class="flex relative flex-col items-center py-20 text-center">
        <!-- Particles container -->
        <div class="particles-container">
            <ClientOnly>
                <NuxtParticles
                    id="tsparticles"
                    :options="options"
                    @load="onLoad"
                ></NuxtParticles>
            </ClientOnly>
        </div>

        <!-- Content -->
        <div class="content-container">
            <ClientOnly>
                <AnimatedText
                    text="Kacper Preyzner"
                    className="text-primary-400"
                    :debug="false"
                />
                <AnimatedText
                    text="Full Stack Web Developer"
                    className="mt-4 mb-8 text-2xl font-normal text-gray-400"
                    :debug="false"
                />
            </ClientOnly>

            <div class="flex gap-4 justify-center">
                <UButton to="/projects">View My Work</UButton>
                <UButton to="/contact" variant="outline">Get In Touch</UButton>
            </div>
        </div>
    </section>
</template>

<style scoped>
.particles-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.content-container {
    position: relative;
    z-index: 10;
}
</style>
