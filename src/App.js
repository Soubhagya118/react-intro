import logo from './logo.svg';
import './App.css';

function App() {
  const product=["Android","Blackberry", "iphone", "Windows phone"];
  const manu=["Samsung", "HTC","Micromax","Apple"]
  return (
    <div className="App">
    <h1>Mobile Operating System</h1>
    <ul>
      {product.map((e)=><li>{e}</li>)}
    </ul>
    <h1>Mobile Manufatures</h1>
    <ul>
    {manu.map((e)=><li style={{listStyle:"circle"}}>{e}</li>)}
     </ul>
    </div>
  );
}

export default App;
