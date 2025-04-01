<template>
  <UCard
    class="h-full transition-transform project-card hover:scale-[1.02]"
    variant="subtle"
  >
    <img
      :src="project.image"
      :alt="project.title"
      class="object-cover w-full h-48 rounded-t-lg"
    />
    <div class="p-4">
      <h3 class="mb-2 text-xl font-bold">{{ project.title }}</h3>
      <p class="mb-4 text-gray-400 line-clamp-2">
        {{ project.shortDescription }}
      </p>
      <div class="flex flex-wrap gap-2 mb-4">
        <UBadge
          v-for="tech in project.technologies"
          :key="tech"
          color="neutral"
        >
          {{ tech }}
        </UBadge>
      </div>
      <UButton
        color="emerald"
        variant="ghost"
        @click="navigateToProject(project.id)"
        class="w-full"
      >
        View Details
      </UButton>
    </div>
  </UCard>
</template>

<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const router = useRouter();

const navigateToProject = (id) => {
  router.push(`/projects/${id}`);
};
</script>
