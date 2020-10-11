import React, { useReducer } from "react";
import OffersContext from "./OffersContext";
import OffersReducer from "./OffersReducer";
import { SET_BEST_OFFER } from "../types/types.js";
import { getOffersList } from "../../api/api";

const OfferState = props => {

  const initialState = {
    bestOffer: null
  };
  
  const [state, dispatch] = useReducer(OffersReducer, initialState);

  // Fonction qui calcule la réduction offerte par l'offre de type soustraction
  const totalMinus = (sum, offer) => {
    return sum - offer.value
  };

  // Fonction qui calcule la réduction offerte par l'offre de type pourcentage
  const totalPercent = (sum, offer) => {
    return sum - (sum * offer.value/100)
  };

  // Fonction qui calcule la réduction offerte par l'offre de type slice
  const totalSlice = (sum, offer) => {
    return sum - (offer.value * Math.floor(sum/offer.sliceValue))
  };

  // Fonction qui récupère les offres via l'API, puis lance les calculs de réduction, puis calcule et rentourne la meilleure offre
  const setBestOffer = (selectedBooksIds, sum) => {

    getOffersList(selectedBooksIds).then(result => {
      let minusResult = sum;
      let percentResult = sum; 
      let sliceResult = sum;

      if (result) {
        for (let i = 0; i < result.offers.length; i++) {
          if (result.offers[i].type === 'minus') minusResult = totalMinus(sum, result.offers[i])
          else if (result.offers[i].type === 'percentage') percentResult = totalPercent(sum, result.offers[i])
          else if (result.offers[i].type === 'slice') sliceResult = totalSlice(sum, result.offers[i])
        };

        let bestOfferResult = Math.min(minusResult, percentResult, sliceResult);
        dispatch({ type: SET_BEST_OFFER, payload: bestOfferResult });
      };
    });
  };

  return (
    <OffersContext.Provider
      value={{
        bestOffer: state.bestOffer,
        setBestOffer,
      }}
    >
      {props.children}
    </OffersContext.Provider>
  );
};

export default OfferState;
