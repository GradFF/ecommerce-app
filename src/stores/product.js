import { ref } from "vue";
import { defineStore } from "pinia";
import { db } from "../firebaseConfig";
import {
  getDocs,
  collection,
  getDoc,
  doc,
  query,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";

export const useProductStore = defineStore("product", () => {
  const btnLoadMoreVisible = ref(true);
  const loading = ref(false);
  const products = ref([]);
  const lastDocument = ref(null);
  const collectionName = ref("products");

  async function LoadCollection() {
    loading.value = true;
    try {
      const q = query(
        collection(db, collectionName.value),
        orderBy("rating"),
        limit(6)
      );
      const querySnapshot = await getDocs(q);
      lastDocument.value = querySnapshot.docs[querySnapshot.docs.length - 1];
      querySnapshot.forEach((doc) => {
        products.value.push({ id: doc.id, ...doc.data() });
      });
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  }
  async function LoadModeCollection() {
    loading.value = true;
    try {
      const q = query(
        collection(db, collectionName.value),
        orderBy("rating"),
        startAfter(lastDocument.value),
        limit(6)
      );
      const querySnapshot = await getDocs(q);
      if (querySnapshot.size > 0) {
        lastDocument.value = querySnapshot.docs[querySnapshot.docs.length - 1];
        querySnapshot.forEach((doc) => {
          products.value.push({ id: doc.id, ...doc.data() });
        });
        btnLoadMoreVisible.value = true;
      } else {
        btnLoadMoreVisible.value = false;
        console.log("Não há mais registro para ser exibido");
      }
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  }

  async function getDocument(id) {
    loading.value = true;
    try {
      const docRef = await getDoc(doc(db, collectionName.value, id));
      return docRef.exists() ? docRef.data() : null;
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  }

  return {
    loading,
    products,
    btnLoadMoreVisible,
    LoadCollection,
    LoadModeCollection,
  };
});
