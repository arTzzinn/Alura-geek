document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.add-product-section form');
    const productsContainer = document.querySelector('.products-container');
    const priceInput = form.querySelector('input[placeholder="Preço..."]');

    priceInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito
        value = (value / 100).toFixed(2); // Divide por 100 e formata para 2 casas decimais
        e.target.value = 'R$ ' + value.replace('.', ','); // Adiciona a máscara
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = form.querySelector('input[placeholder="Nome..."]').value;
        const price = form.querySelector('input[placeholder="Preço..."]').value;
        const image = form.querySelector('input[placeholder="Imagem..."]').value;

        const product = document.createElement('div');
        product.className = 'product';
        product.innerHTML = `
            <img src="${image}" alt="${name}">
            <h3>${name}</h3>
            <p>${price}</p>
            <button class="remove-product">Remover</button>
        `;
        
        productsContainer.appendChild(product);
        
        form.reset();
    });

    productsContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('remove-product')) {
            const product = e.target.closest('.product');
            product.remove();
        }
    });
});
