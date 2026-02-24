export const getGreetings = () => {
  const currentHour = new Date().getHours()

  if (currentHour < 12) {
    return 'greetings.morning'
  } else if (currentHour < 17) {
    return 'greetings.afternoon'
  } else {
    return 'greetings.evening'
  }
}
