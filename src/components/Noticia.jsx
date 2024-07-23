// Noticia.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Noticia = () => {
  const { id } = useParams();
  const [noticia, setNoticia] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNoticia = async () => {
      try {
        const response = await axios.get(`http://portal.liceoexperimental.cl/wp-json/wp/v2/posts/${id}`);
        const post = response.data;
        const featuredMediaResponse = post.featured_media ? await axios.get(`http://portal.liceoexperimental.cl/wp-json/wp/v2/media/${post.featured_media}`) : null;

        setNoticia({
          id: post.id,
          title: post.title.rendered,
          content: post.content.rendered,
          link: post.link,
          featuredMedia: featuredMediaResponse ? featuredMediaResponse.data.source_url : null,
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchNoticia();
  }, [id]);

  if (loading) {
    return <div className='container has-text-centered hero-footer-bg px-6'><button className="button is-loading ">Cargando noticia...</button></div>;
  }

  if (!noticia) {
    return <div className='container has-text-centered hero-footer-bg px-6'>No se encontró la noticia</div>;
  }

  return (
    <>


      <div className="container hero-footer-bg px-6">
        {noticia.featuredMedia && (
          <figure className="image is-1by1">
            <img src={noticia.featuredMedia} alt={noticia.title} className='img-noticia' />
          </figure>
        )}
        <h1 className="title pt-4" dangerouslySetInnerHTML={{ __html: noticia.title }}></h1>
        <div className="content pb-6" dangerouslySetInnerHTML={{ __html: noticia.content }}></div>
      </div>
      <div className="container py-6"></div>
    </>


  );
};

export default Noticia;
