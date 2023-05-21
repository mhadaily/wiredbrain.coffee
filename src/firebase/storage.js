import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { auth, storage } from './firebase';
import { updateProfile } from 'firebase/auth';
// import { doc, setDoc } from 'firebase/firestore';

export async function uploadProfileImage(file) {
  const userId = auth.currentUser.uid;
  const storageRef = ref(storage, `users/${userId}/images/${file.name}`);
  const uploadResult = await uploadBytes(storageRef, file);
  const url = await getDownloadURL(uploadResult.ref);
  updateProfile(auth.currentUser, { photoURL: url });
  //   const userRef = doc(db, `users/${userId}`);
  //   setDoc(userRef, { profileImageRef: uploadResult.ref.fullPath });
}
