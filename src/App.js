import logo from './logo.svg';
import './App.css';

function App() {
  const product=["Android","Blackberry", "iphone", "Windows phone"];
  const manu=["Samsung", "HTC","Micromax","Apple"]
  return (
    <>
     <h1>Mobile Operating System</h1>
    {product.map((user)=>(
      <User product={product}/>
    ))}
      <h1>Mobile Manufatures</h1>
    {manu.map((user)=>(
      <User manu={manu}/>
    ))}
    </>
  );
};

function User({product,manu}){
  return(
    <div>
     
  <li>{product}</li>
  
    <li>{manu}</li>
    </div>
  )
}

export default App;
