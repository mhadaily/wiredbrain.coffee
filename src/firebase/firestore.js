import {
  addDoc,
  collection,
  setDoc,
  doc,
  deleteDoc,
  onSnapshot,
  query,
  collectionGroup,
  where,
  orderBy,
  getDoc,
  updateDoc,
} from 'firebase/firestore';
import { auth, db } from './firebase';

const PRODUCT_COLLECTION = 'products';
const ORDERS_COLLECTION = 'orders';
const USERS_COLLECTION = 'users';

export function addProduct(data) {
  addDoc(collection(db, PRODUCT_COLLECTION), data);
}

export function updateProduct(docId, data) {
  setDoc(doc(db, PRODUCT_COLLECTION, docId), data, { merge: true });
}

export function deleteProduct(docId) {
  deleteDoc(doc(db, PRODUCT_COLLECTION, docId));
}

function convertMapToList(allProducts) {
  let productsList = [];
  Object.keys(allProducts).forEach((id) => {
    productsList.push({ ...allProducts[id], id });
  });
  return productsList;
}
export function getProducts(setProducts) {
  const unsubscribe = onSnapshot(collection(db, PRODUCT_COLLECTION), (snapshot) => {
    let allProducts = {};
    snapshot.docs.forEach((docSnapshot) => {
      const product = docSnapshot.data();
      const product_id = docSnapshot.id;
      allProducts[product_id] = product;
    });
    const productsList = convertMapToList(allProducts);
    setProducts(productsList);
  });
  return unsubscribe;
}

export function getOrders(setOrders) {
  const q = query(
    collectionGroup(db, ORDERS_COLLECTION),
    where('status', 'in', ['pending', 'processing']),
    orderBy('createdAt', 'asc')
  );

  let allOrders = {};
  const unsubscribe = onSnapshot(q, (snapshot) => {
    snapshot.docs.forEach((doc) => {
      allOrders[doc.id] = doc.data();
    });
    const allOrdersList = convertMapToList(allOrders);
    setOrders(allOrdersList);
  });

  return unsubscribe;
}

export function getUserCart(setUserCart) {
  const userId = auth.currentUser.uid;
  const q = doc(db, `${USERS_COLLECTION}/${userId}`);

  const unsubscribe = onSnapshot(q, (snapshot) => {
    const data = snapshot.data();
    setUserCart(data?.cart || []);
  });
  return unsubscribe;
}

// Function to increase quantity
export function increaseQuantity(productId) {
  const userId = auth.currentUser.uid;
  const userRef = doc(db, `${USERS_COLLECTION}/${userId}`);
  getDoc(userRef)
    .then((doc) => {
      if (doc.exists) {
        let items = doc.data()?.cart || [];
        let item = items.find((item) => item.productId === productId);
        if (item) {
          item.quantity++;
        } else {
          items.push({ productId: productId, quantity: 1 });
        }
        return setDoc(userRef, { cart: items }, { merge: true });
      } else {
        console.log('No such document!');
      }
    })
    .catch((error) => {
      console.log('Error getting document:', error);
    });
}

// Function to decrease quantity
export function decreaseQuantity(productId) {
  const userId = auth.currentUser.uid;
  const userRef = doc(db, `${USERS_COLLECTION}/${userId}`);
  getDoc(userRef)
    .then((doc) => {
      if (doc.exists) {
        let items = doc.data()?.cart || [];
        let item = items.find((item) => item.productId === productId);
        if (item) {
          item.quantity--;
          if (item.quantity === 0) {
            items = items.filter((item) => item.productId !== productId);
          }
        }
        return updateDoc(userRef, { cart: items });
      } else {
        console.log('No such document!');
      }
    })
    .catch((error) => {
      console.log('Error getting document:', error);
    });
}

export async function getUserDocAndSetAdmin(setIsAdmin) {
  const userId = auth.currentUser.uid;
  const userDocRef = doc(db, `users/${userId}`);
  const userDataSnap = await getDoc(userDocRef);
  const userData = userDataSnap.data();
  setIsAdmin(userData?.role === 'admin');
}
