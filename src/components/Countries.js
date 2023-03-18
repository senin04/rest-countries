import React, { useEffect, useState } from "react";
import Country from "./Country";
const Countries = () => {
  const url = "https://restcountries.com/v3.1/all";
  const [countries, setCountries] = useState([]);
  
  // useEffect(() => {
  //   fetch(url)
  //   .then((response)=> response.json())
  //   .then((data)=> {
  //     setCountries(data)
  //   })
  //   .catch((err) => {
  //     console.log("Error loading data")
  //   })
  // }, []);

  return <Country/>;
};

export default Countries;
