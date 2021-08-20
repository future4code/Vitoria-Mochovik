
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
	WHERE id = "104"
```
Nenhum erro foi sinalizado, mas nada na tabela mudou visto que esse id não existe.