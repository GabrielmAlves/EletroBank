class Conta{
	constructor(numeroConta,tipoConta,nomeUsuario,saldo,qtd){
		this.numeroConta = numeroConta;
		this.tipoConta = tipoConta;
		this.nomeUsuario = nomeUsuario;
		this.saldo = saldo;
		this.Contas = [];
		this.qtdExtratos;
		this.qtdTransferenciasGratis = qtd;
	}

	setNumeroConta(numeroConta){
		this.numeroConta = numeroConta;
	}

	getNumeroConta(numeroConta){
		return this.numeroConta;
	}

	setTipoConta(tipoConta){
		this.tipoConta = tipoConta;
	}

	getTipoConta(tipoConta){
		return this.tipoConta;
	}

	setNomeUsuario(nomeUsuario){
		this.nomeUsuario = nomeUsuario;
	}

	getNomeUsuario(nomeUsuario){
		return this.nomeUsuario;
	}

	setSaldo(saldo){
		this.saldo = saldo;
	}

	getSaldo(saldo){
		return this.saldo;
	}

	setQtdTransferenciasGratis(tfgratis){
		this.qtdTransferenciasGratis = tfgratis;
	}

	getQtdTransferenciasGratis(tfgratis){
		return this.qtdTransferenciasGratis;
	}

	criarConta(conta){
		localStorage.setItem('Contas', JSON.stringify(conta));
		var contas = localStorage.getItem('Contas')
		var Contas = JSON.parse(contas);
		this.Contas.push(Contas)
		console.log('Contas: ', this.Contas);
	}

	depositar(valor,conta,tipo){
		var flag = 0;
		for(var i = 0;i<this.Contas.length; i++){
			if(this.Contas[i].tipoConta === tipo && this.Contas[i].numeroConta == conta){
				flag = 1;
				this.Contas[i].saldo = this.Contas[i].saldo + parseFloat(valor);
				console.log('Saldo da conta: ', this.Contas[i].saldo);
			}
		}
			if(flag == 0){
				alert('Conta inexistente!');
			}
	}

	sacar(valor,conta,tipo){
		for(var i = 0;i<this.Contas.length; i++){
			if(this.Contas[i].tipoConta === tipo && this.Contas[i].numeroConta == conta){
				if(this.Contas[i].tipoConta == 'E' && valor > 300){
					alert('Você não pode sacar mais que R$300!');
				}else if(this.Contas[i].tipoConta == 'B' && valor > 1000){
					alert('Você não pode sacar mais que R$1000!');
				}else{
				this.Contas[i].saldo = this.Contas[i].saldo - parseFloat(valor);
				console.log('Saldo da conta: ', this.Contas[i].saldo);
			}
			}
		}
	}

	transferir(conta1,conta2,valor,tipo1,tipo2){
		let flag = 0;
		for(var i = 0;i<this.Contas.length; i++){
			console.log('fodase: ', conta1);
			console.log('fodase: ', conta2);
			console.log('fodase: ', valor);
			console.log('fodase: ', tipo1);
			console.log('fodase: ', tipo2);
			console.log('fodase2222: ', this.Contas[i].numeroConta)
			console.log('fodase2222: ', this.Contas[i].tipoConta)
			if(this.Contas[i].tipoConta == tipo1 && this.Contas[i].numeroConta == conta1){
				if(tipo1 == 'E'){
				if(this.Contas[i].qtdTransferenciasGratis == 0){
					alert('Acabaram suas transferências grátis!');
					return;
				}else{
				flag = 1;
				this.Contas[i].qtdTransferenciasGratis--;
				this.Contas[i].saldo -= parseFloat(valor);
			}
			}else if(tipo1 == 'B'){
				if(this.Contas[i].qtdTransferenciasGratis == 0){
					alert('Acabaram suas transferências grátis!');
				}else{
				flag = 1;
				this.Contas[i].qtdTransferenciasGratis--;
				this.Contas[i].saldo -= parseFloat(valor);
			}
			}else if(tipo1 == 'P'){
				flag = 1;
				this.Contas[i].saldo -= parseFloat(valor);
			}
		}
	}
		if(flag == 0){
			alert('Conta inexistente!');
			return;
		}

		for(var i = 0;i<this.Contas.length; i++){
			if(this.Contas[i].tipoConta == tipo2 && this.Contas[i].numeroConta == conta2){
				flag = 1;
				this.Contas[i].saldo += parseFloat(valor);
			}
		}
}
}