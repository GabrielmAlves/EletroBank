class Conta{
	constructor(numeroConta,tipoConta,nomeUsuario,saldo){
		this.numeroConta = numeroConta;
		this.tipoConta = tipoConta;
		this.nomeUsuario = nomeUsuario;
		this.saldo = saldo;
		this.Contas = [];
		this.qtdExtratos;
		this.qtdTransferenciasGratis
		this.LimiteSaque;
		//this.Saldo;
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
				this.Contas[i].saldo = this.Contas[i].saldo - parseFloat(valor);
				console.log('Saldo da conta: ', this.Contas[i].saldo);
			}
		}
	}
}