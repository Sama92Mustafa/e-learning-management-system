import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
    const [role, setRole] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Get the role from localStorage when the component mounts
        const storedRole = localStorage.getItem('role');
        setRole(storedRole);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        setRole(null);
        navigate('/signin');
    };

    return (
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                {role === 'admin' && <li><a href="/admin">Admin Panel</a></li>}
                {role === 'user' && <li><a href="/profile">My Profile</a></li>}
                {role ? (
                    <li><button onClick={handleLogout}>Logout</button></li>
                ) : (
                    <>
                        <li><a href="/signin">Sign In</a></li>
                        <li><a href="/signup">Sign Up</a></li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navigation;