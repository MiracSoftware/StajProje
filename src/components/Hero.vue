<template>
  <section class="relative h-[600px] w-full overflow-hidden">
    <div class="absolute inset-0 animate-slide">
      <img
        src="https://picsum.photos/1920/1080?random=1"
        class="w-full h-full object-cover"
      />
    </div>
    <div
      class="relative z-10 flex flex-col items-center justify-center h-full text-white bg-black/40"
    >
      <h1 class="text-6xl font-bold mb-6">Oyna, Keşfet ve Öğren.</h1>
      <div class="flex gap-4">
        <button
          class="bg-[#2d9e9e] px-8 py-4 rounded-full hover:scale-105 transition-all"
        >
          Daha Fazla
        </button>
        <button
          class="border-2 border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all"
        >
          Misyonumuz
        </button>
      </div>
    </div>
  </section>
</template>

<style>
@keyframes slide {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
.animate-slide {
  animation: slide 20s infinite;
}
</style>
