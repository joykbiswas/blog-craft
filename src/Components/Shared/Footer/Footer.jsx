import './footerStyles.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-content'>
                <p>&copy; {new Date().getFullYear()} JOY BISWAS. All rights reserved.</p>
                <p>
                    <a href='/privacy-policy' className='footer-link'>Privacy Policy</a> | 
                    <a href='/terms-of-service' className='footer-link'> Terms of Service</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
