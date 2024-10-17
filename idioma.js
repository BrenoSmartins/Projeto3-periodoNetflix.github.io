function mudarIdioma(idioma) {
    
    
    const elementos = document.querySelectorAll('.translatable');

  
    elementos.forEach((elemento) => {
       
        const textoTraduzido = elemento.getAttribute(`data-${idioma}`);
        
        if (textoTraduzido) {
            elemento.textContent = textoTraduzido;
        }
    });
    const inputs = document.querySelectorAll('input');
    inputs.forEach((input) => {
        const placeholderTraduzido = input.getAttribute(`data-${idioma}`);
        if (placeholderTraduzido) {
            input.placeholder = placeholderTraduzido;  // Atualiza o placeholder
        }
    });

    console.log("Idioma selecionado:", idioma);
}
