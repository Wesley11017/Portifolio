// Destaca a habilidade ao passar o mouse
const habilidades = document.querySelectorAll('.habilidade');
habilidades.forEach(habilidade => {
    habilidade.addEventListener('mouseenter', () => {
        habilidade.style.background = '#ff9800';
        habilidade.style.color = '#222';
    });
    habilidade.addEventListener('mouseleave', () => {
        habilidade.style.background = '#fff';
        habilidade.style.color = '#ff9800';
    });
});

// Redirecionamento dos cartões de projeto
const linksProjetos = document.querySelectorAll('.link-projeto');
linksProjetos[0].addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = 'projeto1.html';
});
linksProjetos[1].addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = 'projeto2.html';
});
linksProjetos[2].addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = 'projeto3.html';
}); 