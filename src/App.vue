<script setup>
import { ref } from 'vue'

const count = ref(0)

function increaseCount() {
  count.value++
}

function decreaseCount() {
  if (count.value > 0) {
    count.value--
  }
}
</script>

<template>
  
    <div class="counter-card">
    

      <p class="count-display">{{ count }}</p>

      <div class="buttons">
        <button 
          class="btn increase" 
          @click="increaseCount"
        >
          +
        </button>

        <button 
          class="btn decrease" 
          @click="decreaseCount"
          :disabled="count === 0"
        >
          –
        </button>
      </div>
    </div>
</template>
<style scoped>

.counter-card {
  background: white;
  padding: 40px 50px;
  border-radius: 40px;
  text-align: center;
  width: 300px;
}

.count-display {
  font-size: 60px;
  font-weight: bold;
  margin: 20px 0;
  color: #333;
}


.buttons {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}


.btn {
  width: 70px;
  height: 70px;
  font-size: 30px;
  border: none;
  
 
}


.increase {
  background-color: #4caf50;
  color: white;
}

.decrease {
  background-color: #f44336;
  color: white;
}




.btn:disabled {
  background-color: #b41f1f;
  cursor: not-allowed;
  opacity: 0.6;
}


.hint {
  margin-top: 15px;
  color: #f44336;
  font-size: 14px;
}
</style>
