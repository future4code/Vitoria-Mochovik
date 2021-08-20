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

