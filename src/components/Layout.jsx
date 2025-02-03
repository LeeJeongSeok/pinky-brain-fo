import { Link } from "react-router-dom";

function Layout({ children, categories, selectedCategory, setSelectedCategory }) {
    return (
        <div className="min-h-screen bg-white w-full">
            <header className="border-b fixed top-0 left-0 right-0 bg-white z-50">
                <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col items-center space-y-6">
                <Link to="/" className="text-3xl font-serif text-[#8B4513]">
                    Pinky & Brain
                </Link>
                <nav className="flex items-center space-x-8">
                    {categories.map((category) => (
                            <button key={category} onClick={() => setSelectedCategory(category)} className="text-[#8B4513] text-lg hover:text-[#A0522D] text-sm">
                                {category}
                            </button>
                    ))}
                </nav>
                </div>
            </header>
            <main className="max-w-6xl mx-auto px-4 pt-40">{children}</main>
        </div>
    )
}

export default Layout