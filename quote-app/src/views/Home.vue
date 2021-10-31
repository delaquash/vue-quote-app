<template>
  <div class="home">
    <div class="max-auto max-w screen lg">
      <div class="flex items-center flex-col justisty-center">
         <div class="btn" @click="$store.commit('GetRandomQoute')">
        Get Random Quote
          <p
            class="my-10 mb-6 text-2xl text-center tex-gray"
            v-if="typeof $store.state.quote._id != 'undefined' ">
            <span>"{{$store.state.quote.content }}"</span>
            <span class="text-gray-lighter">{{ $store.state.quote.author }}</span>
          </p>
         </div>
      </div>
     </div>
  </div>
  <!-- {{$store.state.quote}} -->
</template>

<script>

</script>
