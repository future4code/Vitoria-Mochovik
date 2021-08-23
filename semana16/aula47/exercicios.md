# Exercícios Aula 47  :memo:  

### Exercício 01

**A-** 

O "raw" nos devolve um array de objetos, no qual nos interessa apenas as informações contidas na posição 0 desse array (o restante são informações do próprio banco).

**B-**

```ts
	app.get("/actors/:name", async( req: Request, res: Response) => {
	try {
		const result = await connection.raw(`SELECT * FROM Actor 
		WHERE name LIKE "${req.params.name}"`)
		const actor = result[0]
		res.end()
	} catch (error) {
		res.status(500).send(error.message)
	}
})
```



**C-**
```ts
	app.get("/actors/search/:gender", async(req: Request, res: Response) => {
		try {
			const result = await connection.raw(`
				SELECT COUNT(*) FROM Actor 
				WHERE gender LIKE "${req.params.gender}"
			`)
			
			const count = result[0]
			res.end()
		} catch (error) {
			res.status(500).send(error.message)
		}
	})
```
