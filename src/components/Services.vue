<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex flex-col md:flex-row items-center md:gap-28 mt-4 p-2 md:p-0 md:mt-72 bg-service">
    <div class="md:ml-24 p-4 mb-2">
      <p class="text-primary font-semibold text-xl leading-10">> OUR SERVICES</p>
      <h1 class="md:w-[26.25rem] text-3xl font-bold mb-7">Transforming your ideas into Reality</h1>

      <div class="flex gap-6 my-4 font-bold text-primary">
        <p class="px-5 py-3 bg-secondary-dark rounded-2xl">Web Development</p>
        <p class="px-5 py-3 bg-secondary-dark rounded-2xl">Mobile Development</p>
      </div>
      <div class="flex gap-4 my-4 font-bold text-primary">
        <p class="px-5 py-3 bg-primary text-white rounded-2xl">UI/UX Designing</p>
        <p class="px-5 py-3 bg-secondary-dark rounded-2xl text-primary">Branding</p>
      </div>
      <div class="my-7 font-bold text-primary">
        <p class="inline px-5 py-3 bg-secondary-dark rounded-2xl">Cloud Technology</p>
      </div>
    </div>

    <div class="shadow-custom md:px-10 md:py-16 p-4">
      <div class="flex gap-5">
        <img src="../assets/uiImg.svg" class="h-8 w-8 md:h-14 md:w-14" alt="" />
        <div class="md:w-[26.25rem] md:pt-3 text-2xl md:text-3xl font-bold mb-7">UI/UX Designing</div>
      </div>
      <div class="md:w-[34.375rem]] md:mb-9 md:mt-3">
        Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis
        accu msan congue euisque blandit dui Pelle ntesque habitant.
      </div>

      <ul>
        <li class="text-sm items-center flex gap-3 py-2">
          <img class="h-8 w-8" src="../assets/check.svg" alt="" />
          <div>Lorem ipsum dolor sit amet, conse ctetur adipi scing elit.</div>
        </li>
        <li class="text-sm items-center flex gap-3 py-2">
          <img class="h-8 w-8" src="../assets/check.svg" alt="" />
          <div>Lorem ipsum dolor sit amet,</div>
        </li>
        <li class="text-sm items-center flex gap-3 py-2">
          <img class="h-8 w-8" src="../assets/check.svg" alt="" />
          <div>conse ctetur adipi scing elit.</div>
        </li>
        <li class="text-sm items-center flex gap-3 py-2">
          <img class="h-8 w-8" src="../assets/check.svg" alt="" />
          <div>Lorem ipsum dolor sit amet, conse ctetur</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup></script>
