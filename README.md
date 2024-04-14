
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





body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #ffffff;
}
header {
    background-color: #c20a0a;
    color: #fff;
    text-align: center;
    padding: 20px 0;
}
h1 {
    font-size: 40px;
}
.logo-imagem {
    background-image: url('LOGOSEMFUNDO.png');
    background-size: contain;
    background-repeat: no-repeat;
    height: 200px;
    text-align: center;
    display: flex;
    align-items: center; 
}

.nav-flex {
    display: flex;
    align-items: center;
}

main {
    padding: 10px;
}

.menu {
    margin: 20px;
    float: left;
    position: absolute;
    z-index: 0;
}

.menu-item {
    border: 1px solid #ccc;
    margin-bottom: 20px;
    padding: 10px;
    margin-left: 10px;
    width: 150%;
}

.menu-item img {
    max-width: 250px;
}

.carrinho {
    float: right;
    width: 30%;
    border: 1px solid #ccc;
    position: fixed;
    bottom: 0;
    right: 20px;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
    z-index: 1;
}

.button-finalizar {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #333;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 18px;    
}

.button-adm {
    display: flex;
    padding: 10px;
    background-color: #333;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 18px;
    float: right;
    align-items: center;
    margin-right: 50px;
}

.icone {
    background-color: #ffffff;
    border: solid 1px #ffffff;
    cursor: pointer;
    border-top: 50px;
}

.bebas-neue-regular {
    font-family: "Bebas Neue", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

.tamanho-fonte-titulo {
    font-size: 40px;
    text-align: center;
}

.tamanho-fonte-subtitulo {
    font-size: 30px;
    margin-left: 20px;
}

.tamanho-font-texto {
    font-size: 20px;
}

h3 {
    font-size: 20px;
}

h4 {
    font-size: 15px;
}

p {
    font-size: 20px;
}
.but{
    display: block; 
    width: 30%;
    padding: 10px;
    background-color: #333;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 18px;
    margin-bottom: 10px; 
	  margin-left:50px; 
}
	
.button-modificar{
    display: block; 
    width: 30%;
    padding: 10px;
    background-color: #333;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 18px;
    margin-bottom: 10px; 
}
.botao-adicionar {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #333;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 18px; 
}

.botao-adicionar:hover {
    background-color: #0056b3;
}

.texto-botao{
    font-family: "Bebas Neue", sans-serif;
    font-weight: 400;
    font-style: normal
}

.texto-botao:hover{
    background-color: #0056b3;
  }
		

@media (max-width: 765px) {
body {
font-size: 20px;
}

.menu-item img {
    max-width: 70%;
    height: auto;
  }

.menu-item h3 {
        font-size: 20px;
    }

.menu-item p {
        font-size: 20px;
     
 }
 
.menu-item {
    margin-bottom: 10px; 
 }
 
.menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
    }

.carrinho {
        position: fixed;
        bottom: 0;
        right: 20px;
        background-color: #fff;
        padding: 20px;
        box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
    }

.logo-imagem {
        background-image: url('LOGOSEMFUNDO.png');
        background-size: contain;
        background-repeat: no-repeat;
        height: 200px;
        text-align: center;
        display: flex;
        align-items: center; 
        margin-right: 10px;
    }
}


 
  
@media (max-width: 375px) {
    .logo-imagem{
        width: 0px;
        height: 0px;
        border: 0px solid white;
}

.title {
        font-size: 28px;
        text-align: center;
        margin-left: 15px;
  }
}
