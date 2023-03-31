// cria um array para representar o carrinho
let carrinho = [];

// adiciona um item ao carrinho quando o formulário é enviado
function adicionarItem() {
    event.preventDefault();
    let nome = document.getElementById("nome").value;
    let preco = parseFloat(document.getElementById("preco").value);
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let item = {nome: nome, preco: preco, quantidade: quantidade};
    carrinho.push(item);
    atualizarCarrinho();
}

// exibe os itens do carrinho na página
function atualizarCarrinho() {
    let carrinhoHtml = "";
    let total = 0;
    for (let i = 0; i < carrinho.length; i++) {
        let item = carrinho[i];
        let subtotal = item.preco * item.quantidade;
        total += subtotal;
        carrinhoHtml += "<li>" + item.nome + " - R$" + item.preco.toFixed(2) + " x " + item.quantidade + " = R$" + subtotal.toFixed(2) + "</li>";
    }
    document.getElementById("itens-carrinho").innerHTML = carrinhoHtml;
    document.getElementById("total-carrinho").innerHTML = "Total: R$" + total.toFixed(2);
}