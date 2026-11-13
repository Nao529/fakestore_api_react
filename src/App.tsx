import './App.css'
import Products from './components/Products'
import { ProductProvider } from './contexts/ProductContext'

function App() {

  return (
    <>
    <ProductProvider>
      <header>FakeStore</header>
      <article>
        <Products />
      </article>
      <footer><p>Készítette: Nao</p></footer>
    </ProductProvider>
    </>
  )
}

export default App