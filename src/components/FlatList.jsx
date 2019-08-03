import React from 'react';
import Flat from './Flat.jsx';

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