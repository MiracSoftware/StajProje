<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 p-12">
    <div
      v-for="(item, index) in programlar"
      :key="index"
      class="rounded-3xl overflow-hidden shadow-xl border hover:shadow-2xl transition-all duration-300"
    >
      <img
        :src="item.image"
        class="w-full h-56 object-cover"
        alt="Program Görseli"
      />
      <div class="p-8">
        <h3 class="text-2xl font-bold mb-2">{{ item.baslik }}</h3>
        <p class="text-gray-600 mb-6">
          {{ item.aciklama }}
        </p>
        <button
          class="text-[#2d9e9e] font-bold border-b-2 border-[#2d9e9e] hover:text-[#237d7d]"
        >
          Detayları İncele
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const programlar = [
  {
    baslik: "Okul Öncesi Eğitim",
    aciklama:
      "Çocukların temel becerilerini geliştiren yaratıcı oyunlar ve dersler.",
    image: "https://picsum.photos/400/250?random=11",
  },
  {
    baslik: "Sanat ve Müzik",
    aciklama: "Ritim ve renklerin dünyasında çocukların hayal gücünü keşfedin.",
    image: "https://picsum.photos/400/250?random=12",
  },
  {
    baslik: "Dil Gelişimi",
    aciklama:
      "Eğlenceli aktivitelerle yabancı dil ve iletişim becerilerini güçlendiriyoruz.",
    image: "https://picsum.photos/400/250?random=13",
  },
];
</script>
