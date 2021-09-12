import React from 'react';
import logo from './logo.svg';
import './App.css';

// Firebase
// import { db } from './firebase-config';
// import { collection, addDoc } from "firebase/firestore"; 

function App() {
  // useEffect(() => {
  //   debugger;
  //   (async () => {
  //     debugger;
  //     try {
  //       const docRef = await addDoc(collection(db, "users-tests"), {
  //         first: "Ada",
  //         last: "Lovelace",
  //         born: 1815
  //       });
  //       debugger;
  //       console.log("Document written with ID: ", docRef.id);
  //     } catch (e) {
  //       debugger;
  //       console.error("Error adding document: ", e);
  //     }
  //   })();
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
