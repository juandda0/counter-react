import { useState } from "react";

const Likes = () => {
   const [likes, setLikes] = useState(0)
   
    return (<button onClick ={() => setLikes(likes+1)}>{likes} likes</button>   
    );
}
const App = () => {
    return <Likes />
};

export default App;
