import React from "react";
import { Link } from "react-router-dom";

function Layout({ children }) {
    return (
        <div className="min-h-screen bg-white w-full">
            <header className="border-b fixed top-0 left-0 right-0 bg-white z-50">
                <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col items-center space-y-6">
                <Link to="/" className="text-3xl font-serif text-[#8B4513]">
                    Pinky & Brain
                </Link>
                <nav className="flex items-center space-x-8">
                    {["전체", "남성", "여성", "공용"].map((item) => ( /* TODO: 상품 카테고리도 서버에서 받아와야 함, 카테고리를 클릭했을 때 대응되는 아이템만 출력되어야함*/
                        <Link key={item} to="/" className="text-[#8B4513] hover:text-[#A0522D] text-sm">
                            {item}
                        </Link>
                    ))}
                </nav>
                </div>
            </header>
            <main className="max-w-6xl mx-auto px-4 pt-40">{children}</main>
        </div>
    )
}

export default Layout