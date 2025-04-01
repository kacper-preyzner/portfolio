<template>
  <div
    class="mb-2 text-6xl text-left sm:text-3xl sm:text-center md:text-5xl md:text-center lg:text-6xl lg:text-center xl:text-5xl xl:text-center xs:text-center"
  >
    <h1
      ref="textContainer"
      class="inline-block w-full text-8xl font-bold capitalize dark:text-light"
      :class="className"
    >
      <span
        v-for="(word, index) in words"
        :key="`${word}-${index}`"
        class="inline-block mb-2 text-6xl text-left sm:text-3xl sm:text-center md:text-5xl md:text-center lg:text-6xl lg:text-center xl:text-5xl xl:text-center xs:text-center"
        :ref="
          (el) => {
            if (el) wordElements[index] = el;
          }
        "
      >
        {{ word }}&nbsp;
      </span>
    </h1>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { gsap } from "gsap";

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    default: "",
  },
});

const words = computed(() => props.text.split(" "));
const textContainer = ref(null);
const wordElements = ref([]);

onMounted(() => {
  // Make sure the DOM is loaded
  nextTick(() => {
    // Initial state for the container
    gsap.set(textContainer.value, { opacity: 1 });

    // Initial state for each word
    wordElements.value.forEach((word) => {
      gsap.set(word, { opacity: 0, y: 50 });
    });

    // Animate each word with staggering
    gsap.to(wordElements.value, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.08,
      delay: 0.5,
    });
  });
});
</script>
