import { useState } from 'react';
import './formStyles.css';

const CreateBlog = () => {
    const [formData, setFormData] = useState({
        title: '',
        body: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission logic here
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
