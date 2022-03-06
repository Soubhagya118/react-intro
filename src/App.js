import logo from './logo.svg';
import './App.css';

function App() {
  const product=["Android","Blackberry", "iphone", "Windows phone"];
  const manu=["Samsung", "HTC","Micromax","Apple"]
  return (
    <>
    <h1>Mobile Operating System</h1>
    <ul>
    {product.map((e)=><li>{e}</li>)}
    </ul>
    <h1>Mobile Manufatures</h1>
    <ul>
    {manu.map((e)=><li>{e}</li>)}
    </ul>
    </>
  );
};

function User({product,manu}){
  return(
    <div>
      
  {product}
    
    {manu}
    </div>
  )
}

export default App;
