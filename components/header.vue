<template>
  <header class="py-6">
    <nav class="flex justify-between items-center">
      <NuxtLink to="/" class="text-2xl font-bold text-primary-500">KP</NuxtLink>
      <div class="flex gap-6">
        <UButton to="/" variant="ghost">Home</UButton>
        <UButton to="/projects" variant="ghost">Projects</UButton>
        <UButton to="/about" variant="ghost">About</UButton>
        <UButton to="/contact" variant="ghost">Contact</UButton>
      </div>
    </nav>
  </header>
</template>
