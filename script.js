/*Variáveis para os popups*/
let popup = document.getElementById('popup');
let popup1 = document.getElementById('popup1');
let popup2 = document.getElementById('popup2');
let popup3 = document.getElementById('popup3');
let popup4 = document.getElementById('popup4');
/*Variáveis para criação de conta*/
let nome = document.getElementById('nome_conta');
let nome_usuario = nome.value;
let tipo = document.getElementById('tipo_conta');
let tipo_conta = tipo.value;
let count = 0;
let saldo = 0;
let qtd = 0;
/*Variáveis para saque*/
let valor = document.getElementById('valor_saque');
let valorSaque = valor.value;
let conta = document.getElementById('conta_saque');
let contaSaque = conta.value;
let tipoS = document.getElementById('tipo_saque');
let tipoSaque = tipoS.value;
/*Variáveis para depósito*/
let valorD = document.getElementById('valor_deposito');
let valorDeposito = valorD.value;
let contaD = document.getElementById('conta_deposito');
let contaDeposito = contaD.value;
let tipoD = document.getElementById('tipo_deposito');
let tipoDeposito = tipoD.value;
/*Variáveis para transferência*/
let valorT = document.getElementById('valor_transf');
let valorTransferencia = valorT.value;
let contaTM = document.getElementById('conta_transf_manda');
let contaTransferenciaM = contaTM.value;
let tipoTM = document.getElementById('tipo_transf_manda');
let tipoTransferenciaM = tipoTM.value;
let contaTR = document.getElementById('conta_transf_recebe');
let contaTransferenciaR = contaTR.value;
let tipoTR = document.getElementById('tipo_transf_recebe');
let tipoTransferenciaR = tipoTR.value;


/*Objetos*/
let c = new Conta(count,tipo_conta,nome_usuario,saldo,qtd);

function popUpAbrir(valor1){
	if(valor1 == 1){
		popup.classList.add("open-popup");
	}else if(valor1 == 2){
		popup1.classList.add("open-popup");
	}else if(valor1 == 3){
		popup2.classList.add("open-popup");
	}else if(valor1 == 4){
		popup3.classList.add("open-popup");
	}else if(valor1 == 5){
		popup4.classList.add("open-popup");
	}
}

function popUpFechar(valor2){
	if(valor2 == 1){
		if(!isNaN(nome.value)){
			alert('Nome inválido!');
		}else if(tipo.value != 'P' && tipo.value != 'E' && tipo.value != 'B'){
			alert('Tipo de conta inválido!');
		}else if(tipo.value == '' || nome.value == ''){
			alert('Preencha todos os campos!');
		}else{
		popup.classList.remove("open-popup");
		count++;
		c.setNumeroConta(count);
		c.setTipoConta(tipo.value);
		c.setNomeUsuario(nome.value);
		c.setSaldo(saldo);
		if(tipo.value == 'E'){
			c.setQtdTransferenciasGratis(1);
			c.criarConta(c);
		}else if(tipo.value == 'B'){
			c.setQtdTransferenciasGratis(3);
			c.criarConta(c);
		}
	}
	}else if(valor2 == 2){
		if(valor.value == '' || conta.value == '' || tipoS.value == ''){
			alert('Preencha todos os campos!');
		}else if(isNaN(valor.value) || isNaN(conta.value)){
			alert('Campo inválido!');
		}else if(tipoS.value != 'P' && tipoS.value != 'B' && tipoS.value != 'E'){
			alert('Tipo inválido!');
		}else{
		popup1.classList.remove("open-popup");
		c.sacar(valor.value,conta.value,tipoS.value);
	}
	}else if(valor2 == 3){
		if(valorD.value == '' || contaD.value == '' || tipoD.value == ''){
			alert('Preencha todos os campos!');
		}else if(!isNaN(tipoD.value)){
			alert('Tipo inválido!');
		}else if(tipoD.value != 'P' && tipoD.value != 'B' && tipoD.value != 'E'){
			alert('Tipo inválido!');
		}else{
		popup2.classList.remove("open-popup");
		c.depositar(valorD.value,contaD.value,tipoD.value);
	}
	}else if(valor2 == 4){
		if(valorT.value == '' || contaTM.value == '' || tipoTM.value == '' || contaTR.value == '' || tipoTR.value == ''){
			alert('Preencha todos os campos!');
		}else if(!isNaN(tipoTM.value) || !isNaN(tipoTR.value)){
			alert('Tipo inválido!');
		}else if(tipoTM.value != 'P' && tipoTM.value != 'B' && tipoTM.value != 'E'){
			alert('Tipo inválido!');
		}else if(tipoTR.value != 'P' && tipoTR.value != 'B' && tipoTR.value != 'E'){
			alert('Tipo inválido!');
		}else{
		popup3.classList.remove("open-popup");
		c.transferir(contaTM.value,contaTR.value,valorT.value,tipoTM.value,tipoTR.value);
	}
	}else if(valor2 == 5){
		popup4.classList.remove("open-popup");
	}
}

function popUpVoltar(valor3){
	if(valor3 == 1){
		popup.classList.remove("open-popup");
	}else if(valor3 == 2){
		popup1.classList.remove("open-popup");
	}else if(valor3 == 3){
		popup2.classList.remove("open-popup");
	}else if(valor3 == 4){
		popup3.classList.remove("open-popup");
	}else if(valor3 == 5){
		popup4.classList.remove("open-popup");
	}
}