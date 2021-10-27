<template>
  <div class="p-3">
    <div class="mx-auto max-w-screen-lg flex items-center justify-items-center">
      <router-link to="/" class="inline-block 
      mx-2 py-2 px-4 text-white rounded-md
      bg-purple-500"
      >
    Home
      </router-link> |
      <router-link to="/all" class="btn mx-2">All Quotes</router-link>
    </div>
  </div>
  <router-view/>

  {{$store.state.quotes}}
</template>

<script>
import { useStore } from 'vuex';
import { onMounted } from 'vue'

export default ({
  setup() {
      const store = useStore();

      onMounted(() => {
        store.commit('GetAllQuote')
      })
  },
})
</script>

