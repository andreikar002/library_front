<template>
  <div class="w-full h-full flex flex-col items-center justify-center mt-48">
    <div>
      <NuxtLink to="/" class="border px-3 py-1 rounded-xl">Back</NuxtLink>
      <div class="w-full h-full flex flex-col items-center justify-center mt-5">
        <p>Write information about book</p>
        <div class="flex flex-col gap-2 my-3">
          <input
            v-model="form.name"
            placeholder="name"
            class="w-48 border px-3 py-2 rounded-2xl"
          />
          <input v-model="form.gener" placeholder="gener" /><input
            v-model="form.author"
            placeholder="author"
          /><input v-model="form.shelf" placeholder="shelf" />
        </div>
      </div>
      <button class="border px-3 py-1 rounded-xl mt-2" @click="addBook">
        Add
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {},
    }
  },
  methods: {
    addBook() {
      this.$store.commit('books/add', this.form)
    }
  },
}
</script>
