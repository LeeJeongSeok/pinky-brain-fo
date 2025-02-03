import { useState } from "react";
import { Link } from "react-router-dom";

/* TODO: products.length의 개수가 안맞음*/


function ProductList({ products }) {

    const [sortOrder, setSortOrder] = useState("latest-desc"); // 최신순 기본 설정

    const handleSort = (order) => {
        if (order === "latest") {
            setSortOrder(prev => prev === "latest-desc" ? "latest-asc" : "latest-desc");
        } else {
            setSortOrder(prev => (prev === "name-asc" ? "name-desc" : "name-asc"));
        }
    };

    // 정렬된 상품 목록 생성
    const sortedProducts = [...products].sort((a, b) => {
        if (sortOrder === "latest-desc") {
            return new Date(b.createdAt) - new Date(a.createdAt); // 최신순 (내림차순)
        } else if (sortOrder === "latest-asc") {
            return new Date(a.createdAt) - new Date(b.createdAt); // 오래된순 (오름차순)
        } else if (sortOrder === "name-asc") {
            return a.name.localeCompare(b.name); // 이름 오름차순 (A → Z)
        } else if (sortOrder === "name-desc") {
            return b.name.localeCompare(a.name); // 이름 내림차순 (Z → A)
        }
        return 0;
    });

    return (
        <div>
            <div className="flex justify-between items-center mb-8 text-[#8B4513]">
                <div className="text-sm">등록제품 {products.length}개</div>
                    <div className="flex items-center space-x-4 text-sm">
                    <button onClick={() => handleSort("latest")} className="px-2 py-1">
                        {sortOrder === "latest-desc" ? "최신순 ↓" : "최신순 ↑"}
                    </button>
                    <button onClick={() => handleSort("name")} className="px-2 py-1">
                        {sortOrder === "name-asc" ? "이름순 ↑" : "이름순 ↓"}
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {sortedProducts.map((product) => (
                    <Link key={product.id} to={`/products/${product.id}`}>
                        <div className="group">
                            <div className="aspect-square mb-4">
                                <img src={product.imageFiles[0].imageUrl} alt={product.name} className="h-full w-full object-cover" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-sm text-[#8B4513] mb-1">{product.name}</h3>
                                <div className="flex items-center justify-center space-x-2">
                                    <p className="text-sm text-[#8B4513]">{product.category}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
    </div>
    )
}

export default ProductList