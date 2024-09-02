import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const videos = [
    { image: 'https://cdn.pixabay.com/photo/2012/10/29/15/36/ball-63527_1280.jpg', title: 'Learn to Code', description: 'How to ACTUALLY learn to code...' },
    { image: 'https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg', title: '4 Months Coding', description: 'How I learned to code in 4 months...' },
    { image: 'https://cdn.pixabay.com/photo/2016/11/19/22/52/coding-1841550_1280.jpg', title: 'Data Structures', description: 'Software Development Course 2023...' },
    { image: 'https://cdn.pixabay.com/photo/2016/11/12/23/34/learn-1820039_960_720.jpg', title: 'Beyond Coding', description: 'Beyond coding - how to go further...' },
    { image: 'https://cdn.pixabay.com/photo/2023/05/21/07/49/blockchain-8008051_1280.jpg', title: 'Web Development', description: 'How to start learning web development...' },
    { image: 'https://cdn.pixabay.com/photo/2020/01/28/17/08/book-4800296_1280.jpg', title: 'Coding vs Programming', description: 'Programming vs Coding - What is the difference?' },
    { image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'Mindset of Programmers', description: 'Hack your brain - mindset of successful programmers...' },
    { image: 'https://cdn.pixabay.com/photo/2017/09/05/10/20/business-2717066_1280.jpg', title: 'Impact of AI', description: 'This video will change the way you think about coding...' },
   
];

const NavigationBar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#trending">Trending</a></li>
                <li><a href="#subscriptions">Subscriptions</a></li>
                <li><a href="#library">Library</a></li>
                <li><a href="#history">History</a></li>
                <li><a href="#watch-later">Watch Later</a></li>
                <li><a href="#liked-videos">Liked Videos</a></li>
                <li><a href="#settings">Settings</a></li>
            </ul>
        </nav>
    );
};

const VideoGrid = () => {
    return (
        <div className="content">
            <NavigationBar />
            <div className="container">
                {videos.map((video, index) => (
                    <div className="rowcontainer" key={index}>
                        <img src={video.image} alt={video.title} />
                        <h5>{video.title}</h5>
                        <p>{video.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

ReactDOM.render(<VideoGrid />, document.getElementById('root'));
