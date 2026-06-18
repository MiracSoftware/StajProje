<template>
  <div class="w-full overflow-x-hidden">
    <Navbar />

    <main class="flex-grow">
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <FeaturesSection />
      <EventSection />
      <CommentSection />
      <LatestNewsSection />
      <GallerySection />
      <AdresSection />
      <FooterSection />
    </main>
  </div>
</template>

<script setup>
import AboutSection from "../components/AboutSection.vue";
import AdresSection from "../components/AdresSection.vue";
import CommentSection from "../components/CommentSection.vue";
import EventSection from "../components/EventSection.vue";
import FeaturesSection from "../components/FeaturesSection.vue";
import FooterSection from "../components/FooterSection.vue";
import GallerySection from "../components/GallerySection.vue";
import HeroSection from "../components/HeroSection.vue";
import LatestNewsSection from "../components/LatestNewsSection.vue";
import Navbar from "../components/Navbar.vue";
import ProgramsSection from "../components/ProgramsSection.vue";
</script>
