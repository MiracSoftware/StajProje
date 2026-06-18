<template>
  <div class="font-sans text-gray-800">
    <header
      class="flex justify-between items-center px-16 py-6 bg-white border-b"
    >
      <div class="flex items-center gap-2">
        <img src="../assets/images/logo.png" class="h-10" />
        <span class="text-xl font-bold"
          >Kids Tree <br /><small class="text-xs">Preschool</small></span
        >
      </div>
      <nav class="space-x-8 font-semibold">
        <a href="#" class="text-yellow-500">Home</a>
        <a href="#">Elements</a>
        <a href="#">Pages</a>
        <a href="#">News</a>
        <a href="#">Gallery</a>
        <a href="#">Shop</a>
        <a href="#">Donate</a>
        <a href="#">Contacts</a>
      </nav>
    </header>

    <slot />

    <footer class="bg-gray-900 text-white p-16 text-center">
      <img src="../assets/images/logo-81x119.png" class="h-16 mx-auto mb-6" />
      <p class="mb-4">Kids Tree Preschool</p>
      <div class="space-x-4 opacity-50 mb-6">
        <span>Facebook</span><span>Twitter</span><span>Google</span
        ><span>Instagram</span>
      </div>
      <p class="text-sm opacity-30">
        © 2026. All Rights Reserved. Privacy Policy
      </p>
    </footer>
  </div>
</template>
