<template>
  <div>
    <h3>Event Handling</h3>

    <div>
      <button @click="$event => incrementCounter('leela', $event)">Counter</button>
      <div>Counter: {{ count }}</div>
    </div>

    <div @click.capture="onParentClick">
      <a href="http://www.google.com" @click.stop.prevent="onLinkClick">Click here</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'; // 158.6k (gzipped: 58.3k)

const count = ref(0);

const incrementCounter = (name, event) => {
  count.value++;
  console.log(name);
  console.log(event.target.tagName);
};

const onLinkClick = () => {
  console.log('link Clicked');
};

const onParentClick = () => {
  console.log('parent Clicked');
};
</script>