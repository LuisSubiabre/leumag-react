import { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from './PostsTodos';

export const Noticias = () => {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [loading, setLoading] = useState(true); // Estado para manejar la carga

    // Fetch a fixed number of posts (50)
    const fetchPosts = async () => {
        setLoading(true); // Inicia la carga
        try {
            const response = await axios.get('http://portal.liceoexperimental.cl/wp-json/wp/v2/posts?per_page=50');
            const postsData = await Promise.all(response.data.map(async (post) => {
                const featuredMediaResponse = post.featured_media ? await axios.get(`http://portal.liceoexperimental.cl/wp-json/wp/v2/media/${post.featured_media}`) : null;
                return {
                    id: post.id,
                    title: post.title.rendered,
                    content: post.content.rendered.substring(0, 100) + '...',
                    link: post.link,
                    date: post.date,
                    featuredMedia: featuredMediaResponse ? featuredMediaResponse.data.source_url : null
                };
            }));
            setPosts(postsData);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false); // Finaliza la carga
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    useEffect(() => {
        const results = posts.filter(post =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.content.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPosts(results);
    }, [searchTerm, posts]);

    return (
        <section className="container hero-footer-bg px-6">
            <section className="content">
                <input
                    type="text"
                    placeholder="Buscar..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="input my-6"
                />
                {loading ? (
                    <div className='container has-text-centered hero-footer-bg px-6'>
                        <p>Cargando</p>
                        <button className="button is-loading ">Cargando noticia...</button>
                    </div>

                ) : (
                    <Posts posts={filteredPosts} className="my-4" />
                )}
            </section>
        </section>
    );
};
