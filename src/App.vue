<template>
  <div class="container">


    <input
      type="text"
      v-model="name"
      placeholder="Enter your name"
    />

    
    <p v-if="name.trim().length > 0">
      Hi there, {{ name }} 
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
</script>

<style>
.container {
  padding: 20px;
  font-family: Arial, sans-serif;
}

input {
  padding: 8px;
  margin-top: 10px;
  width: 250px;
}

p {
  margin-top: 15px;
  font-size: 40px;
  color: rgb(224, 220, 228);
}
</style>
