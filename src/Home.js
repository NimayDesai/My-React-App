import {useState, useEffect} from 'react';
import CommentList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const {data: comments, isPending, error} = useFetch('http://localhost:8000/blogs');


    return (
        <div className="home">
            <h2 className="mytitle">The Source of All History</h2>

            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Kheops-Pyramid.jpg" alt="Pyramid" className="pyramid" />
            <div>
                <a href="/ancient-history" style={{

                }}>Ancient History</a>
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Saladin_and_Guy.jpg" alt="Third Crusade" />
            <div>
                <a href="/medival-history">Medival History</a>
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/35/Erstes_pr._Bataillon_Leibgarde_in_Schlacht_bei_Kollin.jpg" alt="7 years war" />
            <div className="early-modern">
                <a href="/early-modern-history" className="testhistory">Early Modern History</a>
            </div>
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div>}
            {comments && <CommentList comments={comments} title="Comments" />}
        </div>
    );
}

export default Home;
