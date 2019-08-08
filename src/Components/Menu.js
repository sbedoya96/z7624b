import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Inicio from './../assets/images/ico-inicio.png'
import Perfil from './../assets/images/ico-perfil.png'
import Beneficios from './../assets/images/ico-beneficios.png'
import Tareas from './../assets/images/ico-tareas.png'




export const Menu = () => (
  <ul className="Menu">
    <li>
      <Link to="/">
        <Image src={Inicio} alt="sdsd" />
        <p>Inicio</p>
      </Link>
    </li>
    <li>
      <Link to="/about/">
        <Image src={Perfil} className="espada" alt="sdsd" />
        <p>Perfil</p>
        </Link>
    </li>
    <li>
      <Link to="/users/">
      <Image src={Beneficios} alt="sdsd" />
      <p>Beneficios</p>
      </Link>
    </li>
    <li>
      <Link to="/users/">
      <Image src={Tareas} alt="sdsd" />
      <p>listado de Tareas</p>
      </Link>
    </li>
  </ul>

);