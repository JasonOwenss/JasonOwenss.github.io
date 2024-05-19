<template>
  <div class="w-screen h-screen font-mono">
    <div class="flex flex-row">
      <div class="w-0 sm:w-2/12 md:w-3/12">
        <Menu :model="items" class="md:pl-4 font-serif sticky top-8 hidden md:block"></Menu>
      </div>
      <div class="w-screen sm:w-8/12 md:w-6/12 flex flex-col items-center">
        <Breadcrumb :model="items" class="md:hidden">
            <template #item="{ item }">
                <button class="cursor-pointer mt-2" @click="item.command">
                    <div :class="item.icon" class=""></div>
                    <div>{{ item.label }}</div>
                </button>
            </template>
            <template #separator> / </template>
        </Breadcrumb>
        <Landing class="sm:min-h-screen flex flex-col items-center w-10/12 sm:w-full sm:pt-20 justify-between" id="Intro"></Landing>
        <Intro class="min-h-screen flex flex-col items-center justify-center w-10/12 sm:w-full" id="Overview"></Intro>
        <Divider class="h-2" type="solid"/>
        <Experience class="min-h-screen flex flex-col w-10/12 sm:w-full" id="Experience"></Experience>
        <Divider/>
        <Contact class="mb-8" id="Contact"></Contact>
      </div>
      <div class="w-0 sm:w-2/12 md:w-3/12">
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { PrimeIcons } from 'primevue/api'
import type { MenuItem, MenuItemCommandEvent } from 'primevue/menuitem';

useSeoMeta({
  title: 'Jason Owens | Profile',
  ogTitle: 'Jason Owens | Profile',
  description: 'Jason Owens - Software Engineer',
  ogDescription: 'Jason Owens - Software Engineer'
})

const clickMenuItem = (event: MenuItemCommandEvent) => (elementId: string) => {
  document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' })
}

const items = ref<MenuItem[]>([
  { label:'Intro', icon: PrimeIcons.USER, command: event => clickMenuItem(event)("Intro") }, 
  { label:'Experience', icon: PrimeIcons.CODE, command: event => clickMenuItem(event)("Experience")}, 
  { label:'Contact', icon: PrimeIcons.SEARCH, command: event => clickMenuItem(event)("Contact") }
])
</script>