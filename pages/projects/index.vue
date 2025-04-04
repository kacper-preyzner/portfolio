<template>
  <div>
    <UButton icon="i-heroicons-arrow-left" variant="ghost" to="/" class="mb-6">
      Back to Home
    </UButton>

    <div class="py-10">
      <h1 class="mb-10 text-4xl font-bold text-center">My Projects</h1>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { projects } from "~/data/projects";
</script>
