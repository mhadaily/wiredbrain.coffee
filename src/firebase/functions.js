import { httpsCallable } from 'firebase/functions';
import { functions } from './firebase';

export const submitCartToUserOrder = async () => {
  const submitUserOrder = httpsCallable(functions, 'submitUserOrder');
  await submitUserOrder();
};
