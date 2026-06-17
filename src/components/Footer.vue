<template>
  <footer class="bg-gray-900 text-white py-16 px-10">
    <div class="grid md:grid-cols-3 gap-12 text-center md:text-left">
      <div class="rounded-2xl overflow-hidden border-4 border-[#2d9e9e]">
        <iframe
          src="https://www.google.com/maps/embed?..."
          width="100%"
          height="200"
        ></iframe>
      </div>
      <div>
        <h4 class="text-xl font-bold mb-6">İletişim</h4>
        <p>
          <i class="fa-solid fa-location-dot text-[#2d9e9e] mr-3"></i> İstanbul,
          Türkiye
        </p>
        <p>
          <i class="fa-solid fa-phone text-[#2d9e9e] mr-3"></i> +90 544 379 04
          63
        </p>
      </div>
      <div class="flex justify-center md:justify-start gap-8 text-3xl">
        <i
          class="fa-brands fa-facebook hover:text-[#2d9e9e] cursor-pointer transition"
        ></i>
        <i
          class="fa-brands fa-instagram hover:text-[#2d9e9e] cursor-pointer transition"
        ></i>
        <i
          class="fa-brands fa-youtube hover:text-[#2d9e9e] cursor-pointer transition"
        ></i>
      </div>
    </div>
  </footer>
</template>
