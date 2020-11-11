import './App.css';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

function App() {
  const [viewport, setViewPort] = useState({
    latitude: 34.0522,
    longitude: 118.2437,
    width: '100%vw',
    height: '100vh',
    zoom: 10,
  });
  return (
    <div className="App">
     <ReactMapGL {...viewport}>

     </ReactMapGL>
    </div>
  );
}

export default App;
