import { useEffect, useState } from 'react';
import './App.css';
import UserInfo from './Components/UserInfo/UserInfo';
import Cart from './Components/Cart/Cart';
import Data from './Components/Data/data.json';

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    setUsers(Data)
  }, [])
  const [cart, setCart] = useState([]);
  const handleAddCountry = (user) => {
    const newCart = [...cart, user];
    setCart(newCart);
  }
  return (
    <div className='container'>
      <h1 className='text-center text-success py-5'>People You May Know</h1>
      <div className="App d-flex justify-content-center row">
        <div className='container col-lg-8'>
          {
            users.map(user => <UserInfo handleAddCountry={handleAddCountry} user={user} key={user.id}></UserInfo>)
          }
        </div>
        <Cart cart={cart} ></Cart>
      </div>
    </div>
  );
}

export default App;

