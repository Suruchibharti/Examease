import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AdminPage = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);
    const [noticeTitle, setNoticeTitle] = useState('');
    const [noticeContent, setNoticeContent] = useState('');
    const [notices, setNotices] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:800/api/userData', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setIsAdmin(response.data.isAdmin);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    const handleSubmitNotice = async (event) => {
        event.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post('http://localhost:800/api/notices', { title: noticeTitle, content: noticeContent }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setNotices([...notices, response.data.notice]);
            setNoticeTitle('');
            setNoticeContent('');
        } catch (error) {
            console.error('Error creating notice:', error);
            setError('Failed to add notice');
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!isAdmin) {
        return (
            <div>
                <h2>Warning: Access Denied</h2>
            </div>
        );
    }

    return (
        <div>
            <h1>Welcome Admin!</h1>
            <h2>Important Notices</h2>
            <ul>
                {notices.map((notice, index) => (
                    <li key={index}>{notice.title}</li>
                ))}
            </ul>
            {isAdmin && (
                <form onSubmit={handleSubmitNotice}>
                    <div>
                        <label>Title:</label>
                        <input type="text" value={noticeTitle} onChange={(event) => setNoticeTitle(event.target.value)} />
                    </div>
                    <div>
                        <label>Content:</label>
                        <textarea value={noticeContent} onChange={(event) => setNoticeContent(event.target.value)} />
                    </div>
                    <button type="submit">Add Notice</button>
                </form>
            )}
            {error && <p>{error}</p>}
            <Link to="/admin/experiences">
                <button>Manage Interview Experiences</button>
            </Link>
        </div>
    );
};

export default AdminPage;
