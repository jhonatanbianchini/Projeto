import { Produto } from './Produto'

export class Categoria {
    public id: number
    public nome: string
    public tipo: string
    public presencial: boolean
    public produto: Produto
}