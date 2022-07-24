export const getParam = (search: string): { query: string } => {
  const subString = search.slice(1).replace('&', '=').split('=');
  const index = subString.indexOf('q')
  return {
    query: subString[index + 1] || ''
  }
}