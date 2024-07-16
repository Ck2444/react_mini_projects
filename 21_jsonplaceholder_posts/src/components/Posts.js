import React, { useEffect, useState } from 'react';
import Post from './Post';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((post) => setPosts(post))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  //   if (isLoading) {
  //     return <h1>Loading ...</h1>;
  //   }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <>
      <h1>Posts</h1>
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      {isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        posts.map((post) => {
          return <Post {...post} key={post.id} />;
        })
      )}
    </>
  );
}
