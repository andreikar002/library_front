<template>
  <div class="w-full h-full flex flex-col items-center justify-center mt-48">
    <div>
      <NuxtLink to="/" class="border px-3 py-1 rounded-xl">Back</NuxtLink>
      <h2>Get book from reader</h2>
      <div class="w-full h-full flex flex-col justify-center gap-2 mt-2">
        <p>Chose book</p>
        <select v-model="form.id_book" class="border px-3 py-2 rounded-2xl">
          <option v-for="book in books" :key="book.id">{{ book.name }}</option>
        </select>
        <p>Chose reader</p>
        <select v-model="form.id_reader" class="border px-3 py-2 rounded-2xl">
          <option v-for="reader in readers" :key="reader.id">
            {{ reader.name }}
          </option>
        </select>
      </div>
      <button class="border px-3 py-1 rounded-xl mt-2" @click="getBook">Get</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form:{}
    }
  },
  computed: {
    books() {
      const books = this.$store.state.books.books.filter(
        (t) => t.is_issued === true
      )
      return books
    },
    readers() {
      return this.$store.state.books.readers
    },
  },
  method: {
    getBook() {
      this.$store.commit('books/get', {
        id_book: this.form.id_book,
        id_reader: this.form.id_reader,
      })
    }
  }
}
</script>
