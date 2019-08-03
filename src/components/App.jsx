import React, {Component} from 'react';
import FlatList from './FlatList.jsx';
import Map from './Map.jsx';
import flatData from '../../data/flats.js'
import GoogleMapReact from 'google-map-react';

const apiKey = process.env.key

class App extends Component {
      constructor(props) {
        super(props);
        this.state = {
          defaultFlat: flatData[0],
          flatCollection: flatData
        };
      }

      updateDefault= (selectedCard) => {
       this.setState({defaultFlat: flatData[selectedCard]})
      }

center(){
  const { defaultFlat } = this.state;

  return {
    lat: defaultFlat.lat,
    lng: defaultFlat.lng
  };
}

render(){
    return(<div className="content-box">
    <FlatList flats = {this.state.flatCollection} />
    <div className="map-container">
      <GoogleMapReact  bootstrapURLKeys={{ key: apiKey }}
       defaultCenter={this.center()} defaultZoom={12} 
       yesIWantToUseGoogleMapApiInternals
       onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}>
      <Map lat={this.state.defaultFlat.lat} lng={this.state.defaultFlat.lng} />
      </GoogleMapReact>
        </div>
    </div>)
}
}

export default App;