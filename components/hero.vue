<template>
  <section class="flex flex-col items-center py-20 text-center">
    <!-- <UAvatar -->
    <!--   src="/api/placeholder/400/400" -->
    <!--   alt="Kacper Preyzner" -->
    <!--   size="2xl" -->
    <!--   class="mb-6" -->
    <!-- /> -->
    <AnimatedText
      text="Kacper Preyzner"
      className="text-emerald-500"
      :debug="false"
    />
    <AnimatedText
      text="Full Stack Web Developer"
      className="mt-4 mb-8 text-2xl font-normal text-gray-400"
      :debug="false"
    />
    <h1 class="mb-4 text-4xl font-bold md:text-6xl">Kacper Preyzner</h1>
    <p class="mb-8 text-xl text-gray-400 md:text-2xl">
      Full Stack Web Developer
    </p>
    <div class="flex gap-4">
      <UButton to="/projects">View My Work</UButton>
      <UButton to="/contact" variant="outline">Get In Touch</UButton>
    </div>
  </section>
</template>
