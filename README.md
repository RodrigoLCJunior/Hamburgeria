
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hamburgueria Online</title>
    <link rel="website icon" type="png" href="./Imagens/hambur gueria.png">
    <link rel="stylesheet" href="./c.css">
    <link rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"/>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
</head>
<body class="bebas-neue-regular">
    <header>
        <nav class="nav-flex">
        <img src="./Imagens/LOGOSEMFUNDO.png" class="logo-imagem">
        <h1 class="text-align: center; title">Pedidos Hamburgueria Online</h1>
					<button class="but bebas-neue-regular" id="adicionar-hamburguer">Adicionar Hambúrguer</button>
        </nav>
    </header>
    <main>
        <div class="carrinho">
            <h2 class="font-size: 30px;">Carrinho</h2>
            <ul id="lista-carrinho"></ul>
            <p id="total">Total: R$ 0,00</p>
            <button class="button-finalizar bebas-neue-regular" onclick="finalizarPedido()">Finalizar Pedido</button>
        </div>
        <h2 class="tamanho-fonte-titulo">Cardápio:</h2>        
        <div class="menu">					
            </div>
        </div>
    </main>    
    <script src="./j.js"></script>
</body> 
</html>
