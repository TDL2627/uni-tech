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

import { db } from "../../../firebase";
export const createDocument = async (table, data) => {

  console.log(table,data,"aye");
  try {
    await addDoc(collection(db, table), data);
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
export const editDocument = async (props) => {
  const { table, id, data } = props;
  try {
    await setDoc(doc(db, table, id), data);
  } catch (error) {
    console.log(error);
  }
};
export const getDocuments = async (table) => {
  try {
    const arr = [];
    const querySnapshot = await getDocs(collection(db, table));
    querySnapshot.forEach((doc) => {
      arr.push(doc.data());
    });
    return arr;
  } catch (error) {
    console.log(error, "aye");
  }
};
