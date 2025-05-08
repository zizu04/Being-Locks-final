function Header() {
    try {
        const [isOpen, setIsOpen] = React.useState(false);
        const [activeLink, setActiveLink] = React.useState('home');

        const links = [
            { id: 'home', label: 'Home', href: '#' },
            { id: 'products', label: 'Products', href: '#products' },
            { id: 'about', label: 'About', href: '#about' },
            { id: 'contact', label: 'Contact', href: '#contact' }
        ];

        return (
            <header className="fixed w-full bg-background-default/90 backdrop-blur-sm z-50" data-name="header">
                <nav className="container mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center" data-name="logo">
                            <img 
                                src="https://app.trickle.so/storage/public/images/usr_0ce047c440000001/b00a8ed9-3919-4d92-bd6e-099548bb2dda.jpeg"
                                alt="Being Locks Logo"
                                className="h-8 mr-2"
                            />
                            <span className="text-2xl font-bold">
                                <span className="gradient-text">Being</span> Locks
                            </span>
                        </div>

                        <div className="hidden md:flex space-x-8" data-name="desktop-nav">
                            {links.map(link => (
                                <a
                                    key={link.id}
                                    href={link.href}
                                    className={`hover:text-primary-main transition-colors ${
                                        activeLink === link.id ? 'text-primary-main' : 'text-text-primary'
                                    }`}
                                    onClick={() => setActiveLink(link.id)}
                                    data-name={`nav-link-${link.id}`}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        <button
                            className="md:hidden text-white"
                            onClick={() => setIsOpen(!isOpen)}
                            data-name="mobile-menu-button"
                        >
                            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
                        </button>
                    </div>

                    {isOpen && (
                        <div className="md:hidden mt-4 space-y-4" data-name="mobile-nav">
                            {links.map(link => (
                                <a
                                    key={link.id}
                                    href={link.href}
                                    className={`block hover:text-primary-main transition-colors ${
                                        activeLink === link.id ? 'text-primary-main' : 'text-text-primary'
                                    }`}
                                    onClick={() => {
                                        setActiveLink(link.id);
                                        setIsOpen(false);
                                    }}
                                    data-name={`mobile-nav-link-${link.id}`}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    )}
                </nav>
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
        return null;
    }
}
