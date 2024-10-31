import { db, storage } from "@/lib/firebase";
import {
  collection,
  deleteDoc,
  doc,
  setDoc,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const createNewAuthor = async ({ data, image }) => {
  if (!data?.name) {
    throw new Error("Name is undefined!");
  }

  if (!image) {
    throw new Error("Image is not selected!");
  }

  const id = doc(collection(db, "ids")).id;

  const imageRef = ref(storage, `authors/${id}.png`);

  await uploadBytes(imageRef, image);

  const imageURL = await getDownloadURL(imageRef);

  const fireStoreRef = doc(db, `authors/${id}`);

  await setDoc(fireStoreRef, {
    ...data,

    id: id,

    photoURL: imageURL,

    timestamp: Timestamp.now(),
  });
};

export const updateAuthor = async ({ data, image }) => {
  if (!data?.name) {
    throw new Error("Name is undefined!");
  }

  var imageURL = data?.photoURL;

  if (image) {
    const imageRef = ref(storage, `authors/${data?.id}.png`);
    await uploadBytes(imageRef, image);
    imageURL = await getDownloadURL(imageRef);
  }

  const fireStoreRef = doc(db, `authors/${data?.id}`);

  await updateDoc(fireStoreRef, {
    ...data,
    photoURL: imageURL,
    timestamp: Timestamp.now(),
  });
};

export const deleteAuthor = async (id) => {
  if (!id) {
    throw new Error("Id is required");
  }
  await deleteDoc(doc(db, `authors/${id}`));
};
