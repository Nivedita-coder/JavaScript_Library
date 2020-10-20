function Stack() {
  const stack = []

  return {
    push(item) {
      return stack.push(item)
    },

    pop() {
      return stack.pop()
    },

    peek() {
      return stack[this.length - 1]
    },

    get length() {
      return stack.length
    },

    isEmpty() {
      return this.length === 0
    },
  }
}
