<template>
  <div>
    <h1 v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="text-2xl md:text-4xl md:pt-10 text-center">
      Contact
    </h1>
    <div class="flex pt-6">
      <div class="flex flex-col items-center pr-2">
        <v-icon name="md-mail-outlined" scale="2.4"></v-icon>
        <p>jdowens101@gmail.com</p>
      </div>
      <div class="flex flex-col items-center pl-2">
        <v-icon name="bi-telephone" scale="2.4"></v-icon>
        <p>+6421302555</p>
      </div>
    </div>
  </div>
</template>