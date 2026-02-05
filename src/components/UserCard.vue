<template>
  <div class="profile-box">
    <h2 class="username">{{ name }}</h2>
    <p class="job">{{ role }}</p>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.profile-box {
  border: 2px solid #4caf50;
  padding: 18px;
  border-radius: 12px;
  width: 230px;
  text-align: center;
  background-color: #f3fff3;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

.username {
  color: #2e7d32;
  font-size: 20px;
  margin-bottom: 6px;
}

.job {
  color: #444;
  font-size: 15px;
  font-style: italic;
}
</style>
