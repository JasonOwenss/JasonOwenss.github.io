<template>
  <div>
    <h1 v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="text-2xl md:text-4xl mt-2 text-center">
      Experience
    </h1>
    <!--LIC-->
    <p v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="text-xl mt-6 text-left font-bold">
      Livestock Improvement Company (LIC)
    </p>
    <p v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="text-base text-left">Software Engineer</p>
    <p v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="text-base text-left">September 2022 - Current</p>
    <ul class="mt-2 list-disc ml-6">
      <li v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }">
        <p>
          Worked in a platform team, creating the AWS cloud 
          infrastructure design for a reproducible microservice 
          architecture and implementing the design using Terraform IaC.
        </p>
      </li>
      <li v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="mt-2">
        <p>
          Built and deployed reliable, scalable, performant .NET and 
          NodeJS microservices in AWS for external and internal consumers.
        </p>
      </li>
      <li v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="mt-2">
        <p>
          Built and deployed internal NextJS web tool in Azure to aid 
          colleagues in managing customer data using Azure devops CI/CD 
          into an app instance container.
        </p>
      </li>
      <li v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="mt-2">
        <p>
          Worked with Cloud Architects to understand AWS networking and 
          cloud architecture when implementing solutions.
        </p>
      </li>
    </ul>
    <Divider/>
    <!--Wildeye-->
    <p v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="text-xl mt-2 text-left font-bold">
      Wildeye (Outpost Central)
    </p>
    <p v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="text-base text-left">Software Developer, Mobile Developer, Web Developer</p>
    <p v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="text-base text-left">November 2020 - September 2022</p>
    <ul class="mt-2 list-disc ml-6">
      <li v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }">
        <p>
          Created and maintained backend services and APIs in .NET Framework and 
          .NET Core that processed large amounts of agricultural data, stored in 
          a SQL Server database, and served this data to front end clients in various ways.
        </p>
      </li>
      <li v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="mt-2">
        <p>
          Maintained the legacy ASP.NET Web Forms front end and was heavily involved in creating 
          the new client-facing web front end in Vue.js/Typescript that will eventually
          replace the legacy front end.
        </p>
      </li>
      <li v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="mt-2">
        <p>
          Solely maintained and created new features for the company’s mobile app, for the past year, 
          which is written React Native/Typescript using Expo for testing and deployments.
        </p>
      </li>
      <li v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="mt-2">
        <p>
          Worked in a small, but strong, team of 4 to always produce the highest quality 
          code possible while meeting deadlines. This was possible through the practice of 
          Agile software development.
        </p>
      </li>
    </ul>
    <!--Education-->
    <h1 v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="text-2xl md:text-2xl mt-6 text-left font-bold">
      Education
    </h1>
    <p v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="text-xl mt-2 text-left">
      University of Auckland
    </p>
    <p v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="text-base text-left">
      Bachelor of Science Majoring in Computer Science
    </p>
    <p v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="text-base text-left">
      January 2017 - July 2020
    </p>
    <!--Certifications-->
    <h1 v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="text-2xl md:text-2xl mt-6 text-left font-bold">
      Certifications
    </h1>
    <ul class="mt-2 list-disc ml-6">
      <li>
        <a href="https://www.credly.com/badges/57d7d5ba-1af3-4a33-a08d-f4ec7a16e15c/public_url">
          AWS Certified Cloud Practitioner
        </a>
      </li>
    </ul>
  </div>
</template>