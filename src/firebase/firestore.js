import { addDoc, collection, setDoc, doc, deleteDoc, onSnapshot } from 'firebase/firestore';
import { db } from './firebase';

const PRODUCT_COLLECTION = 'products';

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
  const unsubscribe = onSnapshot(collection(db, PRODUCT_COLLECTION), async (snapshot) => {
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
