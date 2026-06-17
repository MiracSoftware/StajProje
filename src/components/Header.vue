<template>
  <nav
    class="flex justify-between items-center p-6 bg-white shadow-md sticky top-0 z-50"
  >
    <div class="text-2xl font-bold text-[#2d9e9e]">Çocuk Ağacı</div>
    <button @click="isOpen = !isOpen" class="md:hidden text-3xl">
      <i class="fa-solid fa-bars"></i>
    </button>
    <div
      :class="isOpen ? 'flex' : 'hidden'"
      class="flex-col md:flex md:flex-row gap-8 absolute md:static top-20 left-0 w-full bg-white p-6 md:p-0 shadow-lg md:shadow-none text-center"
    >
      <a href="#" class="hover:text-[#2d9e9e] transition">Ana Sayfa</a>
      <a href="#" class="hover:text-[#2d9e9e] transition">Programlar</a>
      <a href="#" class="hover:text-[#2d9e9e] transition">İletişim</a>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
const isOpen = ref(false);
</script>
