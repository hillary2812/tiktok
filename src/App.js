import React from "react";
import "./App.css";
import Video from "./Video";

function App() {
  return (
    <div className="app">
      <h1>Let's build a FULL STACK MERN TIKTOK Clone..</h1>
      <div className="app__videos">
        <Video
          url="https://www.youtube.com/embed/9GCz1Tv5WhE"
          channel="jkiddu"
          description="YOO this works"
          song="Hey kiddu...."
          likes={123}
          messages={456}
          shares={789}
        />
        <Video
          url="https://www.youtube.com/embed/9GCz1Tv5WhE"
          channel="jkiddu"
          description="YOO this works"
          song="Hey kiddu...."
          likes={123}
          messages={456}
          shares={789}
        />
      </div>
      {/* app container */}
      {/* videos */}
    </div>
  );
}

export default App;
