<template>
  <div>
    <div>
      <div class="pt-4 md:pt-0">
        <NuxtImg src="/profile_crop.jpg" sizes="150px md:200px" class="mx-auto rounded-xl" />
      </div>
      <h1 class="text-2xl md:text-6xl mt-2 md:mt-8 text-center">Jason Owens</h1>
      <h2 class="text-lg md:text-3xl mt-2 md:mt-4 text-center">Software Engineer;</h2>
      <p class="text-sm md:text-base mt-4 md:mt-10 text-center">
        I am a software engineer from New Zealand with 3+ years 
        of experience  accross the full stack of software development
      </p>
    </div>
    <Transition>
      <v-icon
        v-if="showArrow"
        class="mx-2 hidden md:visible" 
        name="hi-arrow-sm-down" 
        scale="2.4" 
        animation="float" 
        speed="slow"
        @click="onArrowClick"
      ></v-icon>
    </Transition>
  </div>
</template>
<script setup lang="ts">
const showArrow = ref(true)
const isTopOfPage = () => {
  showArrow.value = window.scrollY == 0;
}
onMounted(() => {
  window.addEventListener("scroll", isTopOfPage)
})
onBeforeUnmount(() => {
  window.removeEventListener("scroll", isTopOfPage)
})
const onArrowClick = () => {
  document.getElementById("Overview")?.scrollIntoView({ behavior: 'smooth' })
}
</script>
<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>