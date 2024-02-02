import { useEffect, useState } from "react";

const App = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await fetch("https://dummyjson.com/posts");
      const postJson = await fetchedPosts.json();
      console.log(postJson);
    };
    fetchPosts();
  }, []);

  return <div className="bg-red-500 text-2xl"></div>;
};

export default App;
