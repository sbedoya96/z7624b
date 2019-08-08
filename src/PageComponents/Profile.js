import React from 'react';
import { Container } from 'react-bootstrap';
import { UserProfile } from './../Components/Userprofile';
import { Menu } from './../Components/Menu';




export const Profile = () => (
<Container fluid className="profile-container">
<UserProfile/>
<Menu/>
</Container>

);