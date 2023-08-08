import React, { useState, useEffect } from 'react';
import { fetchAllPosts } from './api';  // Make sure to destructure fetchAllPosts from the api module

const PostPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const data = await fetchAllPosts();
                setPosts(data.posts);
            } catch (error) {
                console.error("Error getting posts:", error);
            }
        };

        getPosts();
    }, []);

    return (
        <div>
            {posts.map(post => (
                <div key={post._id}>
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    {/* Render other post details here */}
                </div>
            ))}
        </div>
    );
}

export default PostPage;
