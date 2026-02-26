import { createApp ,  ref } from 'vue '
createApp({
  setup(){
    return {
 count:ref(0)
    }
  }
}).mount(]app)

<div id="app">
<button @onclick = "count++">
cloick is :{{count}}
</button>
</div>