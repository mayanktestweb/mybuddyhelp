import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import Post from "../components/Post";
import BottomNav from "../components/BottomNav"

const PostsPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
  
    // Redirect to /progress if we're at the root path
    React.useEffect(() => {
      if (location.pathname === '/') {
        navigate('/progress');
      }
    }, [location, navigate]);
  
    const posts = [
      {
        title: "First Post",
        content: "This is the content of the first post...",
        imageUrl: "/api/placeholder/400/200"
      },
      {
        title: "Second Post",
        content: "This is the content of the second post...",
        imageUrl: "/api/placeholder/400/200"
      }
    ];
  
    return (
      <div className="bg-gray-100 min-h-screen pb-20">
        <div className="p-4">
          {posts.map((post, index) => (
            <Post key={index} {...post} />
          ))}
        </div>
        <BottomNav />
      </div>
    );
  };
  
  export default PostsPage;