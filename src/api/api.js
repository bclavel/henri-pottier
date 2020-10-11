const baseUrl =  "http://henri-potier.xebia.fr/books";
const commercialOffersUrl =  "commercialOffers";

// Fonction de base pour fetcher les données en GET sur l'API 
const fetchData = (url) => {
  return fetch(url, {method: "GET"})
  .then(response => response.json())
  .catch(error => console.error(error))
}

// Fonction qui retourne la liste des livres
export const getBooksList = () => {
  let books = fetchData(baseUrl)
  return books
}

// Fonction qui envoie la liste des livres dans le panier et retourne les offres correspondantes
export const getOffersList = (selectedBooksIds) => {
  let offersUrl = [baseUrl, selectedBooksIds, commercialOffersUrl].join('/')
  let offers = fetchData(offersUrl)
  return offers
}