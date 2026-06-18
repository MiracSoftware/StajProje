<template>
  <section class="py-20 bg-gray-50">
    <div
      class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12"
    >
      <div class="w-full md:w-1/2">
        <h2 class="text-4xl font-bold mb-6 text-gray-800">
          <span class="text-cyan-500">Our</span> Features
        </h2>
        <p class="text-gray-600 mb-10 leading-relaxed">
          At Kids Tree, we see our aim in providing care and an early learning
          environment which is tailored to each individual child's needs, in
          safe, secure, happy and relaxed surroundings. We are committed to your
          children's success!
        </p>

        <div class="grid grid-cols-2 gap-8">
          <div
            v-for="item in stats"
            :key="item.title"
            class="flex items-start gap-4"
          >
            <div class="text-4xl text-cyan-500">{{ item.icon }}</div>
            <div>
              <h4 class="text-3xl font-bold text-gray-800">{{ item.value }}</h4>
              <p class="text-gray-600 font-medium">{{ item.title }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full md:w-1/2">
        <img
          src="../assets/images/features.png"
          alt="Features"
          class="rounded-[25px] shadow-xl w-full object-cover"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { icon: "🎓", value: "15", title: "Awards" },
  { icon: "💼", value: "30+", title: "Certified Teachers" },
  { icon: "🏢", value: "10", title: "Featured Programs" },
  { icon: "👥", value: "100", title: "Children" },
];
</script>

<style>
img {
  transition: transform 0.5s ease;
}
img:hover {
  transform: scale(1.02);
}
</style>
