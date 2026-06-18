<template>
  <footer
    class="bg-white py-16 flex flex-col items-center border-t border-gray-100"
  >
    <div class="mb-8 text-center">
      <img src="../assets/images/logo.png" class="w-16 mx-auto mb-2" />
      <h3 class="font-bold text-gray-800 text-xl">Kids Tree</h3>
      <p class="text-gray-400 italic font-serif">Preschool</p>
    </div>

    <div class="flex gap-4 mb-12">
      <a href="#" class="social-icon hover:bg-blue-600"
        ><i class="fab fa-facebook-f"></i
      ></a>
      <a href="#" class="social-icon hover:bg-black"
        ><i class="fa-brands fa-x-twitter"></i
      ></a>
      <a href="#" class="social-icon hover:bg-red-600"
        ><i class="fab fa-google"></i
      ></a>
      <a href="#" class="social-icon hover:bg-pink-600"
        ><i class="fab fa-instagram"></i
      ></a>
    </div>

    <p class="text-gray-500 text-sm">
      © 2026. All Rights Reserved. Privacy Policy
    </p>

    <button
      @click="scrollToTop"
      class="fixed bottom-8 right-8 bg-gray-800 text-white w-12 h-12 rounded-full shadow-lg hover:bg-gray-700 transition-all flex items-center justify-center"
    >
      <i class="fas fa-chevron-up"></i>
    </button>
  </footer>
</template>

<script setup>

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<style scoped>
.social-icon {
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #f3f4f6; 
  color: #6b7280;
  transition: all 0.3s ease;
}

.social-icon:hover {
  color: white;
  transform: translateY(-3px);
}
</style>
