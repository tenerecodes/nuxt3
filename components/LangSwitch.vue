<template>
  <div class="text-gray-700 my-2">
    <div>
      <select
        v-model="$i18n.locale"
        class="px-3 py-1 border border-gray-600 rounded-lg focus:outline-none appearance-none"
        @input="switchLocale"
      >
        <option
          v-for="locale in locales"
          :key="locale.code"
          :value="locale.code"
          class="cursor-default select-none py-3 appearance-none"
        >
          {{ locale.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      locales: [
        {
          code: 'ar',
          name: 'العربية',
          dir: 'rtl',
          iso: 'ar-MR',
          file: 'ar-MR.js',
        },
        {
          code: 'en',
          name: 'English',
          dir: 'ltr',
          iso: 'en-MR',
          file: 'en-MR.js',
        },
        {
          code: 'fr',
          name: 'Francais',
          dir: 'ltr',
          iso: 'fr-MR',
          file: 'fr-MR.js',
        },
      ],
    }
  },
  methods: {
    async switchLocale(e) {
      await this.$i18n.setLocale(e.target.value)
    },
  },
}
</script>