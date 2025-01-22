import React, { useState } from "react";
import { Link } from "react-router-dom";

/* TODO: products.length의 개수가 안맞음*/


function ProductList({ products }) {        

    const [selectedCategory, setSelectedCategory] = useState("all");
    const categories = ["all", "mens", "women", "common"]; 
    const filteredProducts = selectedCategory === "all" ? products : products.filter((product) => product.category === selectedCategory);

    return (
        <div>
            <div className="flex justify-between items-center mb-8 text-[#8B4513]">
                <div className="text-sm">등록제품 {products.length}개</div>
                    <div className="flex items-center space-x-4 text-sm">
                    <button>최신순</button>
                    <button>이름순</button>
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