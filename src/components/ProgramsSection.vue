<template>
  <section class="bg-[#2d9e9e] py-20 text-white text-center">
    <h2 class="text-4xl font-bold mb-12">Our Programs</h2>
    <div class="grid grid-cols-3 gap-8 px-24">
      <div
        v-for="i in 3"
        :key="i"
        class="bg-white text-gray-800 rounded-[25px] p-6 text-left shadow-xl hover:-translate-y-2 transition"
      >
        <img
          :src="getImageUrl(i)"
          class="w-full h-48 object-cover rounded-xl mb-4"
        />
        <h3 class="font-bold text-xl text-yellow-500">Program {{ i }}</h3>
        <p class="text-sm mt-2">Learn and Make {{ i }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const getImageUrl = (i) => {
  return new URL(`../assets/images/program-${i}.jpg`, import.meta.url).href;
};
</script>