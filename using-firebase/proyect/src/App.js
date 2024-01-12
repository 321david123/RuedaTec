import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./components/Home";
import Inicios from "./components/iniciasesion";
import Logueo from "./components/Logueo";
import { Homeee } from "./components/homeee";
import { Footer } from './components/footer'
import firebaseApp from "./credenciales";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Modelos from "./components/modelos";
const auth = getAuth(firebaseApp);
function App() {
  
  const [usuarioGlobal, setUsuarioGlobal] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      //codigo en caso de que haya sesion iniciada
      setUsuarioGlobal(usuarioFirebase);
    } else {
      //codigo en caso de que no haya sesion iniciada
      setUsuarioGlobal(null);
    }
  });

  return (
    <>
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav> */}
        <Routes>
            <Route path="/modelos" element={<Modelos />} />
            <Route path="/" element={<><Homeee></Homeee><Footer></Footer></>} />
        </Routes>
      </div>
    </Router>
    {/* <Foo></Foo> */}
      {/* {usuarioGlobal ? (
        <Home correoUsuario={usuarioGlobal.email} />
      ) : (
        <Logueo />
      )} */}
      
    </>
  );
}

export default App;
