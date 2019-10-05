const Carro = require('../models/carros');

module.exports = {
  //insere carros na tabela
  async store(req,res){
    const {veiculo,marca,ano,descricao,vendido} = req.body;
    const carro = await Carro.create({
      veiculo,marca,ano,descricao,vendido
    });
    
    res.status(200).send(carro);
  },
  //lista todos os carros
  async index(req,res){
    const carro = await Carro.findAll({});
    res.status(200).send(carro);
  },
  
  //destroi com base no id
  async destroi(req,res){
   const car_id = req.params.car_id; 
   try{
    const carro =  Carro.destroy({where: {id: car_id}});
    res.status(200).send({"Delete":"success"});
   }catch(e){
    res.status(500).send({e:"erro ao deletar"});
   }
  },
  
  //retorna deacordo com o pesquisa
  async find(req,res){
    const q = req.body;    
    try{
      const carro = await Carro.findAll({where:q});
      if(!carro){
        res.status(401).send({erro:"search not found"});
      }else{
        res.status(200).send(carro);
      }
     }catch(e){
      res.status(500).send({e:"erro ao pesquisar"});
     }
  },
  
  //retorna o carro pesquisado pelo id
  async findId(req,res){
    const car_id = req.params.car_id; 
    try{
     const carro = await Carro.findAll({where:{id: car_id}});
     res.status(200).send(carro);
    }catch(e){
     res.status(500).send({e:"erro ao pesquisar"});
    }
   },
   
   //atualiza 
   async update(req,res){
    const car_id = req.params.car_id;
    const {veiculo,marca,ano,descricao,vendido} = req.body;
    try{
      const carro = await Carro.update({
          veiculo,
          marca,
          ano,
          descricao,
          vendido
        },{where:{id: car_id}}
      );
      res.status(200).send({e:"Atualizado com sucesso!"});
     }catch(e){
      res.status(500).send({e:"erro ao atualizar"});
     }
   }
  
};