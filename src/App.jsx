import * as React from "react";
import { useState, setState } from "react";
import Feed from "./components/Feed/Feed";
import Navbar from "./components/Navbar/Navbar";
import UserProfile from "./components/UserProfile/UserProfile";
import Advertisements from "./components/Advertisements/Advertisements";
import { codepathUserProfile, firstTweet, navLinks } from "./constants";

export default function App() {
  const [userProfile, setUserProfile] = useState(codepathUserProfile);
  // deconstructing the return value of useState, shorthand for creating 2
  // vars @ once, brackets bc in tweets, setting the state to be an arry with
  // 1 elem. in case of userpf, setting state to be an obj
  // const result = useState([firstTweet]);
  // const tweets = result[0];
  // const setTweets = result[1]; is the same as...
  const [tweets, setTweets] = useState([firstTweet]);

  return (
    <div className="app">
      <Navbar navLinks={navLinks} />
      <main>
        <UserProfile userProfile={userProfile} />
        <Feed tweets={tweets} setTweets={setTweets} userProfile={userProfile} />
        <Advertisements />
      </main>
    </div>
  );
}

// x={y}, x is the name of prop, y is referencing the name in scope
