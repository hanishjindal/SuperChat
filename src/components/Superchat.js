import React, { useRef, useState } from "react";
import "../App.css";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Footer from "./Footer";

firebase.initializeApp({
  apiKey: "AIzaSyDx9OoH_PNgNKcMv3OPdTwzAlsW3BMT51c",
  authDomain: "superchat-58c12.firebaseapp.com",
  projectId: "superchat-58c12",
  storageBucket: "superchat-58c12.appspot.com",
  messagingSenderId: "462599602643",
  appId: "1:462599602643:web:0cd16f87f2d3bc15336f26",
  measurementId: "G-QZ3JCCCZ8F",
});

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

const Superchat = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="Superchat">
      <header className="headerSetting">
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>
      <section className="superchatSection">
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
};

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div className="warningClass">
      <button className="sign-in superchatButton" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
      <p className="superchatP">
        Do not violate the community guidelines or you will be banned for life!
      </p>
      <Footer />
    </div>
  );
}

function SignOut() {
  return (
    auth.currentUser && (
      <button
        className="sign-out superchatButton"
        onClick={() => auth.signOut()}
      >
        Sign Out
      </button>
    )
  );
}

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(9999);

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>
      </main>

      <form className="superchatForm" onSubmit={sendMessage}>
        <input
          className="superchatInput"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Type something nice..."
        />

        <button className="superchatButton" type="submit" disabled={!formValue}>
          🕊️
        </button>
      </form>
    </div>
  );
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img
          className="superImg"
          src={
            photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
          }
        />
        <p className="superchatP">{text}</p>
      </div>
    </>
  );
}

export default Superchat;
