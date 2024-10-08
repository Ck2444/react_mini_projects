import React, { useEffect, useState } from 'react';
import Post from './Post';

const API_URL = 'http://jsonplaceholder.typicode.com/posts';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(API_URL);
        const posts = await res.json();
        setPosts(posts);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    }
    fetchData();
  }, []);

  // useEffect(() => {
  //   fetch(API_URL)
  //     .then((response) => response.json())
  //     .then((post) => setPosts(post))
  //     .catch((error) => setError(error.message))
  //     .finally(() => setIsLoading(false));
  // }, []);

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
