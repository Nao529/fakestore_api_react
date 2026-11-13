import type { productType } from "../types/productType"

function Product({ elem }: { elem: productType }) {
    return (
        <article>
            <div>
                <img src={elem.image} alt={elem.title} />
            </div>
            <div>
                <p>{elem.category}</p>
                <h2>{elem.title}</h2>
                <p>{elem.description}</p>
                <p>${elem.price.toFixed(2)}</p>
            </div>
        </article>
    )
}

export default Product