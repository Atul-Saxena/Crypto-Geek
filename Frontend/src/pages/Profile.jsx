import React from 'react';
import Navbar from '../components/Navbar';
import { Profile as ProfileComp } from '../components/Profile/Profile-comp';

const Profile = () => {
    return (
        <>
        <Navbar/>
        <ProfileComp/>
        </>
    );
};

export default Profile;