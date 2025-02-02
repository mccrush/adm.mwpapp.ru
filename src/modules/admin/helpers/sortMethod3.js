// v3.0
// От 02.02.2025

const dateFields = ['created_at', 'last_sign_in_at']

export const sortMethod3 = (array, sortUp = 'asc', sortBy = 'email') => {

  if (array.length) {

    return array.slice().sort((a, b) => {
      a = a[sortBy]
      b = b[sortBy]

      if (sortBy === 'email') {
        if (sortUp === 'asc') {
          return (a === b ? 0 : a > b ? 1 : -1)
        } else {
          return (b === a ? 0 : b > a ? 1 : -1)
        }

      } else if (dateFields.includes(sortBy)) {
        if (sortUp === 'asc') {
          return new Date(a) - new Date(b)
        } else {
          return new Date(b) - new Date(a)
        }
      }
    })
  }

  return array
}