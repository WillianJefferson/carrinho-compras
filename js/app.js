let totalGeral = 0; 
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textoContent = 'R$ 0';

function adicionar() {
//recuperar valores nome do produto, quantidade e valor alert()
//calcular o preço, o nosso subtotal 
//adicionar no carrinho 
//atualizar o valor total

//recuperar
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$ ')[1];
    let quantidade = document.getElementById('quantidade').value; 
    
    //calcular o preço, o nosso subtotal
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');
/*    
    alert(produto);
    alert(nomeProduto);
    alert(valorUnitario);
    alert(quantidade);

    alert(preco);
    alert(carrinho);
*/
    //adicionar no carrinho
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$ ${preco}</span>
  </section>`;
    //atualizar o valor total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total'); 
    campoTotal.textContent =  `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;

}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}