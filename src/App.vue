<!-- <template>
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
-->
<template>
  <div class="page">


    <div class="card-list">
      <UserCard name="abebe" role=" role1" />
      <UserCard name="kebede" role="role2" />
      <UserCard name="chaltu" role="role3" />
    </div>
  </div>
</template>

<script setup>
import UserCard from "./components/UserCard.vue"
</script>

<style scoped>
.page {
  padding: 20px;
  font-family: Arial, sans-serif;
}

.card-list {
  display: flex;
  gap: 20px;
  margin-top: 15px;
}
</style>

