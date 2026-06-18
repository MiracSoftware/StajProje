<template>
  <nav class="relative flex justify-between items-center px-6 py-6 bg-white shadow-sm font-bold w-full z-50">
    <div class="flex items-center gap-2">
      <img src="../assets/images/logo.png" class="w-8" alt="Logo" />
      <span class="text-xl tracking-tight">Kids Tree</span>
    </div>

    <div class="hidden md:flex gap-6 text-xs text-gray-700 uppercase tracking-wider">
      <a href="#" class="text-yellow-500">Home</a>
      <a href="#" class="hover:text-cyan-600 transition">Elements ▾</a>
      <a href="#" class="hover:text-cyan-600 transition">Pages ▾</a>
      <a href="#" class="hover:text-cyan-600 transition">News ▾</a>
      <a href="#" class="hover:text-cyan-600 transition">Gallery ▾</a>
      <a href="#" class="hover:text-cyan-600 transition">Shop ▾</a>
      <a href="#" class="hover:text-cyan-600 transition">Donate</a>
      <a href="#" class="hover:text-cyan-600 transition">Contacts</a>
    </div>

    <button @click="isOpen = !isOpen" class="md:hidden text-2xl text-cyan-600 focus:outline-none">
      ☰
    </button>

    <transition name="fade">
      <div 
        v-if="isOpen" 
        class="absolute top-full left-0 w-full bg-white shadow-xl p-6 flex flex-col gap-4 text-center border-t md:hidden"
      >
        <a href="#" @click="isOpen = false" class="text-yellow-500">Home</a>
        <a href="#" @click="isOpen = false" class="hover:text-cyan-600">Elements</a>
        <a href="#" @click="isOpen = false" class="hover:text-cyan-600">Pages</a>
        <a href="#" @click="isOpen = false" class="hover:text-cyan-600">News</a>
        <a href="#" @click="isOpen = false" class="hover:text-cyan-600">Gallery</a>
        <a href="#" @click="isOpen = false" class="hover:text-cyan-600">Shop</a>
        <a href="#" @click="isOpen = false" class="hover:text-cyan-600">Donate</a>
        <a href="#" @click="isOpen = false" class="hover:text-cyan-600">Contacts</a>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
const isOpen = ref(false);
</script>

<style scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>