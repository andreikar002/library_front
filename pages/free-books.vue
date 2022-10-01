<template>
  <div class="mt-32 w-full flex flex-col items-center justify-center">
    <NuxtLink to="/" class="border px-3 py-1 rounded-xl">Back</NuxtLink>
    <h2>All boks</h2>

    <ul class="mt-5 flex flex-col gap-2">
      <li
        v-for="book in books"
        :key="book.id"
        class="border px-4 py-1 rounded-xl"
      >
        {{ book.id + '. ' + book.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      books: [
        { id: 1, name: 'Harry Potter 1' },
        { id: 2, name: 'Harry Potter 2' },
        { id: 3, name: 'Harry Potter 3' },
        { id: 4, name: 'Harry Potter 4' },
      ],
    }
  },
}
</script>
