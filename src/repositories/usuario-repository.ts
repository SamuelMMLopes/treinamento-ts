import { Usuario } from "../model/usuario";
import { usuarios } from "./data";
import moment from 'moment';

export class UsuarioRepository {
    
    carregarPeloLogin(login: string): Usuario {
        const usuario = usuarios.find(e => e.login === login)
        return {
            id: usuario?.id ?? 0,
            nome: usuario?.nome ?? '',
            email: usuario?.email ?? '',
            login: usuario?.login ?? '',
            senha: usuario?.senha ?? '',
            dataAdmissao: moment(usuario?.dataAdmissao).toDate(),
            dataTermino: usuario?.dataTermino ? moment(usuario?.dataTermino).toDate() : undefined
        }
    }

    adicionar(usuario: Omit<Usuario, 'id'>) {
        const id = usuarios.length + 1
        console.log(usuario.dataTermino)
        usuarios.push({
            id,
            nome: usuario.nome,
            email: usuario.email,
            login: usuario.login,
            senha: usuario.senha,
            dataAdmissao: moment(usuario.dataAdmissao).format('YYYY-MM-DD'),
            dataTermino: usuario.dataTermino ? moment(usuario.dataTermino).format('YYYY-MM-DD') : undefined,
        })
    }
}