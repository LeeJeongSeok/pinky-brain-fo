import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { X } from "lucide-react";

function ProductDetail({ products }) {

    const { id } = useParams();
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(0);
    const product = products.find((p) => p.id === Number(id));

    if (!product) {
        return <div>상품을 찾을 수 없습니다.</div>;
    }

    return (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
            <div className="max-w-4xl mx-auto px-4 py-8">
                <button onClick={() => navigate(-1)} className="absolute top-4 right-4 text-[#8B4513]">
                    <X className="h-6 w-6" />
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <img src={product.imageFiles[selectedImage].imageUrl} alt={product.name} className="w-full aspect-square object-cover" />
                        <div className="flex space-x-4 mt-4">
                        {product.imageFiles.map((image, index) => (
                            <button key={index} onClick={() => setSelectedImage(index)} className={`w-20 aspect-square ${selectedImage === index ? "ring-2 ring-[#8B4513]" : ""}`}>
                                <img src={image.imageUrl} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover"/>
                            </button>
                        ))}
                        </div>
                    </div>
                    <div className="text-[#8B4513]">
                        <h1 className="text-2xl font-medium mb-4">{product.name}</h1>
                        <p className="text-lg mb-4">{product.category}</p>
                        <p className="text-sm">{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default ProductDetail