import CommentList from './BlogList';
import useFetch from './useFetch';
import { Link } from 'react-router-dom';

const Home = () => {
    const {data: comments, isPending, error} = useFetch('http://localhost:8000/blogs');


    return (
        <div className="home">
            <h2 className="mytitle">The Source of All History</h2>

            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Kheops-Pyramid.jpg" alt="Pyramid" className="pyramid" />
            <div>
                <Link to="/ancient-history" style={{

                }}>Ancient History</Link>
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Saladin_and_Guy.jpg" alt="Third Crusade" />
            <div>
                <Link to="/medival-history">Medival History</Link>
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/35/Erstes_pr._Bataillon_Leibgarde_in_Schlacht_bei_Kollin.jpg" alt="7 years war" />
            <div className="early-modern">
                <Link to="/early-modern-history" className="testhistory">Early Modern History</Link>
            </div>
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div>}
            {comments && <CommentList comments={comments} title="Comments" />}
        </div>
    );
}

export default Home;
