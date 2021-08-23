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

### Exercício 02

**A-**
```ts
	app.put("/actors/change/:id", async(req: Request, res: Response) => {
		try {
			await connection("Actor")
			.update({
				salary: Number(req.body.salary)
			})
			.where("id", req.params.id)
			
			res.status(200).send("Actor updated successfully!")
				
		} catch (error) {
				res.status(500).send(error.message)
		}
})
```

  
**B-**
```ts
	app.delete("/actors/:id", async(req: Request, res: Response) => {
		try {
			await connection("Actor")
			.delete()
			.where("id", req.params.id)
			
			res.end()
		} catch (error) {
			res.status(500).send(error.message)
		}

})
```

**C-**
```ts
	app.get("/actors/avg/:gender", async(req: Request, res: Response) => {
		try {
			const result = await connection("Actor")
				.avg("Salary as average")
				.where("gender", req.params.gender)
			
			const avg = result[0].average
			res.status(200).send(avg)
			
		} catch (error) {
			res.status(500).send(error.message)
		}

})
```

### Exercício 03

**A-**
```ts
	app.get("/actor/:id", async(req: Request, res: Response) => {
	try {
		const result = await connection("Actor")
		.where("id", req.params.id)	

		const actor = result[0]
		res.status(200).send(actor)
	} catch (error) {
		res.status(400).send({ message: error.message })
	}
	
})
```

**B-**
```ts
	app.get("/actor?gender=", async(req: Request, res: Response) => {
	try {
		const gender = req.query.gender as string
		const result = await connection("Actor")
		.count()
		.where("gender", gender)
		
		res.status(200).send({
			quantity: result,
		})
		
	} catch (error) {
		res.status(400).send({
			message: error.message
		})
	}
})
```

### Exercício 04

**A-**
```ts
	app.put("/actor", async(req: Request, res: Response) => {
		try {
			await connection("Actor")
				.update({
					salary: req.body.salary
				})
				.where("id", req.body.id)
			res.status(200).send("Actor updated successfully!")
		} catch (error) {
			res.status(500).send({
				message: error.message
			})
		}
	})
```

**B-**
```ts
	app.delete("/actor/:id", async(req: Request, res: Response) => {
	try {
		await connection("Actor")
			.delete()
			.where("id", req.params.id)
		res.end()
	} catch (error) {
		res.status(500).send({
			message: error.message
		})
	}
})
```

### Exercício 05

```ts
	app.post("/movie/create", async(req: Request, res: Response) => {
	try {
		await connection("Movies")
			.insert({
				id: Number(req.body.id,)
				name: req.body.name,
				synopsis: req.body.synopsis,
				release_date_of: req.body.releaseDateOf,
				assessment: req.body.assessment,
				playying_limit_date: req.body.playingLimitDate
			})
		res.status(200).send({
			message: "Success"
		})
	} catch (error) {
		res.status(400).send({ message: error.message, })
	}
	
})
```


### Exercício 06


```ts
	app.get("/movie/all", async(req: Request, res: Response) => {
	try {
		const result = await connection.raw(`
			SELECT * FROM Movies LIMIT 15
		`)
		const movies = result[0]
		res.status(200).send({
			movies: movies
		})
		
	} catch (error) {
		res.status(400).send({ message: error.message, })
	}
	
})
```
