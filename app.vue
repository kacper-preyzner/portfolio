<template>
  <UApp>
    <div class="min-h-screen">
      <UContainer class="py-4 mx-auto max-w-7xl">
        <Header />
        <NuxtPage />
        <Footer />
      </UContainer>
    </div>
  </UApp>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
