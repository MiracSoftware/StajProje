<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-6 text-center">
      <h2 class="text-4xl font-bold text-cyan-600 mb-16">Latest News</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="news in newsList" :key="news.title" class="text-left group">
          <img
            :src="news.image"
            class="w-full h-48 object-cover rounded-lg mb-6 shadow-md transition-transform group-hover:scale-105"
          />

          <h3 class="text-xl font-bold text-yellow-500 mb-3">
            {{ news.title }}
          </h3>
          <p class="text-gray-600 text-sm mb-4 leading-relaxed">
            {{ news.description }}
          </p>

          <div class="flex items-center text-gray-400 text-xs">
            <span class="mr-2">📅</span> {{ news.date }}
          </div>
        </div>
      </div>

      <div class="mt-16">
        <button
          class="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          View All News Posts
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { styleText } from 'util';

const newsList = [
  {
    title: "Mother's Day",
    description:
      "Mother's Day is a celebration honoring the mother of the family, as well as motherhood, maternal bonds, and the influence of mothers in society.",
    date: "2 days ago",
    image: "/src/assets/images/LatestNews-1.jpg",
  },
  {
    title: "Painting Class",
    description:
      "In our kids' painting classes, we guarantee the best personalized instruction and one-on-one guidance for every single child who walks through our door.",
    date: "2 days ago",
    image: "/src/assets/images/LatestNews-2.jpg",
  },
  {
    title: "Our New Teacher",
    description:
      "We are glad to welcome Mary Johnson, our new teacher. She now teaches the class of 5 children aged up to 7 years old at Kids Tree Preschool.",
    date: "2 days ago",
    image: "/src/assets/images/LatestNews-3.jpg",
  },
  {
    title: "We Integrate Creativity",
    description:
      "All children need to be truly creative is the freedom to commit themselves completely to the effort and make whatever activity they are doing their own.",
    date: "2 days ago",
    image: "/src/assets/images/LatestNews-4.jpg",
  },
];
</script>
