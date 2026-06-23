export default interface Livro{
    id?: number;
    nome?: string;
    autor?: string;
    estaDisponivel?: boolean;
    qtdEmprestimos?: number;
    criadoEm?: Date
}