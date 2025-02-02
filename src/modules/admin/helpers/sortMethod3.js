// v3.0
// От 02.02.2025

const dateFields = ['created_at', 'last_sign_in_at']

export const sortMethod3 = (array, sortUp = 'asc', sortBy = 'email') => {

  if (array.length) {

    return array.sort((a, b) => {
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
        console.log('dateFields sortUp = ', sortUp);
        console.log('dateFields sortBy = ', sortBy);
        console.log('a[sortBy] = ', a[sortBy]);
        console.log('new Date(a[sortBy]) = ', new Date(a[sortBy]));

        const res = a[sortBy] - b[sortBy]
        console.log('res = ', res);

        if (sortUp === 'asc') {
          return a[sortBy] - b[sortBy]
        } else {
          return b[sortBy] - a[sortBy]
        }

        //return sortUp === 'asc' ? new Date(a[sortBy]) - new Date(b[sortBy]) : new Date(b[sortBy]) - new Date(a[sortBy])
      }
    })
  }

  return array
}