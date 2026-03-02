export const getNumberAsCurrency = (
  money: number | string,
  locale: string = 'en-US',
  currency: string = 'USD',
): string => {
  if (typeof money !== 'number') {
    money = parseInt(money)
    if (isNaN(money)) {
      throw new Error(
        'Invalid input: money must be a number or a string that can be parsed into a number.',
      )
    }
  }
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(money)
}
