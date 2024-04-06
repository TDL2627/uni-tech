import {
  doc,
  deleteDoc,
  setDoc,
  onSnapshot,
  collection,
  addDoc,
  query,
  where,
  serverTimestamp,
  orderBy,
  Timestamp,
  updateDoc,
  getDocs,
  getDoc,
} from "firebase/firestore";
import db from "./firebase";

export const createDocument = async (props) => {
  const { table, data } = props;
  try {
    const docRef = await addDoc(collection(db, table), data);
  } catch (error) {
    console.log(error);
  }
};

export const deleteDocument = async (props) => {
  const { table, id } = props;
  try {
    await deleteDoc(doc(db, table, id));
  } catch (error) {
    console.log(error);
  }
};
export const getDocuments = async (props) => {
  const { table} = props;
  try {
    const arr= []
    const querySnapshot = await getDocs(collection(db, table));
    querySnapshot.forEach((doc) => {
ƒ      arr.push(doc.data())
    });
    return arr;
  } catch (error) {
    console.log(error);
  }
};
