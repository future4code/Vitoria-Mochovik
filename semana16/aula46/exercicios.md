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
