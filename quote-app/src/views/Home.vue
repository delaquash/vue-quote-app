<template>
  <div class="home">
    <div class="max-auto max-w screen lg">
      <div class="flex items-center flex-col justisty-center">
         <div class="btn" @click="$store.commit('GetRandomQoute')">
        Get Random Quote
          <p>
            <span>{{$store.state.quote.content }} </span>
            <span>{{ $store.state.quote.author }}</span>
          </p>
         </div>
      </div>
     </div>  
  </div>
  <!-- {{$store.state.quote}} -->
</template>

<script>

</script>
