import { Usuario } from "../model/usuario";
import { UsuarioService } from "../services/usuario-service";

export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) {}

    adicionar(usuario: Omit<Usuario, 'id'>): boolean {
        try {
            this.usuarioService.adicionar(usuario)
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }

    carregarPeloLogin(login: string): Usuario | undefined {
        try {
            return this.usuarioService.carregarPeloLogin(login)
        } catch (error) {
            console.log(error)
            return
        }
    }
}