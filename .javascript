let carrinho = [];
let total = 0;

function adicionarAoCarrinho(item, preco) {
    carrinho.push({item, preco});
    total += preco;
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const listaCarrinho = document.getElementById('lista-carrinho');
    listaCarrinho.innerHTML = '';
    carrinho.forEach((item, indice) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="tamanho-font-texto">${item.item} - R$ ${item.preco.toFixed(2)} 
            <button class="material-symbols-outlined icone" onclick="excluirItem(${indice})">delete</button>
            </span>

        `;
        listaCarrinho.appendChild(li);
    });
    document.getElementById('total').textContent = `Total: R$ ${total.toFixed(2)}`;
}

function finalizarPedido() {
    alert('Pedido finalizado! Total: R$ ' + total.toFixed(2));
    carrinho = [];
    total = 0;
    atualizarCarrinho();
}

function excluirItem(indice) {
    if (confirm(`Tem certeza que deseja excluir o item ${carrinho[indice].item}?`)) {
        total -= carrinho[indice].preco;
        carrinho.splice(indice, 1);
        atualizarCarrinho();
    }
}

// Quando JavaScript seja executado somente apos o carregamento da pagina
document.addEventListener('DOMContentLoaded', function() {
    var menu = document.querySelector('.menu');
    var numeroHamburguer = 0; 

    // funcao para adicionar um novo hamburguer no menu
    function adicionarHamburguerMenu(nome, preco, imagemUrl) {
        numeroHamburguer++; 

        // cria um novo div para o hamburguer
        var novoHamburguer = document.createElement('div');
        novoHamburguer.classList.add('menu-item');

        //  numero do hamburguer
        novoHamburguer.setAttribute('data-numero', numeroHamburguer);

        // imagem do hamburguer
        var imagem = document.createElement('img');
        imagem.src = imagemUrl;
        imagem.alt = nome;
        novoHamburguer.appendChild(imagem);

        // criar o nome do hamburguer
        var nomeHamburger = document.createElement('h3');
        nomeHamburger.textContent = nome;
        novoHamburguer.appendChild(nomeHamburger);

        // cria o preco do hamburguer
        var precoHam = document.createElement('p');
        precoHam.textContent = preco;
        novoHamburguer.appendChild(precoHam);

       // cria o botao adicionar ao carrinho
				var botaoAdicionarCarrinho = document.createElement('button');
				botaoAdicionarCarrinho.textContent = 'Adicionar ao Carrinho';
				botaoAdicionarCarrinho.classList.add('botao-adicionar-carrinho', 'texto-botao'); // ADD CSS 
				botaoAdicionarCarrinho.onclick = function() {
						adicionarAoCarrinho(nome, preco);
				};
				novoHamburguer.appendChild(botaoAdicionarCarrinho);

				// criar o botao modificar hamburguer
				var botaoModificar = document.createElement('button');
				botaoModificar.textContent = 'Modificar Hambúrguer';
				botaoModificar.classList.add('botao-modificar', 'texto-botao'); // ADD CSS 
				botaoModificar.onclick = function() {
						modificarHamburguer(novoHamburguer);
				};
				novoHamburguer.appendChild(botaoModificar);
				
				// botao excluir 
				var botaoExcluir = document.createElement('button');
				botaoExcluir.textContent = 'Excluir Hambúrguer';
				botaoExcluir.classList.add('botao-excluir', 'texto-botao'); // ADD CSS 
				botaoExcluir.onclick = function() {
						excluirHamburguer(novoHamburguer);
				};
				novoHamburguer.appendChild(botaoExcluir);

        // add novo hamburguer
        menu.appendChild(novoHamburguer);
    }

    // funcao para modificar hamburguer 
    function modificarHamburguer(hamburguer) {
        // detalhes do hambur
        var nomeAtual = hamburguer.querySelector('h3').textContent;
        var precoAtual = parseFloat(this.parentElement.querySelector('p').textContent.replace('R$', '').trim());
        var imagemAtual = hamburguer.querySelector('img').src;

        // usuário inserire novos dados 
        var novoNome = prompt('Digite o novo nome do hambúrguer:', nomeAtual);
        var novoPreco = prompt('Digite o novo preço do hambúrguer:', precoAtual);
        var novaImagem = prompt('Digite a nova URL da imagem do hambúrguer:', imagemAtual);

        // atualizaa os detalhes 
        if (novoNome && novoPreco && novaImagem) {
            hamburguer.querySelector('h3').textContent = novoNome;
            hamburguer.querySelector('p').textContent = novoPreco;
            hamburguer.querySelector('img').src = novaImagem;
            hamburguer.querySelector('img').alt = novoNome;
        } else {
            alert('Insira todos os valores para modificar o hambúrguer.');
        }
    }
	
		// funcao para EXCLUIR 
		function excluirHamburguer(hamburguer) {
        hamburguer.remove(); // Remove o hamburguer do DOM
        alert('Hamburguer excluído');
		}
	
    // funcao para add ao carrinho
		function adicionarAoCarrinho(nome, preco) {
    var carrinho = document.getElementById('lista-carrinho');
    var totalElement = document.getElementById('total');

    //  novo item no carrinho
    var novoItem = document.createElement('li');
    novoItem.textContent = nome + ' - ' + preco;

    // add item ao carrinho
    carrinho.appendChild(novoItem);

    // atualiza total
    var totalAnterior = parseFloat(totalElement.textContent.split('R$ ')[1]);
    var novoTotal = totalAnterior + parseFloat(preco);
    totalElement.textContent = 'Total: R$ ' + novoTotal.toFixed(2);
}


    //  eventos para adicionar um novo  hambrguer
    var botaoAdicionarHamburguer = document.getElementById('adicionar-hamburguer');
    botaoAdicionarHamburguer.addEventListener('click', function() {
			
        //  usuário inserire os dados hambúrguer
        var nome = prompt('Digite o nome do hamburguer:');
        var preco = prompt('Digite o preço do hamburguer:');
        var imagemUrl = prompt('Digite a URL da imagem do hamburguer (Ter no final .jpg):');

        // verificação
        if (nome && preco && imagemUrl) {
            
            adicionarHamburguerMenu(nome, preco, imagemUrl);
        } else {
            alert('Insira todos os valores para adicionar o hamburguer.');
        }
    });
});

//kjk