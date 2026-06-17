<script setup lang="ts">
import Events from "./components/Events.vue";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import Programs from "./components/Programs.vue";
import Stats from "./components/Stats.vue";
import VideoSection from "./components/VideoSection.vue";
</script>

<template>
  <div class="font-sans">
    <Header />
    <Hero />
    <Stats />
    <Programs />
    <VideoSection />
    <Events />
    <Footer />
  </div>
</template>
