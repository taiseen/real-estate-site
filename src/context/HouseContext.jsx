import { createContext, useContext, useEffect, useState } from "react";
import { housesData } from '../constants/data';

const HouseInfo = createContext();

export const HouseContext = ({ children }) => {

  const [houses, setHouses] = useState(housesData);

  const [price, setPrice] = useState('Price (any)');
  const [country, setCountry] = useState('Location (any)');
  const [property, setProperty] = useState('Property (any)');

  const [prices, setPrices] = useState([]);
  const [countries, setCountries] = useState([]);
  const [properties, setProperties] = useState([]);

  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const allCountries = houses.map(house => house.country);
    const uniqueCountries = ['Location (any)', ...new Set(allCountries)];
    setCountries(uniqueCountries);
  }, []);


  useEffect(() => {
    const allProperty = houses.map(house => house.type);
    const uniqueProperties = ['Property (any)', ...new Set(allProperty)];
    setProperties(uniqueProperties);
  }, []);

  // useEffect(() => {
  //   const allPrices = houses.map(house => house.price);
  //   const uniquePrices = ['Price (any)', ...new Set(allPrices)];
  //   setPrices(uniquePrices);
  // }, []);

  const handleSearchClick = () => {

  }

  const propertyInfo = {
    houses,
    price,
    country,
    property,
    setPrice,
    setCountry,
    setProperty,
    prices,
    countries,
    properties,
    loading,
    handleSearchClick,
  };

  return (
    <HouseInfo.Provider value={propertyInfo}>
      {
        children
      }
    </HouseInfo.Provider>
  )
}

export const useHouseContext = () => useContext(HouseInfo);