function Hero() {
    try {
        return (
            <section className="pt-28 pb-20 min-h-screen flex items-center bg-gradient-to-b from-background-default to-secondary-light" data-name="hero">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="text-center md:text-left" data-name="hero-content">
                            <h1 className="text-4xl md:text-6xl font-bold mb-6" data-name="hero-title">
                                Secure Your World with
                                <span className="gradient-text block">Being Locks</span>
                            </h1>
                            <p></p>
                            <p className="text-text-secondary text-lg mb-8" data-name="hero-description">
                                Premier manufacturer specializing in diverse range of locking solutions.
                                From Panel Locks to Pad Locks, we ensure uncompromised security for your needs.
                            </p>
                            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start" data-name="hero-ctas">
                                <a 
                                    href="#products"
                                    className="inline-block bg-primary-main hover:bg-primary-dark text-white px-8 py-3 rounded-md transition-colors"
                                    data-name="hero-cta-primary"
                                >
                                    Explore Our Products
                                </a>
                                <a 
                                    href="#contact"
                                    className="inline-block border border-primary-main text-primary-main hover:bg-primary-main hover:text-white px-8 py-3 rounded-md transition-colors"
                                    data-name="hero-cta-secondary"
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>
                        <div className="hidden md:block relative" data-name="hero-image">
                            <div className="absolute -inset-4 bg-primary-main/20 rounded-lg blur-xl"></div>
                            <img 
                                src="intricate-explorer-9UdgfDap6rQ-unsplash.jpg"
                                alt="Being Locks Premium Security Solutions"
                                className="relative w-full h-[500px] object-cover rounded-lg shadow-lg"
                            />
                            <div className="absolute bottom-4 right-4 bg-background-paper/80 backdrop-blur-sm p-4 rounded-lg max-w-xs">
                                <p className="text-sm font-semibold">
                                    
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        reportError(error);
        return null;
    }
}
