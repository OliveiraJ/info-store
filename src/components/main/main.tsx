import { Link, Outlet } from "react-router-dom"
import { Product, ProductList } from "../product/product"
import { PRODUCTS } from "../../assets/products"
import styled from "styled-components"

const ProductLink = styled(Link)`
    text-decoration: none;
`

function Main() {
    return (
        <>
            <Outlet />
            <ProductList>
                {PRODUCTS && PRODUCTS.map(product =>
                    <ProductLink key={product.id} to="/" >
                        <Product key={product.id} id={product.id} description={product.description} price={product.price} image={product.srcimage} name={product.name} />
                    </ProductLink>
                )}
            </ProductList>
        </>
    )
}

export { Main }