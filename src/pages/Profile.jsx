import Header from '../components/Header';
import Footer from '../components/Footer';
import { signOut } from '../firebase/auth';
import { useContext, useState } from 'react';
import { AuthContext } from '../logic/AuthContext';
import { uploadProfileImage } from '../firebase/storage';

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (file) {
      uploadProfileImage(file);
    } else {
      console.log('No file chosen');
    }
  };

  const handleSignOut = () => {
    signOut();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="mt-10 text-center">
        <h2 className="mb-10">Hello {currentUser.displayName || currentUser.email}</h2>
        <div className="m-10">
          <input type="file" onChange={handleFileChange} />
          <button
            className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
            onClick={handleUpload}
          >
            Upload profile photo
          </button>
        </div>
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
