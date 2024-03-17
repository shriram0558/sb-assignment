<template>
	<div
		class="mt-12 md:mt-0 mb-12 md:mb-0 w-[24.375rem] ml-2 h-fit md:h-[130vh] flex md:align-middle md:justify-between justify-center md:items-start md:p-10">
		<div class="hidden md:block md:mt-[7.5rem]">
			<img src="../assets/contact2.svg" class="scale-90" alt="" />
		</div>

		<div class="md:w-[43.75rem] w-[21.875rem] p-6 md:px-20 md:py-10 bg-white text-black shadow-2xl">
			<h1 class="text-center text-3xl font-bold mb-5">Send Us Message</h1>
			<form method="post" action="https://formsubmit.co/shriramsonawane143@gmail.com" class="flex flex-col">
				<input v-model="formData.email" class="border-b-2 border-black my-3 p-2" type="email" name="email"
					placeholder="Your Email*" required />
				<input v-model="formData.name" required class="border-b-2 border-black my-3 p-2" type="text" name="name"
					placeholder="Your Name*" />
				<input v-model="formData.phone" required class="border-b-2 border-black my-3 p-2" type="number" name="Number"
					pattern="^\d{10}$" placeholder="Phone Number*"
					title="Please enter a 10-digit Indian mobile number (e.g., 1234567890)" />
				<input v-model="formData.subject" required class="border-b-2 border-black my-3 p-2" type="text" name="subject"
					placeholder="Subject" />
				<textarea v-model="formData.message" required class="border-b-2 border-black my-3 p-2" rows="4" type="text"
					name="message" placeholder="Your Message" />
				<div class="flex items-center gap-4 w-70 md:w-96">
					<input v-model="formData.confirm" required class="border-b-2 w-10 h-10 border-black my-4 p-2"
						type="checkbox" />
					<p class="text-sm">
						By sending this message, you confirm that you have read and agreed to our
						privacy-policy.
					</p>
				</div>
				<button type="submit" className="bg-primary text-white px-6 py-4 rounded-[1.75rem] mt-4 w-44 text-center">
					Get Started >>
				</button>
			</form>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
const formData = ref({
	name: "",
	email: "",
	phone: "",
	subject: "",
	message: "",
	confirm: false,
});
</script>