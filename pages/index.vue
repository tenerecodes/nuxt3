<template>
    <div class="flex flex-col items-center">
        <div class="text-6xl font-extrabold uppercase text-gray-500 text-center mx-auto p-6">{{ $t('welcome') }}</div>
        <div @click="increment" class=" w-full h-20 bg-red-500 text-6xl font-extrabold text-center mx-auto text-white">{{ state.counter }}</div>
        <input class="m-4 p-2 border-2 mx-auto rounded-md" v-model="state.counter" />
    </div>
</template>

<script lang="ts" setup>
const { locale } = useI18n()
import { ref } from 'vue'
const title = ref('Hello form nuxt3 typescript')

const state = reactive({counter: 'Message'})
var increment = () :void => {
    state.counter = state.counter.toUpperCase()
}

</script>