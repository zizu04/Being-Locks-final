function About() {
    try {
        return (
            <section id="about" className="section-padding" data-name="about-section">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1" data-name="about-image">
                            <img 
                                src="Gemini_Generated_Image_owsi48owsi48owsi.jpg" 
                                alt="Being Locks Factory"
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="order-1 md:order-2" data-name="about-content">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Do</h2>
                            <p className="text-text-secondary mb-6">
                                We specialize in designing and manufacturing high-quality locks, ranging from padlocks 
                                to rack locks. Our innovative solutions ensure top-notch security for residential, 
                                commercial, and industrial applications.
                            </p>
                            <div className="grid grid-cols-2 gap-6" data-name="about-features">
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Quality First</h3>
                                    <p className="text-text-secondary">Premium materials and rigorous testing ensure lasting durability.</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                                    <p className="text-text-secondary">Cutting-edge technology meets traditional craftsmanship.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('About component error:', error);
        reportError(error);
        return null;
    }
}
