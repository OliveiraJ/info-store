import styled from "styled-components";
import { useLocation } from "react-router-dom";

interface ProductData {
    id: number
    name: string
    description: string
    price: number
    srcimage: string

}
const PageProductsContainer = styled.div`
    display: grid;
    column-gap: 20px;
    grid-template-columns: 2fr 1fr;
    height: 100vh;
`
const ProductImage = styled.img`
    height: 500px;
    width: 500px;
    border: 1px solid #e7ebe3;
    box-shadow: 1px 1px 3px gray;
    border-radius: 10px;
`
const ImageContainer = styled.section`
    padding-top: 30px;
    display: flex;
    justify-content: center;
    margin-left: 20px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 1px 1px 3px gray;
`

const InfoContainer = styled.section`
    display: grid;
    margin-right: 20px;
    border-radius: 10px;
    background-color: white;
    box-shadow: 1px 1px 3px gray;
    padding: 20px;
    grid-template-rows: 2fr 2fr 2fr 1fr 2fr;
    grid-template-areas:
        "name"
        "description"
        "price"
        "freight"
        "buyButton"
    ;
`
const ProductNameContainer = styled.div`
    grid-area: name;
    color: #e10141;
    font-size: xx-large;
    font-weight: 650;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ProductDescriptionContainer = styled.div`
    grid-area: description;
    padding-inline: 20px;
`

const ProductPriceContainer = styled.div`
    grid-area: price;
    font-size: xx-large;
    font-weight: 700;
    text-align: end;
    padding: 20px;
    height: fit-content;
    
`
const PriceOptionsContainer = styled.div`
    font-size: large;
    color: gray;
`
const ProductFreightContainer = styled.div`
    grid-area: freight;
    display: flex;
    align-items: center;
    justify-content: right;
    
`
const BuyButonContainer = styled.div`
    grid-area: buyButton;
    display: flex;
    justify-content: center;
    align-items: center;
`

const BuyButton = styled.button`
    height: 50px;
    width: 200px;
    color: white;
    background-color: #e10141;
    border-radius: 10px;
    border: none;
    font-size: x-large;
    font-weight: 700;
cursor: pointer;
`

const SendFreight = styled.input`
    background-color:#e10141 ;
    font-size: large;
    font-weight: 550;
    border-radius: 5px;
    padding: 8px;
    border: none;
    color: white;
    cursor: pointer;
`

const FreightForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
`

const InputFreight = styled.input`
    outline: none;
    padding: 7px 20px 7px 20px;
    width: 50%;
    margin-right: 10px;
    border-radius: 5px;
    border: 1px solid gray;
    font-size: large;
`

export function Product() {
    const location = useLocation()
    const product: ProductData = location.state as ProductData
    return (
        <PageProductsContainer>
            <ImageContainer>
                <ProductImage src={product.srcimage} alt={product.description} />
            </ImageContainer>
            <InfoContainer>
                <ProductNameContainer>
                    {product.name}
                </ProductNameContainer>
                <ProductDescriptionContainer>
                    {product.description}
                </ProductDescriptionContainer>
                <ProductPriceContainer>
                    R$ {product.price}
                    <PriceOptionsContainer>
                        Á vista ou 10x no cartão sem juros
                    </PriceOptionsContainer>
                </ProductPriceContainer>
                <ProductFreightContainer>
                    <FreightForm>
                        <InputFreight type="text" placeholder="Insira seu CEP" />
                        <SendFreight type="submit" value="Enviar" />
                    </FreightForm>
                </ProductFreightContainer>
                <BuyButonContainer>
                    <BuyButton>Comprar</BuyButton>
                </BuyButonContainer>
            </InfoContainer>

        </PageProductsContainer>
    )
}