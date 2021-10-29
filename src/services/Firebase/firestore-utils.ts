import { addDoc, collection } from 'firebase/firestore';
import { firestore } from './firebase-utils';

addDoc(collection(firestore, 'users'), { testing: 123 })
  .then((res) => console.log(res))
  .catch((error) => console.log(error));
