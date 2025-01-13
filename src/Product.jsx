
const imagePath = 'https://pinky-brain-s3.s3.ap-northeast-2.amazonaws.com/af38b9c4-24de-4c38-a3a1-e98047b654b5.png'

function Product() {
    return (
        <>
            <img src = {imagePath} width='400' height='400'></img>
            <h3>클래식 화이트 티셔츠</h3>
            <h3>공용</h3>
        </>
    )
}

export default Product