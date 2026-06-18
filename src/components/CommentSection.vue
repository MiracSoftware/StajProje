<template>
  <section
    class="relative py-20 overflow-hidden bg-cover bg-center"
    style="background-image: url(src/assets/images/commentBackground.jpg)"
  >
    <div class="absolute inset-0 bg-black/50"></div>

    <div class="relative max-w-4xl mx-auto px-6 text-white text-center">
      <transition name="slide" mode="out-in">
        <div :key="currentPage" class="flex flex-col items-center">
          <p class="text-2xl md:text-3xl italic mb-10 leading-relaxed">
            "{{ currentComments[currentPage].quote }}"
          </p>
          <img
            :src="currentComments[currentPage].avatar"
            class="w-16 h-16 rounded-full mb-4 border-2 border-white"
          />
          <h4 class="font-bold text-lg">
            {{ currentComments[currentPage].name }}
          </h4>
          <span class="text-sm opacity-80">{{
            currentComments[currentPage].role
          }}</span>
        </div>
      </transition>

      <div class="flex justify-center gap-3 mt-12">
        <button
          v-for="(_, index) in totalPages"
          :key="index"
          @click="currentPage = index"
          :class="[
            'w-3 h-3 rounded-full transition-all',
            currentPage === index
              ? 'bg-yellow-400'
              : 'bg-white/50 hover:bg-white',
          ]"
        ></button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";

const comments = [
  {
    quote:
      "I want to take this opportunity to thank you and your staff for all you have done for my daughter. I am in awe at how much Lauren has grown both emotionally and intellectually since last year.",
    name: "Steven Alvarez",
    role: "Taxi driver",
    avatar: "/src/assets/images/user-steven.jpg",
  },
  {
    quote:
      "Words truly can't express how grateful I am that a preschool like this exists. I thought that a place like this was a mythical unicorn that parents searched for, but never found.",
    name: "Debra Banks",
    role: "Sales manager",
    avatar: "/src/assets/images/user-debra.jpg",
  },
];

const currentPage = ref(0);
const totalPages = Math.ceil(comments.length / 1);
const currentComments = computed(() => comments);
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}
.slide-enter-from {
  opacity: 0;
  transform: translateX(50px);
}
.slide-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}
</style>
