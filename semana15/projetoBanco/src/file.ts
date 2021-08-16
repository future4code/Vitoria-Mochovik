import { Client } from "./types";

export function openFile(): Client[] {
    let fs = require("fs")
    const file = JSON.parse(fs.readFileSync("./clients.txt").toString())
    if(file.clients) return file.clients
    else return []
}

export function saveFile(clients: Client[]) {
    let fs = require('fs')
    const file = {
        clients: clients
    }
    fs.writeFile("./clients.txt", JSON.stringify(file), (err: Error) => {
        if(err) throw new Error("Erro para salvar em clients.txt")
    })
}