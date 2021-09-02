# Exercícios Aula 53  :memo:  

### Exercício 01

**A-** 

Não seria possível, visto que ela é do tipo privado e não possui nenhum método para acessá-la.

**B-**

Apenas 1 vez, visto que o construtor foi chamado apenas uma vez.

### Exercício 02

**A-** 

1 vez visto que o construtor é chamado apenas uma vez.

**B-**

Apenas 1 vez, visto que o construtor "User" é chamado por meio do construtor "Customer", e este só é chamado uma vez.

### Exercício 03

**A-** 

Sim, consigo acessar e imprimir a "password", pois a propriedade privada é uma restrição  apenas para acesso direto dessa propriedade tanto pela classe pai quanto filho.


### POLIMORFISMO

### Exercício 01

**A-** 

Consegui imprimir todas as propriedades, apenas "calculateBill" que não foi possivel.
Ela apenas é impressa se chamada como função.


### Exercício 02

**A-**

ERROR: Cannot create an instance of an abstract class

**B-**

Criando um classe que acessa Place, com isso acessamos as propriedades e métodos que não são privados de Place.

### EXERCICIO 04

Métodos e funções obrigatórios:
name, resgistrationNumber, consumeEnergy, calculateBill, cpf,
residentsQuantity, cep


### EXERCICIO 05

**A-**

Ambas possuem a propriedade cep, herdadas de Place.

**B-**

Propriedades como CNPJ e floorQuantity e os métodos getCnpj e calculateBill.
