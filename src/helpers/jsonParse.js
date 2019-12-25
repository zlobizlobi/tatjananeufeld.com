export const jsonParse = string => {
  const stringJsonStringified = JSON.stringify(string)

  return JSON.parse(JSON.parse(stringJsonStringified))
}
