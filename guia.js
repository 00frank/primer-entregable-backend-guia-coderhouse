class ProductManager {
  constructor() {
    this.products = [];
  }

  static id = 0;

  addProduct(title, description, price, thumbnail, code, stock) {
    // agregar validación para comprobar que todos los campos sean recibidos

    // agregar validación para que no se repita la propiedad code antes de agregar un producto 

    // si esta todo ok, sumar uno al contador de id y agregar el producto a la lista
    ProductManager.id++;
    this.products.push({
      title: title,
      description: description,
      price: price,
      thumbnail: thumbnail,
      code: code,
      stock: stock,
      id: ProductManager.id
    });
  }

  getProducts() {
    // devolver lista de productos (usando this.products)
  }

  getProductById(id) {
    if (this.products.find((producto) => producto.id === id)) {
      return this.products.find((producto) => producto.id === id)
    } else {
      console.log("Not Found")
    }
  }
}

// === A partir de aquí, se agregan los tests del ejercicio ===
const productsManager = new ProductManager();
// agrego productos a la lista
productsManager.addProduct("Trousers", "Vans", 4500, "image1", "code123", 5);
productsManager.addProduct("T-Shirt", "DC", 4500, "image2", "code124", 8);
productsManager.addProduct("Sneakers", "CoolHass", 4500, "image3", "code125", 10);

// traigo la lista de productos para luego mostrarla en consola
const productos = productsManager.getProducts();
console.log("Productos de la lista", productos);

// traigo un producto en especifico por su id
const remeraDC = productsManager.getProductById();
console.log("Mostrando producto", remeraDC);
