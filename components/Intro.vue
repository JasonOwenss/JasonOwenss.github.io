<template>
  <div>
    <h1 class="text-2xl md:text-4xl mt-2 md:mt-6 text-center">Jason Owens</h1>
    <h2 class="text-lg md:text-2xl mt-4 text-center">Software Engineer</h2>
    <p class="text-sm md:text-base mt-6 text-justify">
      I am a software engineer from New Zealand with 3+ years 
      of experience  accross the full stack of software development:
    </p>
    <p class="text-sm md:text-base mt-6 text-justify">
      Frontend development in web and mobile frameworks 
      (React, Vue, React Native)
    </p>
    <div class="mt-4 flex flex-row justify-center">
      <v-icon class="mx-2" name="vi-file-type-reactjs" scale="2.4" animation="float" speed="slow"></v-icon>
      <v-icon class="mx-2" name="vi-file-type-vue" scale="2.4" animation="float" speed="slow"></v-icon>
      <v-icon class="mx-2" name="vi-file-type-typescript-official" scale="2.4" animation="float" speed="slow"></v-icon>
    </div>
    <p class="text-sm md:text-base mt-6 text-justify">
      Backend development specifically in server-client architecture
      using .NET, C#, VB, NodeJS, and database experience in relational
      databases such as Postgresql, SQL-Server, and NoSQL datbases such
      as DynamoDB and MongoDB.
    </p>
    <div class="mt-4 flex flex-row justify-center">
      <v-icon class="mx-2" name="vi-file-type-node" scale="2.4" animation="float" speed="slow"></v-icon>
      <v-icon class="mx-2" name="vi-file-type-csharp2" scale="2.4" animation="float" speed="slow"></v-icon>
      <v-icon class="mx-2" name="co-dot-net" scale="2.4" animation="float" speed="slow"></v-icon>
      <v-icon class="mx-2" name="vi-file-type-pgsql" scale="2.4" animation="float" speed="slow"></v-icon>
      <v-icon class="mx-2" name="si-amazondynamodb" scale="2.4" animation="float" speed="slow"></v-icon>
    </div>
    <p class="text-sm md:text-base mt-6 text-justify">
      Cloud, infrastructure, and DevOps experience. I have strong skills in 
      creating and deploying cloud infrastructure in AWS using infrastructure 
      as code tools, such as terraform and AWS CDK, with CI/CD pipelines.
    </p>
    <div class="mt-4 flex flex-row justify-center">
      <v-icon class="mx-2" name="co-amazon-aws" scale="2.4" animation="float" speed="slow" fill="orange"></v-icon>
      <v-icon class="mx-2" name="vi-file-type-terraform" scale="2.4" animation="float" speed="slow"></v-icon>
      <v-icon class="mx-2" name="bi-github" scale="2.4" animation="float" speed="slow"></v-icon>
      <v-icon class="mx-2" name="co-octopus-deploy" scale="2.4" animation="float" speed="slow" fill="#3398db"></v-icon>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'
const isSmallScreen = useMediaQuery('(max-width: 640px)')
const iconSize = computed<string>(() => isSmallScreen.value ? "1.9" : "2.4")
</script>