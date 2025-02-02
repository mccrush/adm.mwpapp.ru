// v3.0
// От 02.02.2025

const dateFields = ['created_at', 'last_sign_in_at']

export const sortMethod3 = (array, sortUp = 'asc', sortBy = 'email') => {

  if (array.length) {

    return array.sort((a, b) => {
      console.log('sortUp = ', sortUp);
      console.log('sortBy = ', sortBy);

      if (sortBy === 'email') {

        if (sortUp === 'asc') {
          if (a.email < b.email) return -1; // a перед b
          if (a.email > b.email) return 1;  // a после b
          return 0; // порядок не меняется
        } else {
          if (b.email < a.email) return -1; // b перед a
          if (b.email > a.email) return 1;  // b после a
          return 0;
        }

      } else if (dateFields.includes(sortBy)) {
        return sortUp === 'asc' ? new Date(a[sortBy]) - new Date(b[sortBy]) : new Date(b[sortBy]) - new Date(a[sortBy])
      }
    })
  }

  return array
}