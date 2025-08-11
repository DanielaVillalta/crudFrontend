import {
    getCategories,
    createCategory,
    updateCatefory,
    deleteCategory
} from "../services/categoryService.js";

document.addEventListener("DOMContentLoaded", ()=>{
    const tableBody = document.querySelector("#categoriesTable tbody"); //Tbody - Cuerpo de la tabla
    const form = document.getElementById("categoryForm"); //Formulario dentro del modal
    const modal = new bootstrap.Modal(document.getElementById("categoryModal")); //Modal
    const lblModal = document.getElementById("categoryModalLabel"); //Título del modal
    const btnAdd = document.getElementById("btnAddCategory"); //Botón para abrir modal

    init(); //Este método permite cargar las categorías en la tabla

    //Acción cuando el botón de Agregar Nueva categoría es presionado (Abrir modal)
    btnAdd.addEventListener("click", ()=>{
        form.reset();
        form.categoryId.value = ""; //No enviamos ID, ya que estamos agregando
        lblModal.textContent = "Agregar categoría";
        modal.show();
    });
});