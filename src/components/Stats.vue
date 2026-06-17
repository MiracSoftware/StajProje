<template>
  <div
    class="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 bg-[#f8f9fa] text-center"
  >
    <div v-for="stat in stats" :key="stat.label">
      <div class="text-4xl font-bold text-[#2d9e9e]">{{ stat.value }}</div>
      <div class="text-gray-600 mt-2">{{ stat.label }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const stats = [
  { value: "15", label: "Ödüller" },
  { value: "30+", label: "Sertifikalı Öğretmenler" },
  { value: "10", label: "Özelleştirilmiş Programlar" },
  { value: "100", label: "Çocuk" },
];
</script>
