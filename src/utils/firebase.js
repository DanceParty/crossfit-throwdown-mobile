import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  MESSAGING_SENDER_ID,
  PROJECT_ID,
  STORAGE_BUCKET,
} from './dotenv'

firebase.initializeApp({
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
})
const database = firebase.database()

export {firebase, database}
