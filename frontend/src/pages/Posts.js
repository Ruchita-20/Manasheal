import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";
import Blogimg from "../Components/images/blogbg.jpg"

function Posts({ isAuth, data }) {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, [postsCollectionRef]);

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    setPostList(postLists.filter((post) => post.id !== id));
  };

  return (
    <>
      <style>
        {`
          .homePage {
            width: 100%;
            min-height: calc(100vh - 80px);
            height: auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
          }

          .homePage .post {
            width: calc(33.33% - 40px);
            height: auto;
            max-height: 600px;
            background-color: rgb(250, 250, 250);
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            margin: 20px;
            padding: 20px;
            border-radius: 15px;
            transition: transform 0.3s ease;
          }

          .homePage .post:hover {
            transform: scale(1.05);
          }

          .post .postHeader {
            display: flex;
            justify-content: space-between;
            width: 100%;
          }

          .postHeader .title {
            padding: 10px;
            font-size: 16px;
          }

          .postHeader .deletePost {
            flex: 30%;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
          }

          .deletePost button {
            border: none;
            background: none;
            font-size: 24px;
            cursor: pointer;
            color: #ff0000;
          }

          .post .postContent {
            display: flex;
            flex-direction: column;
            gap: 10px;
            width: 100%;
          }

          .post .postTextContainer {
            word-wrap: break-word;
            height: auto;
            max-height: 400px;
            overflow: hidden;
            overflow-y: auto;
            bottom: 50px;
          }

          .post .postTextContainer .h3 {
            word-wrap: break-word;
            height: auto;
            max-height: 400px;
            overflow: hidden;
            overflow-y: auto;
            top: 20px;
          }

          .post .postTextContainer::-webkit-scrollbar {
            width: 10px;
          }

          .post .postTextContainer::-webkit-scrollbar-thumb {
            background-color: #888;
            border-radius: 5px;
          }

          .post .postTextContainer::-webkit-scrollbar-track {
            background-color: #eee;
          }

          @media only screen and (max-width: 1200px) {
            .homePage .post {
              width: calc(50% - 40px);
            }
          }

          @media only screen and (max-width: 768px) {
            .homePage .post {
              width: calc(100% - 40px);
            }
          }
        `}
      </style>
      <div className="homePage">
        <Hero
          cName="hero"
          heroimg={Blogimg}
          title="Blogs"
          btnText="Connect Now"
          url="/contact"
          btnClass="show"
        />
        <br />
        <br />

        {postLists.length > 0 ? (
          postLists.map((post) => (
            <div className="post" key={post.id}>
              <div className="postContent">
                <img src={post.imgUrl} alt="Displayed Image" />
              </div>

              <div className="postHeader">
                <div className="title">
                  <h2> {post.title}</h2>
                </div>
                <div className="deletePost">
                  {isAuth && post.author && post.author.id === auth.currentUser?.uid && (
                    <button
                      onClick={() => {
                        deletePost(post.id);
                      }}
                    >
                      &#128465;
                    </button>
                  )}
                </div>
              </div>
              <div className="postTextContainer"> {post.postText} </div>
              <h3>@{post.author?.name || "Unknown Author"}</h3>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Posts;
