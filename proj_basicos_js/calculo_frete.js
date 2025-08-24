// chamar função e criar variáveis
function calcularFrete() {
    let preco = parseFloat(document.getElementById("preco").value); //valores decimais
    let quantidade = parseInt(document.getElementById("quantidade").value); //converte para numero inteiro
    let desconto = parseFloat(document.getElementById("desconto").value); //valores decimais
    let frete = parseFloat(document.getElementById("frete").value); //valores decimais  
    
    // Calculo do frete
        let total = 0;
        let subtotal = preco * quantidade; 
        let valorDesconto = (subtotal * desconto) / 100;
        let totalFrete = (subtotal - valorDesconto) + frete; 
        let resultadoFrete = document.getElementById("resultado");
    
        // Exibir o resultado do frete
        resultadoFrete.innerHTML = totalFrete.toFixed(2);
}


    
    
    

        document.getElementById("total").innerText = total.toFixed(2);