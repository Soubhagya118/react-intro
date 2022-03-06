import logo from './logo.svg';
import './App.css';

function App() {
  const product=["Android","Blackberry", "iphone", "Windows phone"];
  const manu=["Samsung", "HTC","Micromax","Apple"]
  return (
    <>
    {product.map((e)=> User(e))}
    </>
  );
};

function User(){
  return(
    <div>
      <h1 className='con'>Mobile Operating System</h1>
      <u>{product}</u>
      <h1 className='con'>Mobile Manufatures</h1>
      <u>{manu}</u>

    </div>
  )
}

export default App;
