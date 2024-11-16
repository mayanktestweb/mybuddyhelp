const Post = ({ title, imageUrl, content }) => (
    <div className="bg-white rounded-lg shadow-md mb-4 p-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <img 
        src={imageUrl || "/api/placeholder/400/200"} 
        alt={title}
        className="w-full h-48 object-cover rounded-md mb-3"
      />
      <p className="text-gray-700">{content}</p>
    </div>
  );

  export default Post;