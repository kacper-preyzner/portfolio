<template>
    <div class="text-white">
        <Hero />
        <br class="mt-10" />
        <section class="py-10">
            <h2 class="mb-10 text-3xl font-bold text-center">
                Featured Projects
            </h2>
            <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <ProjectCard
                    v-for="project in featuredProjects"
                    :key="project.id"
                    :project="project"
                />
            </div>
            <div class="flex justify-center mt-10">
                <UButton to="/projects" color="emerald"
                    >View All Projects</UButton
                >
            </div>
        </section>
        <section class="py-10">
            <h2 class="mb-10 text-3xl font-bold text-center">Skills</h2>
            <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                <UCard>
                    <template #header>
                        <div class="flex gap-2 items-center">
                            <UIcon
                                name="i-heroicons-code-bracket"
                                class="text-primary-500"
                            />
                            <h3 class="text-xl font-bold">Frontend</h3>
                        </div>
                    </template>
                    <div class="flex flex-wrap gap-2">
                        <UBadge
                            v-for="skill in frontendSkills"
                            :key="skill"
                            variant="subtle"
                            >{{ skill }}</UBadge
                        >
                    </div>
                </UCard>
                <UCard>
                    <template #header>
                        <div class="flex gap-2 items-center">
                            <UIcon
                                name="i-heroicons-server"
                                class="text-primary-500"
                            />
                            <h3 class="text-xl font-bold">Backend</h3>
                        </div>
                    </template>
                    <div class="flex flex-wrap gap-2">
                        <UBadge
                            v-for="skill in backendSkills"
                            :key="skill"
                            variant="subtle"
                            >{{ skill }}</UBadge
                        >
                    </div>
                </UCard>
            </div>
        </section>
    </div>
</template>

<script setup>
import { projects } from "~/data/projects";

const featuredProjects = projects.slice(0, 3);
const frontendSkills = [
    "JavaScript",
    "TypeScript",
    "Vue.js",
    "Nuxt.js",
    "React",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Responsive Design",
];
const backendSkills = [
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "RESTful APIs",
    "GraphQL",
    "Authentication",
    "Server-side Rendering",
];
</script>
