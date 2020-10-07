const baseUrl =  "http://henri-potier.xebia.fr/books";

// export const getBooksListz = async () => {
//   try {
//     const response = await fetch(baseUrl);
//     const result = await response.json()
//     return result
//   }
//   catch {
//     throw new Error('Impossible de récupérer la liste des livres')
//   }
// }


// Todo : gérer le loading et les erreurs de fetch
const getBooksData = (url) => {
  return fetch(url, {method: "GET"})
  .then(response => response.json())
  .catch(error => console.error(error))
}

export const getBooksList = () => {
  let books = getBooksData(baseUrl)
  return books
}