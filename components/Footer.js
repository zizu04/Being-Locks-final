function Footer() {
    try {
        return (
            <footer className="bg-secondary-main py-12" data-name="footer">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-8" data-name="footer-content">
                        <div className="col-span-2 md:col-span-1" data-name="footer-brand">
                            <h3 className="text-2xl font-bold mb-4">
                                <span className="gradient-text">Being</span> Locks
                            </h3>
                            <p className="text-text-secondary">
                                Securing your world with premium locking solutions since 2020.
                            </p>
                        </div>
                        
                        <div data-name="footer-links">
                            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-text-secondary hover:text-primary-main">Home</a></li>
                                <li><a href="#products" className="text-text-secondary hover:text-primary-main">Products</a></li>
                                <li><a href="#about" className="text-text-secondary hover:text-primary-main">About</a></li>
                                <li><a href="#contact" className="text-text-secondary hover:text-primary-main">Contact</a></li>
                            </ul>
                        </div>
                        
                        <div data-name="footer-contact">
                            <h4 className="text-lg font-semibold mb-4">Contact</h4>
                            <ul className="space-y-2 text-text-secondary">
                                <li>Silko Tailor Street</li>
                                <li>Sarai Rahman Aligarh, UP 202001</li>
                                <li>India</li>
                                <li>Phone: (+91) 844-944-2881</li>
                            </ul>
                        </div>
                        
                        <div data-name="footer-social">
                            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                            <div className="flex space-x-4">
                                <a 
                                    href="https://www.facebook.com/beings.lock?mibextid=ZbWKwL" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-text-secondary hover:text-primary-main text-xl"
                                >
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a 
                                    href="https://www.instagram.com/beingslock?igsh=MXVzYnA1bDR0aW9rMg==" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-text-secondary hover:text-primary-main text-xl"
                                >
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a 
                                    href="https://www.linkedin.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-text-secondary hover:text-primary-main text-xl"
                                >
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="border-t border-divider mt-8 pt-8 text-center text-text-secondary" data-name="footer-bottom">
                        <p>&copy; {new Date().getFullYear()} Somnium Solutions. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
        return null;
    }
}
