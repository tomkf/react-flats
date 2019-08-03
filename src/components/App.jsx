import React, {Component} from 'react';
import FlatList from './FlatList.jsx';
import flatData from '../../data/flats.js'
import GoogleMapReact from 'google-map-react';


//ad handlers for flat

//pass this selected area to


class App extends Component {
      constructor(props) {
        super(props);
        this.state = {
          defaultFlat = flatData[0],
          flatCollection: flatData,
          center: {lat: defaultFlat.lat,
            lng: defaultFlat.lng}
        };
      }

      updateDefault(selectedCard){
       this.setState({defaultFlat: flatData[selectedCard]})
      }

render(){
    return(<div className="content-box">
    <FlatList flats = {this.state.flatCollection} />
    <div className="map-container">
          <GoogleMapReact defaultCenter={this.state.center} defaultZoom={12}>
            <Marker lat={this.state.defaultFlat.lat} lng={this.state.defaultFlat.lng} />
          </GoogleMapReact>
        </div>
    </div>)
}
}

export default App;