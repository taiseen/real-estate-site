import { createContext, useContext, useEffect, useState } from "react";
import { housesData } from '../db/data'; 

const HouseInfo = createContext();

export const HouseContext = ({ children }) => {

  // housesData ==> come from database...
  const [houses, setHouses] = useState(housesData);

  const [price, setPrice] = useState('Price (any)');
  const [country, setCountry] = useState('Location (any)');
  const [property, setProperty] = useState('Property (any)');

  const [prices, setPrices] = useState([]);
  const [countries, setCountries] = useState([]);
  const [properties, setProperties] = useState([]);

  const [loading, setLoading] = useState(false);

  const priceRange = [
    { value: 'Price (any)' },
    { value: '10000 - 30000' },
    { value: '30000 - 40000' },
    { value: '100000 - 130000' },
    { value: '130000 - 160000' },
    { value: '160000 - 190000' },
    { value: '190000 - 220000' },
  ]


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

    // console.log(country, property, price)

    setLoading(true); // start loading... 

    const isDefault = str => str.split(' ').includes('(any)');

    // convert price - string into number...
    const minPrice = +price.split(' ')[0]
    const maxPrice = +price.split(' ')[2]

    // 🔎🔎🔎 searching mechanism for properties... 🔎🔎🔎
    // this [house data source] is to much important to understand 
    // that where its come from... | its come from database...
    const searchResults = housesData.filter(house => {

      const housePrice = +house.price; // convert price - string into number...

      if ( // ✅✅✅ if all values are selected... ✅✅✅
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }

      // 🟥 if no value select... return all homes...
      if (isDefault(country) && isDefault(property) && isDefault(price)) return house;

      // ✅ if 🏴 counter is selected...
      if (!isDefault(country) && isDefault(property) && isDefault(price)) return house.country === country;

      // ✅ if 🏠 property is selected...
      if (isDefault(country) && !isDefault(property) && isDefault(price)) return house.type === property;

      // ✅ if 💰 price is selected...
      if (isDefault(country) && isDefault(property) && !isDefault(price)) {

        if (housePrice >= minPrice && housePrice <= maxPrice) return house;
      };

      // ✅ if 🏴 counter & 🏠 property is selected...
      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.country === country && house.type === property;
      }

      // ✅ if 🏴 counter & 💰 price is selected...
      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {

        if (housePrice >= minPrice && housePrice <= maxPrice) return house.country === country;
      };

      // ✅ if 🏠 property & 💰 price is selected...
      if (isDefault(country) && !isDefault(property) && !isDefault(price)) {

        if (housePrice >= minPrice && housePrice <= maxPrice) return house.type === property;
      };
    });

    // console.log(searchResults)

    // reassigned [houses] again, after we get new search result data...
    setTimeout(() => {
      return (
        searchResults?.length < 1
          ? setHouses([])
          : setHouses(searchResults), setLoading(false)
      );
    }, 1000);

  };

  const propertyInfo = {
    houses,
    price,
    country,
    property,
    setHouses,
    setPrice,
    setCountry,
    setProperty,
    prices,
    countries,
    properties,
    loading,
    priceRange,
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