import React from 'react';
import { useEffect } from 'react';
import { Counter } from './features/counter/Counter';
import { useSelector } from "react-redux";
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
import { auth } from './Firebase';
import { useDispatch } from "react-redux";
import Widgets from './Widgets';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  //making it stick in the login.. so it doesn't log out.. when u refesh, stay inside app
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //user is logged in..
        dispatch(login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        //user is logged out..
        dispatch(logout())
      }
    })
  }, []);

  return (
    <div className="app">
     {/* header */}
     <Header/>

     {!user ? (
       <Login />
     ) : (
     <div className="app__body">
       {/* <Sidebar /> */}
       <Sidebar/>
       <Feed/>
       <Widgets/>
     </div>
     )}

    </div>
  );
}

export default App;
