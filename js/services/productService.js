const API_URL = "http://localhost:8080/api/products";

//Función para cargar productos con paginación
export async function getProducts(page = 0, size = 10) {
    const res = await fetch(`${API_URL}/getAllProducts?page=${page}&size=${size}`);
    return res.json();
}

//Función para agregar productos
export async function createProduct(data) {
    await fetch(`${API_URL}/newProduct`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    });
}

//Función para editar productos
export async function updateProduct(id, data) {
    await fetch(`${API_URL}/updateProduct/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    });
}

//Función para eliminar productos
export async function deleteProduct(id) {
    await fetch(`${API_URL}/deleteProduct/${id}`, {method: 'DELETE'});
}