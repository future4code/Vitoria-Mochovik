
# Exercícios Aula 45  :memo:  

### Exercício 01

```sql
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
```sql
SHOW DATABASES
```
Nos mostra as tabelas do banco de dados :arrow_down:
```sql
SHOW TABLES
```

**C-**
Nos mostra mais detalhadamente a estrutura da tabela e suas propriedades :arrow_down:
```sql
	DESCRIBE Actor
```


### Exercício 02
  
  ```sql
		INSERT INTO Actor (id, name, salary, birth_date, gender)
		VALUES(
		  "001", 
		  "Tony Ramos",
		  400000,
		  "1948-08-25", 
		  "male"
		);
```  

**A-**
``` sql
	INSERT INTO Actor (id, name, salary, birth_date, gender)
	VALUES(
		"002",
		"Glória Pires",
		1200000,
		"1963-08-23",
		"female"
	);
```
  
**B-**
Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
Significa: Entrada duplicada '002' para a chave 'PRIMARY'

**C-**
```sql
	INSERT INTO Actor (id, name, salary)
	VALUES(
	  "003", 
	  "Fernanda Montenegro",
	  300000,
	  "1929-10-19", 
	  "female"
	);
```
Error Code: 1136. Column count doesn't match value count at row 1.
**Significa**: A contagem de colunas não corresponde à contagem de valores na linha 1, ou seja, **não foram passadas as respectivas colunas entre parênteses da primeira linha do comando.**

**D-**
```sql
	INSERT INTO Actor (id, salary, birth_date, gender)
	VALUES(
	  "004",
	  400000,
	  "1949-04-18", 
	  "male"
	);
```
Error Code: 1364. Field 'name' doesn't have a default value.
**Significa**: O campo 'nome' não tem um valor padrão, ou seja, **Era esperado mais um campo de dado name para que um novo item na 
tabela Actor fosse criado**

**E-**
```sql
	INSERT INTO Actor (id, name, salary, birth_date, gender)
	VALUES(
	  "005", 
	  "Juliana Paes",
	  719333.33,
	  1979-03-26, 
	  "female"
	);
```
Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1.
**Significa**: Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1, ou seja, **O dado do campo birth_date precisa ser uma string no formato "YYYY-MM-DD"
Y de year (ano), M de month (mês) e D de day (dia).**

**F-**
```sql
	INSERT INTO Actor (id, name, salary, birth_date, gender)
	VALUES(
		"003",
		"John Doe",
	  600000,
	  "1955-10-02", 
	  "male"
	);

	INSERT INTO Actor (id, name, salary, birth_date, gender)
	VALUES(
		"004", 
	  "Jane Doe",
	  1000000,
	  "1966-12-25", 
	  "female"
	 );
```



