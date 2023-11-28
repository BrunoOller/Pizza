document.addEventListener("DOMContentLoaded", function(){
    fetch('pizzas.json')
        .then(response => response.json())
        .then(data => {
            let pizzas = '';
            data.pizzas.forEach(pizza => {
                pizzas += `
                    <div class="pizza">
                        <img src="${pizza.imagem}">
                        <div class="nome">
                            ${pizza.nome}
                        </div>
                        <div>
                            ${pizza.ingredientes}
                        </div>
                        <div class="preco">
                            ${pizza.preco}
                        </div>
                    </div>
                `;
            });
            document.getElementById('pizzas').innerHTML = pizzas;
        })
        .catch(error = console.error('Erro ao buscar pizzas:', error));
});