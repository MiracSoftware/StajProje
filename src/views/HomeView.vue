<template>
  <div class="w-full min-h-screen overflow-x-hidden">
    <Navbar />
    <main class="w-full">
      <HeroSection id="home" />
      <AboutSection id="about" />
      <ProgramsSection id="programs" />
      <FeaturesSection id="features" />
      <EventSection id="events" />
      <CommentSection id="comments" />
      <LatestNewsSection id="news" />
      <GallerySection id="gallery" />
      <AdresSection id="contact" />
    </main>
    <FooterSection />
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

<style>
html {
  scroll-behavior: smooth;
}
</style>
