export const state = () => ({
  books: [
    {
      id: 1,
      name: 'Harry Potter 1',
      is_issued: false,
      author: 'Pushkin',
      gener: 'fantazy',
      shelf: 1,
    },
    {
      id: 2,
      name: 'Harry Potter 2',
      is_issued: false,
      author: 'Pushkin',
      gener: 'fantazy',
      shelf: 1,
    },
    {
      id: 3,
      name: 'Harry Potter 3',
      is_issued: false,
      author: 'Pushkin',
      gener: 'fantazy',
      shelf: 1,
    },
    {
      id: 4,
      name: 'Harry Potter 4',
      is_issued: true,
      author: 'Pushkin',
      gener: 'fantazy',
      shelf: 1,
    },
  ],
  readers: [
    { id: 1, name: 'Harry Potter 1', books_id: [] },
    { id: 2, name: 'Harry Potter 2', books_id: [] },
    { id: 3, name: 'Harry Potter 3', books_id: [] },
    { id: 4, name: 'Harry Potter 4', books_id: [] },
  ],
})

export const mutations = {
  add(state, book) {
    book.id = state.books[state.books.length - 1].id + 1
    alert(state.books[state.books.length - 1].id + 1)
    book.is_issued = false
    state.books.push({
      book,
    })
  },
  get(state, obj) {
    for (const id in state.books) {
      if (id === obj.book_id) {
        state.books[id].is_issued = false
      }
    }
    for (const id in state.readers) {
      if (id === obj.reader_id) {
        state.readers[id].books_id = state.readers[id].books_id.filter((t) => {
          return t !== obj.book_id
        })
      }
    }
  },
  give(state, obj) {
    for (const id in state.books) {
      if (state.books[id].id === obj.book_id) {
        state.books[id].is_issued = true
      }
    }
    for (const id in state.readers) {
      if (state.readers[id].id === obj.reader_id) {
        state.readers[id].books_id.push(obj.book_id)
      }
    }
  },
}
