import Express, { json, Request, Response } from 'express'
import { usuarioFactory } from './factory'

const app = Express()
app.use(json())

app.get('/usuarios/:login', (req: Request, res: Response) => {
    const { login } =  req.params
    const usuarioControler = usuarioFactory()
    const usuario = usuarioControler.carregarPeloLogin(login)
    if(usuario?.id === 0) {
        return res.status(204).send()
    }
    return res.json(usuario)
})


app.post('/usuarios', (req: Request, res: Response) => {
    const usuario = req.body
    const usuarioControler = usuarioFactory()

    usuarioControler.adicionar(usuario)

    return res.status(201).send()
})


export default app