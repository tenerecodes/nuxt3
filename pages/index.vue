<template>
    <div>
        <div class="text-6xl font-extrabold uppercase text-gray-500">{{ $t('welcome') }}</div>
        <div @click="increment" class="h-20 bg-red-500 text-6xl font-extrabold text-white">{{ state.counter }}</div>
        <input v-model="state.counter" />
    </div>
</template>

<script lang="ts" setup>
const { locale } = useI18n()
import { ref } from 'vue'
const title = ref('Hello form nuxt3 typescript')

const state = reactive({counter: 'qwertyu'})
var increment = () :void => {
    state.counter = state.counter.toUpperCase()
}

</script>