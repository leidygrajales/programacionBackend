const Container = require("./product_service.js")
const product_service = new Container("./products.json")

async function ejecutar() {

    const products = [
        {
            name: "polvos compactos",
            price: 80,
            thumbnail: 'https://www.prueba.com/product1.jpg'
        },
        {
            name: "sombras de ojos",
            price: 90,
            thumbnail: 'https://www.prueba.com/product2.jpg'
        },
        {
            name: "labial",
            price: 40,
            thumbnail: 'https://www.prueba.com/product3.jpg'
        }
    ]

    /*Inserción de productos*/
    console.log('----- INICIO - Inserción de productos -----');
    for (const product of products) {
        const insertedId = await product_service.save(product)
        console.log('insertedId:', insertedId);
    }
    console.log('----- FIN - Inserción de productos -----');

    /*Consultar producto por ID*/
    let id = 1;
    console.log(`\n----- INICIO - Traer producto por id (${id}) -----`);
    const product = await product_service.getById(id)
    console.log(`product ${id}:`, product);
    console.log(`----- FIN - Traer producto por id (${id}) -----`);

    /*Consultar todos los productos*/
    console.log('\n----- INICIO - Traer todos los productos -----');
    let allProducts = await product_service.getAll()
    console.log('All products:', allProducts);
    console.log('----- FIN - Traer todos los productos -----');


    /*Eliminar producto por ID*/
    id = 2
    console.log(`\n----- INICIO - Eliminar producto por id (${id}) -----`);
    await product_service.deleteById(id)
    console.log(`Producto eliminado: ${id}`);
    allProducts = await product_service.getAll()
    console.log('All products:', allProducts);
    console.log(`----- Fin - Eliminar producto por id (${id}) -----`);

    /*Eliminar todos los productos*/
    console.log(`\n----- INICIO - Eliminar todos los productos -----`);
    await product_service.deleteAll()
    console.log(`Se eliminan todos los productos`);
    allProducts = await product_service.getAll()
    console.log('All products:', allProducts);
    console.log(`----- Fin - Eliminar todos los productos -----`);

}

ejecutar()