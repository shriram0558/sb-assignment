<template>
  <div class="flex flex-col md:flex-row gap-10 overflow-hidden">
    <div class="md:w-[69rem] h-auto hidden md:block scale-125 bg-cover bg-[url('../assets/sideimg.svg')]"></div>
    <div class="md:w-[51rem] h-screen flex justify-center items-center">
      <form method="post" @submit.prevent="handleSubmit">
        <div class="p-4 flex flex-col justify-center items-center">
          <h2 class="text-2xl mb-6">Login to Access Dashboard</h2>
          <div class="flex flex-col mb-6 lg:w-[300px] w-full">
            <label for="email" class="mb-3">Email<span class="text-red-500">*</span></label>
            <input required class="border-2 border-gray-300 p-2 w-full" type="email" id="email" v-model="email" />
          </div>

          <div class="flex flex-col lg:w-[18.75rem] w-full">
            <div class="flex justify-between w-full">
              <label for="password" class="mb-3">Password<span class="text-red-500">*</span></label>
              <span class="text-red-500 text-sm font-semibold">Forget Password?</span>
            </div>
            <input required class="border-2 border-gray-300 w-full p-2" type="password" id="password"
              v-model="password" />
          </div>

          <button class="border-2 px-10 text-sm rounded-full mt-5 py-2 text-primary border-primary">
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useAuthStore from '../stores/AuthStore'

const email = ref()
const password = ref()
const router = useRouter()
const authStore = useAuthStore()

const handleSubmit = async () => {
  if (email.value && password.value) {
    const loginSuccessful = await authStore.setUser(email.value)
    if (loginSuccessful) {
      if (authStore.user) {
        router.push('/dashboard')
      }
    } else {
      console.log('Login failed')
    }
  } else {
    console.log('Please fill in both email and password fields')
  }
}
</script>
