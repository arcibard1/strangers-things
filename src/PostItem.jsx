const COHORT_NAME = '2306-FTB-ET-WEB-FT';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

function PostItem({ post }) {
  const handleEdit = () => {
    // Handle edit functionality.
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`${BASE_URL}/posts/${post.id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`
        }
      });

      const data = await response.json();

      if (!response.ok) {
        console.error(data);
      }

      // Refresh the post list or handle as necessary.
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default PostItem;
