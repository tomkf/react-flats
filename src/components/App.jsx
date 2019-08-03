import React, {Component} from 'react';
import FlatList from './FlatList.jsx';
// import Map from './Map.jsx';
import flatData from '../../data/flats.js'

class App extends Component {
      constructor(props) {
        super(props);
        this.state = {
          flatCollection: flatData
        };
      }

render(){
    return(<div className="content-box">
    <FlatList flats = {this.state.flatCollection} />
    {/* <Map /> */}
    </div>)
}
}

export default App;