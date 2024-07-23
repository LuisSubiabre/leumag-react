import { Link } from 'react-router-dom';

const Posts = ({ posts }) => {
  return (

    posts.map((post) => (
      <div key={post.id} className="card">
        <div className="card-content">
          <div className="content">
            <p className='is-size-2'>{post.title} <span className='is-size-7'>Publicado: {post.date}</span></p>
            <Link to={`/noticia/${post.id}`} className="button">Leer más</Link>
          </div>
        </div>
      </div>
    ))


  );
};

export default Posts;
