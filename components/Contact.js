function Contact() {
    try {
        const [formData, setFormData] = React.useState({
            name: '',
            email: '',
            message: ''
        });

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            // Handle form submission here
            console.log('Form submitted:', formData);
        };

        return (
            <section id="contact" className="section-padding bg-secondary-light" data-name="contact-section">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12" data-name="contact-header">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
                        <p className="text-text-secondary max-w-2xl mx-auto">
                            Contact Being Locks to elevate your spaces with our bespoke locking solutions.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-12" data-name="contact-content">
                        <div className="bg-background-paper rounded-lg p-8" data-name="contact-info">
                            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-4" data-name="address">
                                    <i className="fas fa-map-marker-alt text-primary-main mt-1"></i>
                                    <div>
                                        <p className="font-medium">Address</p>
                                        <p className="text-text-secondary">Silko Tailor Street</p>
                                        <p className="text-text-secondary">Sarai Rahman Aligarh, UP 202001</p>
                                        <p className="text-text-secondary">India</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4" data-name="email">
                                    <i className="fas fa-envelope text-primary-main"></i>
                                    <div>
                                        <p className="font-medium">Email</p>
                                        <a href="mailto:being.lock.2712@gmail.com" className="text-text-secondary hover:text-primary-main">
                                            being.lock.2712@gmail.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4" data-name="phone">
                                    <i className="fas fa-phone text-primary-main"></i>
                                    <div>
                                        <p className="font-medium">Phone</p>
                                        <a href="tel:+918449442881" className="text-text-secondary hover:text-primary-main">
                                            (+91) 844-944-2881
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-background-paper rounded-lg p-8" data-name="contact-form">
                            <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Name</label>
                                    <input 
                                        type="text" 
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 rounded-md bg-secondary-dark text-black border border-gray-700 focus:border-primary-main focus:outline-none"
                                        placeholder="Your name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Email</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 rounded-md bg-secondary-dark text-black border border-gray-700 focus:border-primary-main focus:outline-none"
                                        placeholder="Your email"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Message</label>
                                    <textarea 
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 rounded-md bg-secondary-dark text-black border border-gray-700 focus:border-primary-main focus:outline-none h-32"
                                        placeholder="Your message"
                                        required
                                    ></textarea>
                                </div>
                                <button 
                                    type="submit"
                                    className="w-full bg-primary-main hover:bg-primary-dark text-white py-2 rounded-md transition-colors"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Contact component error:', error);
        reportError(error);
        return null;
    }
}
