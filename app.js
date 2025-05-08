function App() {
    try {
        return (
            <div className="min-h-screen" data-name="app">
                <Header />
                <Hero />
                <Products />
                <About />
                <Contact />
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
