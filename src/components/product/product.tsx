import styled from "styled-components";


interface ProductProps {
    id: number
    name: string
    description: string
    price: number
    image: string

}

const ProductList = styled.section`
    margin: 10px 40px 10px 40px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.5em 1.5em;
    justify-content: center;
`
const ProductImage = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 8px;
`
const DataContainer = styled.div`
    padding: 5px;
`
const ProductContainer = styled.div`
    width: 222px;
    height: 300px;
    /* margin: 0 1em 1em; */
    padding: 10px;
    border-radius: 8px;
    box-shadow: 2px 2px 4px gray;
    background-color: white;
`
const ProductName = styled.p`
    color: gray;
    font-weight: 700;
    font-size: large;
`
const ProductPrice = styled.p`
    font-weight: 800;
    margin: 1.5em 0 1em 0;
    color: #e10141;
`

const Product = function (product: ProductProps) {
    return (
        <ProductContainer>
            <ProductImage src={product.image} alt={product.description} />
            <DataContainer>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>R$ {product.price}</ProductPrice>
            </DataContainer>
        </ProductContainer>
    )
}

export { Product, ProductList }