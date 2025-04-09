<script setup>
const socials = [
    {
        name: "GitHub",
        icon: "i-simple-icons-github",
        url: "https://github.com/",
    },
];

const form = ref({
    name: "",
    email: "",
    topic: "",
    message: "",
});

const toast = useToast();

async function sendMessage() {
    try {
        await $fetch("https://backend.kacper-preyzner.pl/message", {
            method: "POST",
            body: form.value,
        });
        form.value = {
            name: "",
            email: "",
            topic: "",
            message: "",
        };
        toast.add({ title: "Message sent succesfully!", type: "foreground" });
        return navigateTo("/");
    } catch (e) {
        toast.add({ title: "Something went wrong :(", type: "foreground" });
        console.log(e);
    }
}

const submitForm = async () => {
    sendMessage();
};
</script>

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
                            class="w-6 h-6 text-primary-400"
                        />
                        <p>kacperpreyzner@gmail.com</p>
                    </div>
                    <div class="flex gap-3 items-center">
                        <UIcon
                            name="i-heroicons-map-pin"
                            class="w-6 h-6 text-primary-400"
                        />
                        <p>Złotoryja, Poland</p>
                    </div>
                    <div class="flex gap-3 items-center">
                        <UIcon
                            name="i-heroicons-link"
                            class="w-6 h-6 text-primary-400"
                        />
                        <NuxtLink
                            to="https://github.com/prezeswastaken?tab=repositories"
                            target="_about_blank"
                            class="duration-300 hover:text-primary-400"
                            >github.com/prezeswastaken</NuxtLink
                        >
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
                        <div class="flex flex-col gap-2 w-full">
                            <UFormField label="Name">
                                <UInput
                                    icon="material-symbols:person-2-rounded"
                                    v-model="form.name"
                                    placeholder="Your name"
                                />
                            </UFormField>
                            <UFormField label="Email">
                                <UInput
                                    class="w-full"
                                    icon="material-symbols:mail-rounded"
                                    v-model="form.email"
                                    type="email"
                                    placeholder="your.email@example.com"
                                />
                            </UFormField>
                            <UFormField label="Subject">
                                <UInput
                                    class="w-full"
                                    icon="material-symbols:topic"
                                    v-model="form.topic"
                                    placeholder="What is this regarding?"
                                />
                            </UFormField>
                            <UFormField label="Message">
                                <UTextarea
                                    class="w-full"
                                    v-model="form.message"
                                    placeholder="Your message"
                                    rows="5"
                                />
                            </UFormField>
                            <UButton type="submit" block>Send Message</UButton>
                        </div>
                    </form>
                </UCard>
            </div>
        </div>
    </div>
</template>
