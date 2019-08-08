import React from 'react';
import {  Col, Image } from 'react-bootstrap';
import foto from './../assets/images/foto.png'
import estrella1 from './../assets/images/star1.png'
import estrella2 from './../assets/images/star2.png'






export const UserProfile = () => (

  <React.Fragment >
   
      <Col className="profile-img" xs={6} md={3}>
        <Image src={foto} roundedCircle />
      </Col>
      <Col md={3} className="profile-text">
        <ul>
          <li>
            <Image src={estrella1} alt="estrella_active"/>
          </li>
          <li>
            <Image src={estrella1} alt="estrella_active"/>
          </li>
          <li>
            <Image src={estrella1} alt="estrella_active"/>
          </li>
          <li>
            <Image src={estrella2} alt="estrella_active"/>
          </li>
          <li>
            <Image src={estrella2} alt="estrella_active"/>
          </li>
        </ul>
        <p>Sofia Sierra Barrientos</p>
        <span>UX Research</span>
      </Col>
      
  </React.Fragment>
);