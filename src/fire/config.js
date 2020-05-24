import firebase from "firebase"
  const config = {
    apiKey: "AIzaSyD593uhX4TsySmT2BUUxNH7CqvVNFFFnGI",
    authDomain: "kinoproekt-fd8e5.firebaseapp.com",
    databaseURL: "https://kinoproekt-fd8e5.firebaseio.com",
    projectId: "kinoproekt-fd8e5",
    storageBucket: "kinoproekt-fd8e5.appspot.com",
    messagingSenderId: "442621992936",
    appId: "1:442621992936:web:173992820df53ad5258e5d"
  };
  // Initialize Firebase
 const fire= firebase.initializeApp(config);
export default fire