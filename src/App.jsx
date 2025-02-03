import { useState, useEffect } from "react"
import { MemoryRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout.jsx"
import ProductList from "./components/ProductList.jsx"
import ProductDetail from "./components/ProductDetail.jsx"


function App() {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]); // 카테고리 상태
    const [selectedCategory, setSelectedCategory] = useState("all"); // 선택된 카테고리 상태
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    

    const fetchProducts = async (page) => {
        setLoading(true);
        // 서버에서 데이터 가져오기
        try {
                const response = await fetch(`http://localhost:8080/api/v1/products?page=${page}&size=10&keyword=`);
                // 응답에서 ok가 떨어지지 않으면
                if (!response.ok) {
                    throw new Error("Failed to fetch products")
                }
                const result = await response.json();
                setProducts((prev) => [...prev, ...result.data]); // 기존 데이터에 추가
                // 최초 한 번만 실행: 카테고리 목록 설정
                if (categories.length === 0) {
                    const uniqueCategories = ["all", ...new Set(result.data.map((product) => product.category))];
                    setCategories(uniqueCategories); // 고정된 순서로 설정
                }
                setTotalPages(result.pageInfo.totalPages); // 총 페이지 업데이트

            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
        }
    }
    

    useEffect(() => {
        fetchProducts(currentPage);
    }, [currentPage]);

    // 스크롤 이벤트 감지
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 200) {
                if (!loading && currentPage < totalPages) {
                    setCurrentPage((prev) => prev + 1); // 다음 페이지 요청
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll); // 이벤트 제거
        };
    }, [loading, currentPage, totalPages]);

    if (error) {
        return <div>Error: { error }</div>;
    }

     // 카테고리에 따라 상품 필터링
    const filteredProducts = selectedCategory === "all"
        ? products
        : products.filter(product => product.category === selectedCategory);

    return (
        <Router>
            <Layout categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}>
                <Routes>
                    <Route path="/" element={<ProductList products={filteredProducts} />} />
                    <Route path="/products/:id" element={<ProductDetail products={products}/>} />
                </Routes>
            </Layout>
        </Router>
    )
}

export default App
