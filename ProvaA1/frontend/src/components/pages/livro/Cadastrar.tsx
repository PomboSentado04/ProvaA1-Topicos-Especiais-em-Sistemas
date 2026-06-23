import { useState } from "react";
import Livro from "../../../models/Livro";
import api from "../../../services/api";

function CadastrarLivro() {
    const [nome, setNome] = useState("");
    const [autor, setAutor] = useState("");

    async function enviarLivroAPI(e : any){
        e.preventDefault();
        
        try {
            const livro : Livro = {
                nome: nome,
                autor: autor
            };

           const resposta = await api.post("/api/livro/cadastrar", livro);

            setNome("");
            setAutor("");

            console.log(resposta.data);
            alert("Livro cadastrado com sucesso.");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="CadastrarServico">
            <h1>Cadastrar Serviço</h1>
            <form onSubmit={enviarLivroAPI}>
                <div>
                    <label>Nome: </label>
                    <input value={nome} required type="text" onChange={
                        (e : any) => {setNome(e.target.value)}
                    }/>
                </div>
                <div>
                    <label>Autor:</label>
                    <input value={autor} required type="text" onChange={
                        (e : any) => {setAutor(e.target.value)}
                    }/>
                </div>
                <div>
                    <button type="submit">
                        Cadastrar
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CadastrarLivro;