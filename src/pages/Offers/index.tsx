import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './style.css';
import Card from './components/Card';

const Offers = () => {
  const [ offers, setOffers ] = useState<Offer[]>([]);

  useEffect(() => {
    const loadData = () => {
      axios.get(String(process.env.REACT_APP_OFFER_PAYLOAD))
        .then(({ data }) => {
          setOffers(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    loadData();
  }, []);

  return (
    <>
      { offers.sort((a, b) => a.remainingTime - b.remainingTime)
        .map((offer) => (
          <Card offer={offer} key={offer.id} />
        )) }
    </>
  );
};

export default Offers;