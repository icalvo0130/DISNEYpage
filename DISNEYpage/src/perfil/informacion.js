document.addEventListener('DOMContentLoaded', () => {
    const editButton = document.querySelector('.edit-button');
    const inputs = document.querySelectorAll('input');

    editButton.addEventListener('click', () => { //cambia a q se pueda hacer edit o no
        inputs.forEach(input => {
            input.disabled = !input.disabled; 
        });
        if (editButton.textContent === 'Editar Información') {
            editButton.textContent = 'Guardar Información';
        } else {
            editButton.textContent = 'Editar Información';    
        }
    });
});
