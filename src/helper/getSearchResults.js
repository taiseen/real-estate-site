import { housesDB } from '../db/data';

export const getSearchResults = (country, property, price) => {

    const isDefault = str => str.split(' ').includes('(any)');

    // convert price - string into number...
    const minPrice = +price.split(' ')[0]
    const maxPrice = +price.split(' ')[2]

    // 🔎🔎🔎 searching mechanism for properties... 🔎🔎🔎
    // this [house data source] is to much important to understand 
    // that where its come from... | its come from database...
    const searchResults = housesDB.filter(house => {

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

    return searchResults;
}