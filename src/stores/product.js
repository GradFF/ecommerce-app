import { ref } from "vue";
import { defineStore } from "pinia";
import { db } from "../firebaseConfig";
import { getDocs, collection, getDoc, doc } from "firebase/firestore";

export const useProductStore = defineStore("product", () => {
  const loading = ref(false);
  const products = ref([]);
  const collectionName = ref("products");
  async function getCollection() {
    loading.value = true;
    try {
      const querySnapshot = await getDocs(collection(db, collectionName.value));
      querySnapshot.forEach((doc) => {
        products.value.push({ id: doc.id, ...doc.data() });
      });
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

  return { loading, products, getCollection, getDocument };
});
