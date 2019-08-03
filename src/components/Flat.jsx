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
     const backImage = {
        backgroundImage: `url('${this.props.flat.imageUrl}')`
     }
             return (
                <div className="card-flat" style={backImage}>
                <span>{this.props.flat.price}</span>
                <p>{this.props.flat.name}</p>
                </div>
            )
        }
    }