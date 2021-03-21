import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlgCBE-2ZtPnWNhmk25sxAJ8_dcS3FGZI",
  authDomain: "buzzerapp-37fb5.firebaseapp.com",
  databaseURL: "https://buzzerapp-37fb5-default-rtdb.firebaseio.com",
  projectId: "buzzerapp-37fb5",
  storageBucket: "buzzerapp-37fb5.appspot.com",
  messagingSenderId: "1072203871111",
  appId: "1:1072203871111:web:1a30f9ec20373eed335922",
  measurementId: "G-CQM50DRTGN"
};
 firebase.initializeApp(firebaseConfig);

 export default firebase.database();