import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Limitar la cantidad de posts a 3
        const response = await axios.get('http://portal.liceoexperimental.cl/wp-json/wp/v2/posts?per_page=3');
        const postsData = await Promise.all(response.data.map(async (post) => {
          const featuredMediaResponse = post.featured_media ? await axios.get(`http://portal.liceoexperimental.cl/wp-json/wp/v2/media/${post.featured_media}`) : null;
          return {
            id: post.id,
            title: post.title.rendered,
            content: post.content.rendered.substring(0, 100) + '...', // Extracto del contenido
            link: post.link,
            featuredMedia: featuredMediaResponse ? featuredMediaResponse.data.source_url : null // URL de la imagen destacada
          };
        }));
        setPosts(postsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      {posts.map((post, index) => (
        <div key={index} className="column is-col-span-1">
          <div className="card">
            <div className="card-image">
              <figure className="image is-1by1">
                <img
                  src={post.featuredMedia}
                  alt={post.title}
                />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4" dangerouslySetInnerHTML={{ __html: post.title }}></p>

                </div>
              </div>
              <div className="content">
                <p dangerouslySetInnerHTML={{ __html: post.content }}></p> {/* Renderiza el contenido HTML */}
              </div>
              <div className='is-flex is-justify-content-flex-end'>
                <Link to={`noticia/${post.id}`} className="button">Leer más</Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Posts;
