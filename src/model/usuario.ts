export type Usuario = {
    id: number
    nome: string
    login: string
    senha: string
    email: string
    dataAdmissao: Date
    dataTermino?: Date
}