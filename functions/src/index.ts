import { initializeApp } from 'firebase-admin/app';
import { Timestamp, getFirestore } from 'firebase-admin/firestore';
import { onCall } from 'firebase-functions/v2/https';
import { auth } from 'firebase-functions';
import { onDocumentWritten } from 'firebase-functions/v2/firestore';
import { getAuth } from 'firebase-admin/auth';

initializeApp();
const firestore = getFirestore();
const adminAuth = getAuth();

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

exports.sendOrderStatusToUser = onDocumentWritten(
  'users/{userId}/orders/{orderId}',
  async (event) => {
    const userId = event.params.userId;
    const orderId = event.params.orderId;

    // const previousData = event.data?.before.data();
    const newStatus = event.data?.after.data()?.status;

    if (newStatus) {
      const user = await adminAuth.getUser(userId);
      const userEmail = user.email;
      const emailRef = firestore.collection('emails');

      return emailRef.add({
        to: userEmail,
        template: {
          name: 'order-status',
          data: {
            order_id: orderId,
            order_status: newStatus,
          },
        },
      });
    }
    return Promise.resolve(null);
  }
);
