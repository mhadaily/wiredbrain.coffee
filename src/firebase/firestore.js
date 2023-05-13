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
} from 'firebase/firestore';
import { db } from './firebase';

const PRODUCT_COLLECTION = 'products';
const ORDERS_COLLECTION = 'orders';

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
    productsList.push(allProducts[id]);
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
