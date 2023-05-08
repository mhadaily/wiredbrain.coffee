import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SignUpForm from '../components/SignUpForm';

const SignUp = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <SignUpForm />
      <Footer />
    </div>
  );
};

export default SignUp;
