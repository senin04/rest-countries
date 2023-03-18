import React from 'react'
import styled from 'styled-components';

const CountryBox = styled.div`
  p{
    /* margin: 0;
    padding: 0; */
  }
`;


const Country = () => {
  return (
    <CountryBox>
        <h4>Germany</h4>
        <div>Population: <span>81.770.900</span></div>
        <div>Region: <span>Europe</span></div>
        <div>Capital: <span>Berlin</span></div>
    </CountryBox>
  )
}

export default Country