// v2.2
// От 01.01.2025
// Это вторая улучшенная версия метода сортировки, универсальная

const numberFields = ['position', 'price', 'sum', 'time']
const stringFields = ['title', 'client', 'email']
const stringFieldsNested = ['client.name', 'user_metadata.dateEndPro']
const dateFields = ['dateCreate', 'deadline', 'dateForReady', 'dateFinish', 'created_at', 'last_sign_in_at']

export const sortMethod = (array, sortUp = 'desc', sortBy = 'dateCreate') => {
  console.log('sortUp = ', sortUp);
  console.log('sortBy = ', sortBy);

  return array.sort((a, b) => {
    if (numberFields.includes(sortBy)) {
      return sortUp === 'asc' ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy]

    } else if (stringFields.includes(sortBy)) {
      console.log('stringFields = ', stringFields.includes(sortBy));
      console.log('a[sortBy] - b[sortBy] = ', a[sortBy][0].charCodeAt(0) - b[sortBy][0].charCodeAt(0));

      return sortUp === 'asc' ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy]
      //return sortUp === 'asc' ? a[sortBy][0].charCodeAt(0) - b[sortBy][0].charCodeAt(0) : b[sortBy][0].charCodeAt(0) - a[sortBy][0].charCodeAt(0)

    } else if (stringFieldsNested.includes(sortBy)) {
      if ((a[sortBy.split('.')[0]][sortBy.split('.')[1]]) && (b[sortBy.split('.')[0]][sortBy.split('.')[1]])) {
        return sortUp === 'asc' ? a[sortBy.split('.')[0]][sortBy.split('.')[1]][0].charCodeAt(0) - b[sortBy.split('.')[0]][sortBy.split('.')[1]][0].charCodeAt(0) : b[sortBy.split('.')[0]][sortBy.split('.')[1]][0].charCodeAt(0) - a[sortBy.split('.')[0]][sortBy.split('.')[1]][0].charCodeAt(0)
      }

    } else if (dateFields.includes(sortBy)) {
      return sortUp === 'asc' ? new Date(a[sortBy]) - new Date(b[sortBy]) : new Date(b[sortBy]) - new Date(a[sortBy])
    }
  })
}

