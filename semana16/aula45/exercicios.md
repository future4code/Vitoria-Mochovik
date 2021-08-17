# Exercícios Aula 45  :memo:  

### Exercício 01

```
	CREATE TABLE Actor ( 
			id VARCHAR(255) PRIMARY KEY, 
			name VARCHAR (255) NOT NULL, 
			salary FLOAT NOT NULL, 
			birth_date DATE NOT NULL, 
			gender VARCHAR(6) NOT NULL 
	);
```
**A-** 
VARCHAR(255) -> Campo de caracter variável, ou seja, com comprimento indeterminado;
PRIMARY KEY -> Chave de identificação única;
DATE -> representa uma data;
NOT NULL -> O prenchimento dessa propriedade é de carater obrigatório.

**B-**
Nos mostra a base de dados :arrow_down:
```
SHOW DATABASES
```
Nos mostra as tabelas do banco de dados :arrow_down:
```
SHOW TABLES
```

**C-**
Nos mostra mais detalhadamente a estrutura da tabela e suas propriedades :arrow_down:
```
	DESCRIBE Actor
```
