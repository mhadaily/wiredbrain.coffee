import Header from '../components/Header';
import Footer from '../components/Footer';
import { signOut } from '../firebase/auth';
import { useContext } from 'react';
import { AuthContext } from '../logic/AuthContext';

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  const handleSignOut = () => {
    signOut();
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="mt-10 text-center">
        <h2 className="mb-10">Hello {currentUser.displayName || currentUser.email}</h2>
        <button
          onClick={handleSignOut}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign Out
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
