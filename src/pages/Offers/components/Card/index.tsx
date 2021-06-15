import React, { useEffect, useState } from 'react';
import moment from 'moment';

import './style.css';

type CardProps = {
  offer: Offer
}
const Card = ({ offer }: CardProps) => {
  const offerIncrement = Number(process.env.REACT_APP_OFFER_INCREMENT);
  const [ currentOffer, setCurrentOffer ] = useState<number>(0);
  const [ remainingTimeText, setRemainingTimeText ] = useState<string>('');

  const numberCurrencyFormat = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0
  });

  const numberFormat = new Intl.NumberFormat()

  const handlerOfferIncrement = () => {
    setCurrentOffer(currentOffer + offerIncrement);
  };

  useEffect(() => {
    let remainingTime = offer.remainingTime;
    const getRemainingTime = () => {
      remainingTime = remainingTime - 1000;
      const data = moment.duration(remainingTime, 'milliseconds');
      setRemainingTimeText(`
        ${ String(data.hours()).padStart(2, '0') }:
        ${ String(data.minutes()).padStart(2, '0') }:
        ${ String(data.seconds()).padStart(2, '0') }`
      );
    };

    ( () => {
      const currentOffer = offer.bids[ offer.bids.length - 1 ]?.amount;
      setCurrentOffer(currentOffer ? currentOffer : 0);
      setInterval(() => getRemainingTime(), 1000);
    } )();
  }, [ setCurrentOffer, offer ]);

  return (
    <div className="card-info" key={ offer.id }>
      <div className="card-info-photo">
        <div className="card-info-details-btn">
          <a href="/">ver detalhes</a>
        </div>
        <img
          src={ offer.imageUrl }
          alt={ offer.model }
        />
      </div>
      <div className="card-content">
        <div className="card-info-flex">
          <div>
            TEMPO RESTANTE
            <h1 className="card-info-lance-title card-info-lance-time">
              { remainingTimeText }
            </h1>
          </div>
          <div>
            ÚLTIMA OFERTA
            <h1 className="card-info-lance-title card-info-lance-price">
              { numberCurrencyFormat.format(currentOffer) }
            </h1>
          </div>
        </div>
        <div className="card-info-flex card-info-title">
          <h2>{ offer.model.toUpperCase() }</h2>
        </div>
        <div className="card-info-flex">
          <div className="card-info-year">{ offer.year }</div>
          <div className="card-info-km">{ numberFormat.format(offer.km) } KM</div>
        </div>
        <div className="card-info-footer">
          <button className="card-info-offer-btn" onClick={ handlerOfferIncrement }>FAZER OFERTA</button>
        </div>
      </div>
    </div>
  );
};

export default Card;