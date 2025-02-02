export const dataFilterTypes = [
  { title: 'Все', type: '' },
  { title: 'Активные', type: 'last_sign_in_at' },
  { title: 'Не подтвержден', type: '!last_sign_in_at' },
  { title: 'Pro', type: 'dateEndPro' }
]