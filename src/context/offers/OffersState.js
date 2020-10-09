import React, { useReducer } from "react";
import OffersContext from "./OffersContext";
import OffersReducer from "./OffersReducer";
import { SET_BEST_OFFER, GET_OFFERS } from "../types/types.js";
import { getOffersList } from "../../api/api";

const OfferState = props => {

  const offers = [];

  const initialState = {
    // offers: null,
    bestOffer: null
  };
  
  const [state, dispatch] = useReducer(OffersReducer, initialState);

  const totalMinus = (sum, offer) => {
    // let minusOffer = offers.filter(item => item.type === 'minus')
    return sum - offer.value
  }

  const totalPercent = (sum, offer) => {
    // let percentOffer = offers.filter(item => item.type === 'percentage')
    return sum - (sum * offer.value/100)
  }

  const totalSlice = (sum, offer) => {
    // let sliceOffer = offers.filter(item => item.type === 'slice')
    return sum - (offer.value * Math.floor(sum/offer.sliceValue))
  }

  const setBestOffer = (selectedBooksIds, sum) => {
    // console.log('OFFERSSTATE setBestOffer sum', sum)
    // console.log('OFFERSSTATE setBestOffer offers', offers)

    getOffersList(selectedBooksIds).then(result => {
      // dispatch({ type: GET_OFFERS, payload: offersList }); 
      console.log('OFFERSSTATE result >>', result)
      let minusResult = sum
      let percentResult = sum 
      let sliceResult = sum

      for (let i = 0; i < result.offers.length; i++) {
        if (result.offers[i].type === 'minus') minusResult = totalMinus(sum, result.offers[i])
        else if (result.offers[i].type === 'percentage') percentResult = totalPercent(sum, result.offers[i])
        else if (result.offers[i].type === 'slice') sliceResult = totalSlice(sum, result.offers[i])
      }
      
      let bestOfferResult = Math.min(minusResult, percentResult, sliceResult)
      
      console.log('OFFERSSTATE minusResult >>', minusResult)
      console.log('OFFERSSTATE percentResult >>', percentResult)
      console.log('OFFERSSTATE sliceResult >>', sliceResult)
      console.log('OFFERSSTATE bestOfferResult >>', bestOfferResult)
      
      dispatch({ type: SET_BEST_OFFER, payload: bestOfferResult });
    })  
    
  };
  
  const getOffers = selectedBooksIds => {
 
  }

  // console.log('OFFERSTATE state >>', state)



  return (
    <OffersContext.Provider
      value={{
        // offers: state.offers,
        bestOffer: state.bestOffer,
        setBestOffer,
        getOffers
      }}
    >
      {props.children}
    </OffersContext.Provider>
  );
};

export default OfferState;
