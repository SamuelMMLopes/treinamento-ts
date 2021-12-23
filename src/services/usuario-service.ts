import { Usuario } from "../model/usuario";
import { UsuarioRepository } from "../repositories/usuario-repository";

export class UsuarioService {
    constructor(private readonly usuarioRepository: UsuarioRepository) {}

    carregarPeloLogin(login: string): Usuario {
        return this.usuarioRepository.carregarPeloLogin(login)
    }

    adicionar(usuario: Omit<Usuario, 'id'>) {
        this.usuarioRepository.adicionar(usuario)
    }
}