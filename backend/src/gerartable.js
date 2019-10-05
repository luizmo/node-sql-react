const Carro = require('./models/carros');


Carro.sync({force:true});
/*Carro.create({
	veiculo: "gabriel",
	marca: "x",
	ano: "200",
	descricao: "text",
	vendido: false,
	
})*/