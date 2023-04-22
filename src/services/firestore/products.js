import {
  getDocs,
  collection,
  query,
  where,
  getDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

export const getProducts = (categoryId) => {
  return new Promise((resolve, reject) => {
    const productsRef = categoryId
      ? query(collection(db, "products"), where("category", "==", categoryId))
      : collection(db, "products");

    getDocs(productsRef)
      .then((snapshot) => {
       
        const productAdapted = snapshot.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        resolve(productAdapted);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getProductById = (itemId) => {
  return new Promise((resolve, reject) => {
    const productRef = doc(db, "products", itemId);

    getDoc(productRef)
      .then((snapshot) => {
       
        const data = snapshot.data();
        const productAdapted = { id: snapshot.id, ...data };
        resolve(productAdapted);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
