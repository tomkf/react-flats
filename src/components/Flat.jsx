import React from 'react';

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

export default class Flat extends React.Component {

    render() {
             return (
                <div className="card" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${this.props.flat.imageUrl}')` }}>
                <div className="card-category">
                {this.props.flat.price}
                </div>
                <div className="card-description">
                <h2>{this.props.flat.name}</h2>
                </div>
                <a className="card-link" href="#"></a>
                </div>
            )
        }
    }