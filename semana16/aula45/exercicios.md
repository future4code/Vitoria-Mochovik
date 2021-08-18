
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
``` sql
	INSERT INTO Actor (id, name, salary, birth_date, gender)
	VALUES (
		"002",
        "Thamires Rodrigues",
        1500,
        "1991-05-21",
        "female"
	);
    
```
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

### Exercício 03

**A-**
``` sql
	SELECT * from Actor WHERE gender = "female";
```

**B-**
``` sql
	SELECT salary from Actor WHERE name = "Tony Ramos";
```
**C-**
``` sql
	SELECT * FROM Actor WHERE gender = "invalid";
```
**D-**
``` sql
	SELECT id, name, salary FROM Actor WHERE salary < 500000;
```
**E-**
``` sql
	SELECT id, nome from Actor WHERE id = "002";
```
Error Code: 1054. Unknown column 'nome' in 'field list'.
**Significa:** O nome da coluna 'nome' não existe, porque na criação da tabela foi utilizado 'name'.
``` sql
	SELECT id, name from Actor WHERE id = "002"
```
### Exercício 04
```sql
	SELECT * FROM Actor
	WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
```

**A-**
Retorna todas as linhas da tabela Actor que respeitem as seguintes condições: nome precisa começar com "A" ou "J", e o salário precisa ser maior que 300000.

**B-**
```sql
	SELECT * FROM Actor
	WHERE (name NOT LIKE "A%") AND salary > 350000;
```

**C-**
```sql
	SELECT * FROM Actor
	WHERE (name LIKE "%G%" OR name LIKE "%g%");
```
**D-**
```sql
	SELECT * FROM Actor
	WHERE 
		(name LIKE "%a%" OR name LIKE "%A%" 
		OR name LIKE "%G%" 						
		OR 	name LIKE "%g%") AND
		salary BETWEEN 350000 AND 900000;
```

### Exercício 05

**A-**

```sql
	CREATE TABLE Movies (
	    id VARCHAR(255) PRIMARY KEY,
	    name VARCHAR (255) NOT NULL,
	    synopsis TEXT NOT NULL,
	    release_date_of DATE NOT NULL,
	    assessment TINYINT NOT NULL
	);
```

**B-**

```sql
	INSERT INTO Movies (id, name, synopsis, release_date_of, assessment)
		VALUES(
			"001",
	        "Se eu fosse Você",
	        "Cláudio e Helena são casados há muitos anos e enfrentam a rotina 
	        do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
	        "2006-01-06",
	        7
		);
```

**C-**

```sql
	INSERT INTO Movies (id, name, synopsis, release_date_of, assessment)
		VALUES(
			"002",
	        "Doce de mãe",
	        "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. 
	        A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, 
	        empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais 
	        morar com ela.",
	        "2012-12-27",
	        10
		);
```

**D-**

```sql
	INSERT INTO Movies (id, name, synopsis, release_date_of, assessment)
		VALUES(
			"003",
	        "Dona Flor e Seus Dois Maridos",
	        "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber 
	        de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
	        "2017-11-02",
	        8
		);
```

**E-**

```sql
	INSERT INTO Movies (id, name, synopsis, release_date_of, assessment)
		VALUES(
			"004",
	        "Minha mãe é uma peça",
	        "Dona Hermínia é uma mulher de meia idade, divorciada do marido, 
	        que a trocou por uma mais jovem. Hiperativa, ela não larga o pé de 
	        seus filhos Marcelina e Juliano, que já estão bem grandinhos. 
	        Um dia, após descobrir que eles a consideram uma chata, resolve 
	        sair de casa sem avisar ninguém, deixando todos, de alguma forma, 
	        preocupados com o que teria acontecido. Mal sabem eles que a mãe foi visitar a querida 
	        tia Zélia para desabafar suas tristezas do presente e recordar os bons tempos do passado.",
	        "2013-06-21",
	        8
		);

```



