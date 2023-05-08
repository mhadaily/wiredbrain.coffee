import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Profile = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* Add your sign out button, data update form, and photo upload here */}
      <Footer />
    </div>
  );
};

export default Profile;
