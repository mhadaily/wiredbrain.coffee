import { initializeApp } from 'firebase-admin/app';
import { Timestamp, getFirestore } from 'firebase-admin/firestore';
import { onCall } from 'firebase-functions/v2/https';
import { auth } from 'firebase-functions';

initializeApp();
const firestore = getFirestore();

exports.submitUserOrder = onCall(async (request) => {
  const userId = request.auth?.uid;

  if (userId) {
    const userDocRef = firestore.doc(`users/${userId}`);
    const userDoc = await userDocRef.get();
    const userData = userDoc.data();
    const userOrderCart = userData?.cart;

    const userOrders = firestore.collection(`/users/${userId}/orders`);
    await userOrders.add({
      items: userOrderCart,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
      status: 'pending',
    });

    return userDocRef.update({ cart: [] });
  }

  return Promise.resolve(null);
});

exports.addRole = auth.user().onCreate(async (user) => {
  const uid = user.uid;
  const email = user.email;

  if (email?.endsWith('@majidhajian.com')) {
    const userDocRef = firestore.doc(`users/${uid}`);
    return userDocRef.set({ role: 'admin' }, { merge: true });
  }

  return Promise.resolve(null);
});
