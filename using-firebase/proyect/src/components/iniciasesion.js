import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebaseApp from "../credenciales";

const auth = getAuth(firebaseApp);
function Inicios() {
  
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
    <h1>HOLAa</h1>
    </>
  );
}

export default Inicios;