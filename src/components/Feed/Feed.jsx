import * as React from "react";
import Tweet from "../Tweet/Tweet";
import TweetBox from "../TweetBox/TweetBox";
import "./Feed.css";

// {...} spread operator, takes everything in props (obj containing mny keys)
// hand all of the contnts of props as props,
// same thing as tweets={props.tweets} setTweets={props.setTweets} userProfile={props.userProfile}
export default function Feed(props) {
  return (
    <div className="col feed">
      {/* UPDATE TWEET BOX PROPS HERE */}
      <TweetBox {...props} />

      <div className="see-new-tweets beet">
        <p>
          See <span>{13}</span> New Tweets
        </p>
      </div>

      <div className="twitter-feed">
        {props.tweets.map((tweet, id) => {
          return <Tweet data-tweet-id={id} tweet={tweet} />;
        })}
      </div>
    </div>
  );
}
