import logo from './logo.svg';
import './App.css';
import "quotegarden"
import axios from 'axios';
function App() {
  const { randomQuote, authorQuotes, genreQuotes, getQuotes, searchQuotes } = require("@pprathameshmore/quotegardennpm");
/* https://api.quotable.io/random */


/* FIRST OF ALL
Este link permite tener todas las categorías y su respectivo ID, que luego se usa para buscar los items

https://api.mercadolibre.com/sites/MLA/categories

*/

/* 
Busqueda categoría de productos o "items"
Tira un array de 50 items, el cual podés acceder a los "atributes", que es toda la info del producto
Menciono valores importantes:
-Thumbnail = Imagen
-Thumbnailid = id imagen
-title = Nombre producto
-available_quality = cantidad disponibles del producto
-discount = Menciona si tiene un descuento, caso contrario tira "null" (hacer condicional con ello)

También arrojan datos globales, por ejemplo:

- catalog_product_id = ID del catálogo del producto
- category_id = Categoría del ID
https://api.mercadolibre.com/sites/MLA/search?category=MLA1055
 */

/* Este es para buscar productos

https://api.mercadolibre.com/sites/MLA/search?q={aca va una función para que el usuario escriba}
Ejemplo
https://api.mercadolibre.com/sites/MLA/search?q=Motorola%20G6
*/

  axios.get(`https://api.mercadolibre.com/sites/MLA/categories`)
      .then(res => {
        console.log(res.data);

      }, []);
  /* axios.get(`https://quote-garden.herokuapp.com/api/v3/quotes`)
  .then(res => {
    console.log(res.data);
    let currentPage = res.data.pagination.currentPage
    currentPage = res.data.pagination.currentPage + 1; 
    console.log(res.data);
    console.log(res.data.pagination.currentPage);
    console.log(currentPage);

  }, []) */
/* randomQuote()
  .then((quote) => {
    console.log(quote);
  })
  .catch((error) => {
    console.log(error);
  }); */
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
