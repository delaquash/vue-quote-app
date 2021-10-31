<template>
    <div class="py-3">

    </div>
</template>

<script>

import { useRoute } from 'vue-router';
import { useStore } from 'vuex'
import { ref, onMounted } from 'vue'

export default {
    setup() {
        const route = useRoute();
        const store = useStore();
        const quote = ref();
    }
}
</script>

<style>

</style>