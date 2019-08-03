import React, {Component} from 'react';
import FlatList from './FlatList.jsx';
import Map from './Map.jsx';

class App extends Component {

render(){
    return(<div className="content-box">
    <FlatList />
    <Map />
    </div>)
}
}

export default App;