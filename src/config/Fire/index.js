import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDi_rlAOiYyUW7TAkCBN_qOyyZ3bMVBBQM",
    authDomain: "mydoctor-bc16b.firebaseapp.com",
    projectId: "mydoctor-bc16b",
    storageBucket: "mydoctor-bc16b.appspot.com",
    messagingSenderId: "316032288615",
    appId: "1:316032288615:web:96b3c0203f9ccdd6c651c2"
}

firebase.initializeApp(firebaseConfig);

const Fire = firebase;

export default Fire;