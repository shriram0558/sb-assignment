<script setup>
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import About from '@/components/About.vue'
import Services from '@/components/Services.vue'
import Technologies from '@/components/Technologies.vue'
import ContactForm from '@/components/ContactForm.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="h-auto w-full bg-contain bg-no-repeat bg-[url('../assets/background.svg')] font-poppins overflow-hidden">
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Technologies />
    <div class="md:bg-[url('./src/assets/contact.svg')] bg-none">
      <ContactForm />
      <Footer />
    </div>
  </div>
</template>
