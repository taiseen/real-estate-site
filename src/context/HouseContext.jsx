import { createContext, useContext, useEffect, useState } from "react";
import { getSearchResults } from "../helper/getSearchResults";
import { housesDB } from '../db/data';

const HouseInfo = createContext();

export const HouseContext = ({ children }) => {

  const [houses, setHouses] = useState(housesDB); // housesDB ==> (assume) come from database...

  const [pageNumber, setPageNumber] = useState(1); // for pagination...

  const [price, setPrice] = useState('Price (any)');
  const [country, setCountry] = useState('Location (any)');
  const [property, setProperty] = useState('Property (any)');

  const [prices, setPrices] = useState([]);
  const [countries, setCountries] = useState([]);
  const [properties, setProperties] = useState([]);

  const [loading, setLoading] = useState(false);


  // return all countries...
  useEffect(() => {
    const allCountries = houses.map(house => house.country);
    const uniqueCountries = ['Location (any)', ...new Set(allCountries)];
    setCountries(uniqueCountries);
  }, []);


  // return all properties...
  useEffect(() => {
    const allProperty = houses.map(house => house.type);
    const uniqueProperties = ['Property (any)', ...new Set(allProperty)];
    setProperties(uniqueProperties);
  }, []);


  const handleSearchClick = () => {

    setPageNumber(1); // every time reset page number for start pagination...
    setLoading(true); // start loading... 

    const searchResults = getSearchResults(country, property, price);

    // reassigned [houses] again, after we get new search result data...
    setTimeout(() => {
      return (
        searchResults?.length < 1
          ? setHouses([])
          : setHouses(searchResults), setLoading(false)
      );
    }, 1000);

  };


  const shareWithChildren = {
    price,
    houses,
    country,
    property,
    pageNumber,
    setPrice,
    setHouses,
    setCountry,
    setProperty,
    setPageNumber,
    prices,
    loading,
    countries,
    properties,
    handleSearchClick,
  };


  return (
    <HouseInfo.Provider value={shareWithChildren}>
      {
        children
      }
    </HouseInfo.Provider>
  )
}

export const useHouseContext = () => useContext(HouseInfo);