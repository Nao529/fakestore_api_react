import { useProductContext } from "../contexts/ProductContext"
import Product from "./Product"

function Products() {
  const { productsList, load, error } = useProductContext()

  if (load) {
    return <p>Termékek betöltése...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  if (productsList.length === 0) {
    return <p>Nincsenek megjeleníthető termékek.</p>
  }

  return (
    <section>
      {productsList.map((elem) => (
        <Product key={elem.id} elem={elem} />
      ))}
    </section>
  )
}

export default Products