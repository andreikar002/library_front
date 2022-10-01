<template>
  <div class="w-full flex items-center justify-center mt-32 text-xl">
    <ul class="flex flex-col gap-3">
      <li class="border px-3 py-2 rounded-2xl">
        <NuxtLink to="/give-book">Выдать книгу</NuxtLink>
      </li>
      <li class="border px-3 py-2 rounded-2xl">
        <NuxtLink to="/get-book">Забрать книгу</NuxtLink>
      </li>
      <li class="border px-3 py-2 rounded-2xl">
        <NuxtLink to="/new-book">Добавить книгу</NuxtLink>
      </li>
      <li class="border px-3 py-2 rounded-2xl">
        <NuxtLink to="/all-books">Список книг в библиотеке</NuxtLink>
      </li>
      <li class="border px-3 py-2 rounded-2xl">
        <NuxtLink to="/free-books">Общий список книг</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
