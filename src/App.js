import logo from './logo.svg';
import './App.css';

function App() {
  const product=["Android","Blackberry", "iphone", "Windows phone"];
  const manu=["Samsung", "HTC","Micromax","Apple"]
  return (
    <>
    <ul>
    {product.map((e)=><li>{e}</li>)}
    </ul>
    <ul>
    {manu.map((e)=><li>{e}</li>)}
    </ul>
    </>
  );
};

function User({product,manu}){
  return(
    <div>
      <h1>Mobile Operating System</h1>
  <ul>{product}</ul>
    <h1>Mobile Manufatures</h1>
    <ul>{manu}</ul>
    </div>
  )
}

export default App;
