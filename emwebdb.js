<script type="module">
  // Import the functions you need from the SDKs you need
  import {initializeApp} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
  import {getAnalytics} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCBBK7ijIdEy-ctooLIxjW5SLweTqCKqZI",
  authDomain: "emtax-web.firebaseapp.com",
  projectId: "emtax-web",
  storageBucket: "emtax-web.appspot.com",
  messagingSenderId: "696238823047",
  appId: "1:696238823047:web:9ca2adc50a8cac256d8a22",
  measurementId: "G-8M38J2ZTZG"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>