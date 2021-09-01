
# Exercícios Aula 46  :memo:  

### Exercício 01

**A-** 

```sql
	ALTER TABLE Actor DROP COLUMN salary;
```
Deleta a coluna salary da tabela Actor.

**B-**

```sql
	ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```
Altera nomenclatura da coluna "gender" para "sex" (da tebela Actor) e também sua propriedade (definição) que muda para no máximo 06 caracteres.


**C-**
```sql
	ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```
Altera a propriedade/definição da coluna "gender" na tabela para um valor máximo de 255 caracteres.

**D-**
```sql
	ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```


### Exercício 02

``` sql
	SET SQL_SAFE_UPDATES = 0;
```

**A-**
``` sql
	UPDATE Actor
	SET birth_date = "1754-05-01",name = "Joaquina da Rosa"
	WHERE id = "003";
```
  
**B-**
``` sql
	UPDATE Actor
	SET name = "JULIANA PAES"
	WHERE name = "Juliana Paes";
```

``` sql
	UPDATE Actor
	SET name = "Juliana Paes"
	WHERE name = "JULIANA PAES";
```


**C-**
```sql
	UPDATE Actor
	SET name = "Thais Marquesa",
			salary = 1500,
			birth_date = "1997-07-07",
			gender = "female"
			WHERE id = "005";
```


**D-**
```sql
	UPDATE Actor
	SET name = "Juliana"
	WHERE id = "104";
```
Nenhum erro foi sinalizado, mas nada na tabela mudou visto que esse id não existe.


### Exercício 03

**A-**
``` sql
	DELETE FROM Actor WHERE name = "Tony Ramos";
```

**B-**
``` sql
	DELETE FROM Actor 
	WHERE
		gender = "male" AND
	    salary > 1000000;
```

### Exercício 04

**A-**
``` sql
	SELECT MAX(salary) FROM Actor;
```

**B-**
```sql
	SELECT MIN(salary) FROM Actor WHERE gender = "female";
```

**C-**
```sql
	SELECT COUNT(*) FROM Actor WHERE gender = "female";
```
**D-**
```sql
	SELECT SUM(salary) FROM Actor;
```

### Exercício 05

**A-**

```sql
	SELECT COUNT(*), gender FROM Actor GROUP BY gender
```
Contou a quantidade por genero.

**B-**

```sql
	SELECT id, name FROM Actor 
	ORDER BY name DESC;
```

**C-**

```sql
	SELECT * FROM Actor 
	ORDER BY salary;
```

**D-**

```sql
	SELECT * FROM Actor
	ORDER BY salary DESC
	LIMIT 3;
```

**E-**

```sql
	SELECT AVG(salary), gender FROM Actor 
	GROUP BY gender;
```


### Exercício 06

**A-**

```sql
	ALTER TABLE Movies ADD playying_limit_date DATE;
```

**B-**

```sql
	ALTER TABLE Movies CHANGE assessment assessment FLOAT;
```

**C-**

Já saiu de cartaz :arrow_down:
```sql
	UPDATE Movies 
	SET 
		playying_limit_date = "2020-12-31"
	WHERE id = "001";
```
Ainda está em cartaz :arrow_down:
```sql
	UPDATE Movies
	SET
		playying_limit_date = "2021-08-25"
	WHERE id = "002";
```

**D-**
```sql
	DELETE FROM Movies WHERE id = "003";
```
```sql
	UPDATE Movies
	SET 
		synopsis = "Dona flor tinha 6 maridos"
	WHERE id = "003";
```

Nada aconteceu, nem deu erro, apenas nada mudou, visto que ele não encontrou o id que procurava.

### Exercício 07

**A-**

```sql
	SELECT COUNT(*) FROM Movies WHERE assessment > 7.5; 
```
**Resposta:** 02

**B-**

```sql
	SELECT AVG(assessment) FROM Movies;
```
**Resposta:** 8.33

**C-**

```sql
	SELECT COUNT(*) FROM Movies 
	WHERE playying_limit_date > current_date();
```
**Resposta:** 01

**D-**

```sql
	SELECT COUNT(*) FROM Movies 
	WHERE release_date_of > current_date();
```
**Resposta:** 00

**E-**

```sql
	SELECT MAX(assessment) FROM Movies;
```
**Resposta:** 10

**F-**

```sql
	SELECT MIN(assessment) FROM Movies;
```
**Resposta:** 07

### Exercício 08

**A-**

```sql
	SELECT * FROM Movies ORDER BY name;
```

**B-**

```sql
	SELECT * FROM Movies ORDER BY name LIMIT 5;
```

**C-**

```sql
	SELECT * FROM Movies 
	WHERE release_date_of < curdate()
	ORDER BY release_date_of DESC
	LIMIT 3;
```


**D-**

```sql
	SELECT * FROM Movies
	ORDER BY assessment DESC
	LIMIT 3; 
```

