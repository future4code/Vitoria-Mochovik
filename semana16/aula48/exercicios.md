
# Exercícios Aula 48  :memo:  

### Exercício 01
```sql
	CREATE TABLE Rating ( 
		id VARCHAR(255) PRIMARY KEY, 
		comment TEXT NOT NULL, 
		rate FLOAT NOT NULL, 
		movie_id VARCHAR(255), 
		FOREIGN KEY (movie_id) REFERENCES Movies(id) )
```

**A-** 

É o tipo de relacionamento entre distintas tabelas de dados do banco de dados, no caso uma foreign key deve sempre se referenciar a uma primary key da outra tabela.

**B-**

```sql
	INSERT INTO Rating (id, comment, rate, movie_id)
		VALUES(
			"001",
			"Muito Bom!",
			8,
			"004"
		);
    
	INSERT INTO Rating (id, comment, rate, movie_id)
		VALUES(
			"002",
			"Bom, porém nem tanto",
			7,
			"001"
		);
    
	INSERT INTO Rating (id, comment, rate, movie_id)
		VALUES(
			"003",
			"Melhor filme que já assisti!",
			10,
			"002"
		);
```



**C-**
```sql
	INSERT INTO Rating (id, comment, rate, movie_id)
	VALUES(
		"004",
		"Muito Bom!",
		8,
		"008"
	);
```
**Error Code: 1452.** Cannot add or update a child row: a foreign key constraint fails (`molina-2136166-vitoria-mochovik`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))	0,230 sec.

**Significado:** Não é possivel adicionar a Foreign Key pois não existe uma Primary key correspondente.

**D-**
```sql
	ALTER TABLE Movies DROP COLUMN assessment;
```
**E-**
```sql
	DELETE FROM Movies WHERE id = "002";
```
**Error Code: 1451.**  Cannot delete or update a parent row: a foreign key constraint fails (`molina-2136166-vitoria-mochovik`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))	0,417 sec

**Significado:** Não é possivel deletar ou atualizar essa linha pois tem uma Foreigny referenciando a Primary Key.


### Exercício 02

```sql
	CREATE TABLE MovieCast ( 
		movie_id VARCHAR(255), 
		actor_id VARCHAR(255), 
		FOREIGN KEY (movie_id) REFERENCES Movies(id), 
		FOREIGN KEY (actor_id) REFERENCES Actor(id) 
	);
```

**A-**
	  Essa tabela relaciona a tabela Actor com Movies, por meio da Foreign Key.
  
**B-**
```sql
	INSERT INTO MovieCast(movie_id, actor_id)
	VALUES(
		"001",
	    "002"
	);

	INSERT INTO MovieCast(movie_id, actor_id)
	VALUES(
		"002",
	    "002"
	);

	INSERT INTO MovieCast(movie_id, actor_id)
	VALUES(
		"004",
		"003"
	);

	INSERT INTO MovieCast(movie_id, actor_id)
	VALUES(
		"004",
	    "003"
	);

	INSERT INTO MovieCast(movie_id, actor_id)
	VALUES(
		"001",
	    "004"
	);

	INSERT INTO MovieCast(movie_id, actor_id)
	VALUES(
		"002",
	    "004"
	);
```

**C-**
```sql
	INSERT INTO MovieCast(movie_id, actor_id)
	VALUES(
		"003",
	    "001"
	);
```
**Error Code: 1452** Cannot add or update a child row: a foreign key constraint fails (`molina-2136166-vitoria-mochovik`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))	0,307 sec

**Significado:** Não existe chave primária para referenciar a chave estrangeira.

**D-**
```sql
	DELETE FROM Actor WHERE id = "003";
```

**Error Code: 1451** Cannot delete or update a parent row: a foreign key constraint fails (`molina-2136166-vitoria-mochovik`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))	0,204 sec.

**Significado:** Não é possivel apagar ou atualizar a linha pai, pois tem uma relação com uma tabela.