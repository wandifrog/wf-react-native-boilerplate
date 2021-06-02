/**
 * @example <caption>Example usage of this function.</caption>
 * formatDate(new Date(), 'day c s date s fullMonth s year c s time', 'id')
 * // return 'Senin, 28 Des 2020 6:59:00 AM'
 * @format
 * Format List (argument 2)
 * - day - day name (example: 'Senin', 'Selasa')
 * - date - date 1-31 depending on the month
 * - month = 3 digit month (example: 'Jan', 'Feb')
 * - fullMonth = full month (example: 'Januari', 'Februari)
 * - time = hours minutes and seconds (example: '6:59:00 AM')
 * - year = full year (example: '2020', '2021')
 * - c = comma ','
 * - s = space ' '
 */
export const formatDate = (
  date: Date = new Date(),
  format: string,
  lang: 'id' | 'en' = 'id'
) => {
  const DAYS_ID = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
  const DAYS_EN = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const MONTHS_ID = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
  const MONTHS_EN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Oktober', 'November', 'December']

  const days = lang === 'id' ? DAYS_ID : DAYS_EN
  const month = lang === 'id' ? MONTHS_ID : MONTHS_EN
  const _date = new Date(date)

  function formateDateToString(_format: string) {
    if (_format === 'day') return days[_date.getDay()]
    if (_format === 'date') return _date.getDate()
    if (_format === 'month') return month[_date.getMonth()].slice(0, 3)
    if (_format === 'fullMonth') return month[_date.getMonth()]
    if (_format === 'time') return _date.toLocaleTimeString()
    if (_format === 'year') return _date.getFullYear()
    if (_format === 'c') return ','
    if (_format === 's') return ' '
  }

  const result = format.split(' ').map((x) => formateDateToString(x))
  return result.join('')
}
