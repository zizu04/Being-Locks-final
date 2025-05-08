function ProductCard({ title, description, image }) {
    try {
        return (
            <div className="bg-background-paper rounded-lg p-6 transition-transform hover:-translate-y-2" data-name="product-card">
                <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" data-name="product-image"/>
                <h3 className="text-xl font-semibold mb-2" data-name="product-title">{title}</h3>
                <p className="text-text-secondary" data-name="product-description">{description}</p>
            </div>
        );
    } catch (error) {
        console.error('ProductCard component error:', error);
        reportError(error);
        return null;
    }
}

function Products() {
    try {
        const products = [
            {
                title: "Panel Locks",
                description: "Premium panel locks combining unparalleled security and durability for your valuable assets.",
                image: "https://app.trickle.so/storage/public/images/usr_0ce047c440000001/85f9b5e5-f697-4368-b2a8-eb0729902555.jpeg"
            },
            {
                title: "Pad Locks",
                description: "Trust in our pad locks to deliver unmatched quality and performance for your security needs.",
                image: "https://app.trickle.so/storage/public/images/usr_0ce047c440000001/35bbce93-6c79-4177-879b-2728865734ce.jpeg"
            },
            {
                title: "Rack Locks",
                description: "Secure your storage units with our easy-to-install, reliable rack locking solutions.",
                image: "https://app.trickle.so/storage/public/images/usr_0ce047c440000001/e1f0299b-2dc0-46c9-91f4-74462257fc9c.jpeg"
            }
        ];

        return (
            <section id="products" className="section-padding bg-secondary-light" data-name="products-section">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12" data-name="products-header">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Products</h2>
                        <p className="text-text-secondary max-w-2xl mx-auto">
                            Discover our range of high-quality locking solutions designed to provide
                            maximum security and peace of mind.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8" data-name="products-grid">
                        {products.map((product, index) => (
                            <ProductCard key={index} {...product} />
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Products component error:', error);
        reportError(error);
        return null;
    }
}
