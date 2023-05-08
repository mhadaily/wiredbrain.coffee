import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import SignInForm from '../components/SignInForm';

const SignIn = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <SignInForm />
      <Footer />
    </div>
  );
};

export default SignIn;
