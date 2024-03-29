import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { imgDB, db, auth, provider } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { getDocs } from "firebase/firestore";
import { signInWithPopup, signOut } from "firebase/auth";

function AddPost() {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [img, setImg] = useState("");
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth") === "true");
  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const handleSignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      console.log("User signed in:", result.user);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
   
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.setItem("isAuth", false);
      setIsAuth(false);
      console.log("User signed out");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    const imgs = ref(imgDB, `Imgs/${v4()}`);

    try {
      await uploadBytes(imgs, file);
      const downloadURL = await getDownloadURL(imgs);
      setImg(downloadURL); // Update the state after the URL is fetched
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const createPost = async () => {
    if (!img) {
      console.error("Image upload in progress or failed");
      return;
    }

    await addDoc(postsCollectionRef, {
      title,
      postText,
      imgUrl: img,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });

    // Clear the form
    setTitle("");
    setPostText("");
    setImg("");

    navigate("/blog/posts");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/blog/login");
    }
  }, [isAuth, navigate]);

  return (
    <>
    <style>
        {`
        
        .createPostPage {
          width: 100%;
          left: 50%;
          height: calc(100vh - 80px);
          display: grid;
          place-items: center;
        }
        
        .cpContainer {
          width: 500px;
          height: auto;
          padding: 20px;
          background-color: black;
          border-radius: 12px;
          color: white;
          display: flex;
          flex-direction: column;
         /* Adjust this value to half of the container's height */
          margin-left: 500px; /* Adjust this value to half of the container's width */
        }
        
        .cpContainer h1 {
          text-align: center;
        }
        
        .cpContainer label {
          font-size: 25px;
        }
        
        .cpContainer .inputGp {
          margin-top: 30px;
          display: flex;
          flex-direction: column;
        }
        
        .inputGp input,
        .inputGp textarea {
          font-size: 18px;
          border: none;
          border-radius: 2px;
          padding: 5px;
        }
        
        .inputGp input {
          height: 40px;
        }
        .inputGp textarea {
          height: 150px;
        }
        
        .cpContainer button {
          margin-top: 20px;
          height: 40px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 18px;
        }
        input,
        textarea {
          margin-top: 5px;
        }
      
  
        `}
    </style>
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create A Post</h1>
        {isAuth ? (
          <>
            <div className="inputGp">
              <label> Title:</label>
              <input
                placeholder="Title..."
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
            </div>
            <input type="file" onChange={(e) => handleUpload(e)} />
            <br />
            <br />
            <div className="inputGp">
              <label> Post:</label>
              <textarea
                placeholder="Post..."
                value={postText}
                onChange={(event) => {
                  setPostText(event.target.value);
                }}
              />
            </div>
            <button onClick={createPost}> Submit Post</button>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <div>
            <p>Sign in to create a post</p>
            <button onClick={handleSignInWithGoogle}>Sign in with Google</button>
          </div>
        )}
      </div>
    </div>
    </>
  );
}

export default AddPost;
