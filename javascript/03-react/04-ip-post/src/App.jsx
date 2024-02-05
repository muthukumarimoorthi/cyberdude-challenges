import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await fetch("https://dummyjson.com/posts");
      const postJson = await fetchedPosts.json();
      setPosts(postJson.posts);
    };
    fetchPosts();
  }, []);

  const blogPostTemplate = posts.map((post) => {
    return (
      <section>
        <div key={post.id} className="m-2 rounded-lg ">
          <div className="max-w-sm w-full lg:max-w-full lg:flex items-center space-x-4 bg-white px-2 border rounded-md shadow-lg">
            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4359/4359919.png"
                alt="post-image"
                className="bg-orange-400 rounded-full"
              />
            </div>
            <div className="rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <p className="text-sm font-bold text-gray-600 flex items-center">
                  #{post.id}
                </p>
                <div className="text-gray-900 font-bold text-xl mb-2">
                  {post.title}
                </div>
                <p className="text-gray-500 text-sm font-medium ">
                  {post.body}
                </p>
              </div>
              <div>
                <button
                  className="flex items-center shadow-lg bg-orange-400 gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-white uppercase rounded-lg hover:bg-orange-500"
                  type="button"
                >
                  <Link to={`/post/${post.id}`}>Learn More</Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-4 h-4 text-black animate-bounce"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  });

  return (
    <div className="flex bg-orange-400">
      {/* <div className="xl:block hidden">hi</div> */}
      <div className="grid grid-cols-1 mx-auto max-w-4xl">
        {blogPostTemplate}
      </div>
      {/* <div className="xl:block hidden">hlo</div> */}
    </div>
  );
};

export default App;
