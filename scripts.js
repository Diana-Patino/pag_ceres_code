function cambiarColorFondo() {
    const colores = ['#228B22', '#8B4513', '#2E8B57', '#556B2F', '#6B8E23'];
    const colorActual = document.body.style.backgroundColor;
    let nuevoColor = colores[Math.floor(Math.random() * colores.length)];
    while (nuevoColor === colorActual) {
        nuevoColor = colores[Math.floor(Math.random() * colores.length)];
    }
    document.body.style.backgroundColor = nuevoColor;
}

let currentIndex = 0;
const images = document.querySelectorAll('.mosaic img');
setInterval(() => {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}, 3000); // Cambia la imagen cada 3 segundos
