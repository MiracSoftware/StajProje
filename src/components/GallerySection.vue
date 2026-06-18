<template>
  <section class="py-10">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-0">
      <div
        v-for="(image, index) in galleryImages"
        :key="index"
        class="relative group overflow-hidden cursor-pointer"
      >
        <img
          :src="image"
          class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div
          class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
        >
          <span class="text-white text-4xl font-light">+</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Görsel yollarını projedeki assets klasörüne göre düzenle
const galleryImages = [
  "/src/assets/images/orn-4.jpg",
  "/src/assets/images/orn-1.jpg",
  "/src/assets/images/orn-2.jpg",
  "/src/assets/images/orn-3.jpg",
];
</script>
