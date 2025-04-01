<template>
  <div class="py-10">
    <UButton
      icon="i-heroicons-arrow-left"
      variant="ghost"
      to="/projects"
      class="mb-6"
    >
      Back to Projects
    </UButton>

    <div v-if="project">
      <img
        :src="project.image"
        :alt="project.title"
        class="object-cover mb-6 w-full h-64 rounded-lg md:h-80"
      />

      <h1 class="mb-4 text-4xl font-bold">{{ project.title }}</h1>

      <div class="flex flex-wrap gap-2 mb-6">
        <UBadge
          v-for="tech in project.technologies"
          :key="tech"
          color="emerald"
          variant="subtle"
        >
          {{ tech }}
        </UBadge>
      </div>

      <div class="mb-8 max-w-none prose prose-invert">
        <p>{{ project.description }}</p>
      </div>

      <div class="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2">
        <UCard>
          <template #header>
            <h3 class="text-lg font-bold">Features</h3>
          </template>
          <ul class="pl-5 list-disc">
            <li v-for="feature in project.features" :key="feature" class="mb-2">
              {{ feature }}
            </li>
          </ul>
        </UCard>

        <UCard>
          <template #header>
            <h3 class="text-lg font-bold">Project Details</h3>
          </template>
          <div class="space-y-4">
            <div>
              <p class="text-gray-400">Type:</p>
              <p>{{ project.type }}</p>
            </div>
            <div>
              <p class="text-gray-400">Duration:</p>
              <p>{{ project.duration }}</p>
            </div>
            <div>
              <p class="text-gray-400">Role:</p>
              <p>{{ project.role }}</p>
            </div>
          </div>
        </UCard>
      </div>

      <div class="flex gap-4">
        <UButton
          v-if="project.demoUrl"
          :to="project.demoUrl"
          target="_blank"
          color="emerald"
        >
          Live Demo
          <template #trailing>
            <UIcon name="i-heroicons-arrow-top-right-on-square" />
          </template>
        </UButton>
        <UButton
          v-if="project.codeUrl"
          :to="project.codeUrl"
          target="_blank"
          variant="outline"
        >
          View Code
          <template #trailing>
            <UIcon name="i-heroicons-code-bracket" />
          </template>
        </UButton>
      </div>
    </div>
    <div v-else class="py-20 text-center">
      <p class="text-xl">Project not found</p>
      <UButton to="/projects" class="mt-4">View All Projects</UButton>
    </div>
  </div>
</template>

<script setup>
import { projects } from "~/data/projects";

const route = useRoute();
const projectId = route.params.id;
const project = projects.find((p) => p.id.toString() === projectId);
</script>
