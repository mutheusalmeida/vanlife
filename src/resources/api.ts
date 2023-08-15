import { initializeApp } from 'firebase/app'
import {
  User,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyDQ595M_-dlOboFULH0kvkYATpuR-ihOkk',
  authDomain: 'vanlife-d58ac.firebaseapp.com',
  projectId: 'vanlife-d58ac',
  storageBucket: 'vanlife-d58ac.appspot.com',
  messagingSenderId: '929729673195',
  appId: '1:929729673195:web:772905e9f231ca0167cbae',
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

const vansCollection = collection(db, 'vans')

export async function getVans<T>() {
  const snapshot = await getDocs(vansCollection)
  const vans = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }))

  return vans as T
}

export async function getVan<T>(id: string) {
  const vanDoc = doc(db, 'vans', id)
  const snapshot = await getDoc(vanDoc)

  if (!snapshot.exists()) {
    throw new Error(`Van doesn't exist`)
  }

  return { ...snapshot.data(), id: snapshot } as T
}

export async function getHostVans<T>() {
  const q = query(vansCollection, where('hostId', '==', '2'))
  const snapshot = await getDocs(q)
  const vans = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }))

  return vans as T
}

const auth = getAuth(app)

export async function createUser(data: {
  name: string
  email: string
  password: string
}) {
  const { email, password, name } = data
  await createUserWithEmailAndPassword(auth, email, password)

  if (auth.currentUser) {
    await updateProfile(auth.currentUser, { displayName: name })
  }
}

export async function signInUser(data: { email: string; password: string }) {
  const { email, password } = data
  await signInWithEmailAndPassword(auth, email, password)
}

export function getUser() {
  let user: User | null = null

  onAuthStateChanged(auth, (currentUser) => {
    user = currentUser
  })

  return user
}
