import { useState } from 'react';
import './formStyles.css';
import {  useMyContext } from '../ContextBlog/ContextBLog';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const CreateBlog = () => {
    // const [formData, setFormData] = useState({
    //     title: '',
    //     body: '',
    // });
    const [formData, setFormData] = useState({
        title: '',
        body: '',
        date: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const { latestBlog, setLatestBlog } = useMyContext();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const currentDate = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
        const newId = Date.now().toString();
        const newBlog = {
            ...formData,
            date: currentDate,
            id: newId
        };
        console.log('Form submitted:', newBlog);
        // setLatestBlog([...latestBlog, formData]);
        setLatestBlog([...latestBlog, newBlog]);
        console.log(newBlog);
        
        // console.log(formData);
        setFormData({
            title: '',
            body: '',
            date: ''
        });
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "see all latest blog",
            showConfirmButton: false,
            timer: 1500
          });
        navigate('/');
    };

    return (
        <div className='form-container'>
            <h2 className='form-title'>Create a Blog</h2>
            <form className='form' onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='title'>Title:</label>
                    <input
                        type='text'
                        id='title'
                        name='title'
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>
               
                <div className='form-group'>
                    <label htmlFor='body'>Blog Details</label>
                    <textarea
                        id='body'
                        name='body'
                        value={formData.body}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type='submit' className='submit-button'>Post Blog</button>
            </form>
        </div>
    );
};

export default CreateBlog;
