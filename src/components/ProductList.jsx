import { useState } from "react";
import { Link } from "react-router-dom";

/* TODO: products.length의 개수가 안맞음*/


function ProductList({ products }) {
    
    const [sortOrder, setSortOrder] = useState("latest"); // 최신순 기본 설정

    const handleSort = (order) => {
        setSortOrder(order);
    };

    // 정렬된 상품 목록 생성
    const sortedProducts = [...products].sort((a, b) => {
        if (sortOrder === "latest") {
            return new Date(b.createdAt) - new Date(a.createdAt); // 최신순 정렬
        } else if (sortOrder === "name") {
            return a.name.localeCompare(b.name); // 이름순 정렬
        }
        return 0;
    });

    return (
        <div>
            <div className="flex justify-between items-center mb-8 text-[#8B4513]">
                <div className="text-sm">등록제품 {products.length}개</div>
                    <div className="flex items-center space-x-4 text-sm">
                    <button 
                        onClick={() => handleSort("latest")} 
                        className="px-2 py-1"
                    >
                        최신순
                    </button>
                    <button 
                        onClick={() => handleSort("name")} 
                        className="px-2 py-1"
                    >
                        이름순
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {products.map((product) => (
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