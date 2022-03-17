import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { auth } from "./firebase";
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
const promise = loadStripe('pk_test_51KdNfbBd7ynsOSRYC1Qg4qLfGptTTBeNZ5XtwnHA98Y7as85vN2g0Jo58ECmqyCAsEy5XnAPDA6SxLnoYnqke4nX00fZuQmZuW');

function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    auth.
      onAuthStateChanged(authUser => {
        console.log('The user is ', authUser);
        if (authUser) {
          dispatch({
            type: 'SET_USER',
            user: authUser
          })
        } else {
          dispatch({
            type: 'SET_USER',
            user: null
          })
        }
      })
  }, [])
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/orders' element={<><Header /><Orders /></>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/checkout' element={<><Header /><Checkout /></>} />
          <Route path='/payment' element={<><Header /><Elements stripe={promise}><Payment /></Elements></>} ></Route>
          <Route path='/' element={<><Header /><Home /></>} />
          <Route />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
