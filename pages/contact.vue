<template>
  <div class="py-10">
    <h1 class="mb-10 text-4xl font-bold text-center">Get In Touch</h1>
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div>
        <h2 class="mb-4 text-2xl font-bold">Contact Information</h2>
        <div class="space-y-4">
          <div class="flex gap-3 items-center">
            <UIcon
              name="i-heroicons-envelope"
              class="w-6 h-6 text-emerald-500"
            />
            <p>kacper.preyzner@example.com</p>
          </div>
          <div class="flex gap-3 items-center">
            <UIcon
              name="i-heroicons-map-pin"
              class="w-6 h-6 text-emerald-500"
            />
            <p>Warsaw, Poland</p>
          </div>
          <div class="flex gap-3 items-center">
            <UIcon name="i-heroicons-link" class="w-6 h-6 text-emerald-500" />
            <p>github.com/kacperpreyzner</p>
          </div>
        </div>
        <div class="mt-8">
          <h2 class="mb-4 text-2xl font-bold">Connect With Me</h2>
          <div class="flex gap-4">
            <UButton
              v-for="social in socials"
              :key="social.name"
              :to="social.url"
              target="_blank"
              color="gray"
              variant="ghost"
            >
              <UIcon :name="social.icon" class="w-5 h-5" />
            </UButton>
          </div>
        </div>
      </div>
      <div>
        <UCard>
          <form @submit.prevent="submitForm">
            <div class="space-y-6">
              <UFormGroup label="Name">
                <UInput v-model="form.name" placeholder="Your name" />
              </UFormGroup>
              <UFormGroup label="Email">
                <UInput
                  v-model="form.email"
                  type="email"
                  placeholder="your.email@example.com"
                />
              </UFormGroup>
              <UFormGroup label="Subject">
                <UInput
                  v-model="form.subject"
                  placeholder="What is this regarding?"
                />
              </UFormGroup>
              <UFormGroup label="Message">
                <UTextarea
                  v-model="form.message"
                  placeholder="Your message"
                  rows="5"
                />
              </UFormGroup>
              <UButton type="submit" color="emerald" block
                >Send Message</UButton
              >
            </div>
          </form>
        </UCard>
      </div>
    </div>
  </div>
</template>

<script setup>
const socials = [
  { name: "GitHub", icon: "i-simple-icons-github", url: "https://github.com/" },
  {
    name: "LinkedIn",
    icon: "i-simple-icons-linkedin",
    url: "https://linkedin.com/in/",
  },
  {
    name: "Twitter",
    icon: "i-simple-icons-twitter",
    url: "https://twitter.com/",
  },
];

const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const submitForm = () => {
  // This would typically connect to a backend service
  alert(
    "Message sent! (This is a placeholder for actual form submission functionality)",
  );
  form.value = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
};
</script>
