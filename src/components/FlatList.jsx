import React from 'react';
import Flat from './Flat.jsx';

// example flat: 
// {
//     name: "Charm at the Steps of the Sacre Coeur/Montmartre",
//     imageUrl:
//       "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
//     price: 164,
//     priceCurrency: "EUR",
//     lat: 48.884211,
//     lng: 2.34689
//   }

export default class FlatList extends React.Component {

render() {
  const displayFlatItems = this.props.flats.map(flatItem => (  <Flat id={flatItem.id} key={flatItem.id} flat={flatItem} />))
         return (
            <div className="flat-list">
            {displayFlatItems}
            </div>
        )
    }
}