<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-4xl font-bold text-center text-cyan-600 mb-12">Events</h2>

      <div class="grid md:grid-cols-2 gap-8">
        <div
          v-for="(event, index) in events"
          :key="event.title"
          class="bg-white shadow-md rounded-lg overflow-hidden border group"
        >
          <div class="relative overflow-hidden">
            <img
              :src="getImageUrl(index + 1)"
              class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            <div
              class="absolute inset-0 bg-cyan-500/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3"
            >
              <button
                class="bg-yellow-400 text-white font-bold py-2 px-6 rounded-full hover:bg-yellow-500 transition"
              >
                Book Now
              </button>

              <button
                class="border-2 border-white text-white font-bold py-2 px-6 rounded-full hover:bg-white hover:text-cyan-500 transition"
              >
                Learn More
              </button>
            </div>
          </div>

       
          <div class="flex">
            <div
              class="bg-cyan-500 text-white p-6 flex flex-col items-center justify-center min-w-[100px]"
            >
              <span class="text-3xl font-bold">{{ event.day }}</span>
              <span class="text-sm uppercase font-semibold">{{
                event.month
              }}</span>
              <span class="text-xs mt-2">{{ event.time }}</span>
            </div>
            <div class="p-6 flex flex-col justify-center">
              <h3 class="text-xl font-bold text-yellow-500">
                {{ event.title }}
              </h3>
              <div class="flex items-center text-sm text-gray-500 mt-2">
                <span>👤 {{ event.person }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <button
          class="bg-yellow-400 text-white font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition shadow-lg"
        >
          View Event Calendar →
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const events = [
  {
    day: "31",
    month: "September",
    time: "5:00pm",
    title: "Preschool Dinner",
    person: "Walter Stanley",
  },
  {
    day: "5",
    month: "July",
    time: "5:00pm",
    title: "Grandparents Day",
    person: "Raymond Salazar",
  },
  {
    day: "15",
    month: "June",
    time: "5:00pm",
    title: "Family Celebration",
    person: "Bruce Hawkins",
  },
  {
    day: "5",
    month: "June",
    time: "5:00pm",
    title: "Summer Drawing Contest",
    person: "Danielle Garza",
  },
];

const getImageUrl = (i) => {
  return new URL(`../assets/images/event-${i}.jpg`, import.meta.url).href;
};
</script>
