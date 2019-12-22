
import React from "react";

function Home(props) {
    var user = props.user;
    return (
        <div className="content">
          <p className="">Hola {user.name} </p>
          <p className="">Has completado {props.juegos} juegos </p>
          <p className="">de {props.lenguaje}</p>
          <h4>Hobbies</h4>
          <ul>
            {user.hobbies.map((hobby, i) => <li key={i} >{hobby}</li> )}
          </ul>
          { props.children }
        </div>
    );
 }
export default Home;
