// Función para crear la dispersión de los corazones al hacer clic
function dispersarCorazones(event) {
    // Crear un corazón al hacer clic
    let corazon = document.createElement('div');
    corazon.classList.add('corazon');
    corazon.innerHTML = '❤️';

    // Establecer la posición inicial del corazón en el lugar del clic
    corazon.style.left = `${event.clientX}px`;
    corazon.style.top = `${event.clientY}px`;

    // Establecer un estilo aleatorio para la dispersión
    let aleatorioX = (Math.random() - 0.5) * 200; // Movimiento horizontal aleatorio
    let aleatorioY = (Math.random() - 0.5) * 200; // Movimiento vertical aleatorio

    // Establecer las propiedades para la animación de dispersión
    corazon.style.setProperty('--x', `${aleatorioX}px`);
    corazon.style.setProperty('--y', `${aleatorioY}px`);

    // Aplicar la animación para dispersar el corazón
    corazon.style.animation = 'dispersar 1s forwards'; 

    // Añadir el corazón al DOM
    document.body.appendChild(corazon);

    // Eliminar el corazón después de que termine la animación (1 segundo)
    setTimeout(() => {
        corazon.remove();
    }, 1000); // Eliminar después de 1 segundo
}

// Asignar el evento de click a toda la página para dispersar corazones
document.querySelector('.fondo-estrellas-corazones').addEventListener('click', dispersarCorazones);