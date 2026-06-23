import { useEffect, useState } from "react";
import api from "../../../services/api";
import Livro from "../../../models/Livro";
import { Link } from "react-router-dom";

function ListarServicos() {
    const [livros, setLivros] = useState<Livro[]>([]);

    useEffect(() => {
        carregarLivroAPI();
    }, [])

    async function carregarLivroAPI(){
        try {
            const resposta = await api.get<Livro[]>("/api/livro/listar");
            setLivros(resposta.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function emprestarLivro(id : string){
        try {
            const resposta = await api.put(`/api/livro/emprestar/${id}`);
            carregarLivroAPI();
        } catch(error) {
            console.log(error);
        }
    }

    async function devolverLivro(id : string){
        try {
            const resposta = await api.put(`/api/livro/devolver/${id}`);
            carregarLivroAPI();
        } catch(error) {
            console.log(error);
        }
    }
    
    return (
        <div className="ListarServicos">
            <h1>Listar Serviços</h1>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Autor</th>
                        <th>Disposição</th>
                        <th>Quantidade de Empréstimos</th>
                        <th>Emprestar</th>
                        <th>Devolver</th>
                    </tr>
                </thead>
                <tbody>
                    {livros.map((livro : Livro) => (
                        <tr key={livro.id}>
                            <td>{livro.id}</td>
                            <td>{livro.nome}</td>
                            <td>{livro.autor}</td>
                            <td>{livro.estaDisponivel ? "Disponível" : "Indisponível"}</td>
                            <td>{livro.qtdEmprestimos}</td>
                            <td>
                                <button>
                                    Deletar
                                </button>
                            </td>
                            <td>
                                <button>
                                    Deletar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListarServicos;