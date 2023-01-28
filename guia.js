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
      ...newProduct,
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
