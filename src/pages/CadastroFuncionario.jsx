import { useState } from 'react'
import { Link } from 'react-router'
function CadastroFuncionario({ aoCadastrar }) {
 const [nome, setNome] = useState('')
const [cnpj, setCnpj] = useState('')
 const [email, setEmail] = useState('')
 const [telefone, setTelefone] = useState('')
 function cadastrarFuncionario(evento) {
 evento.preventDefault()
 const novoFuncionario = {
 nome,
 cnpj,
 email,
 telefone
 }
 aoCadastrar(novoFuncionario)
setNome('')
setCnpj('')
setEmail('')
setTelefone('')
alert('Funcionario cadastrado com sucesso!')
 }
 return (
 <main className="pagina-clientes">
    <h1>Cadastrar novo funcionario</h1>
 <form className="formulario-cliente"
onSubmit={cadastrarFuncionario}>
 <label htmlFor="nome">Nome</label>
 <input
 id="nome"
 type="text"
 value={nome}
 onChange={(evento) =>
setNome(evento.target.value)}
 required
 />
 <label htmlFor="cnpj">CNPJ</label>
 <input
 id="cnpj"
 type="text"
 value={cnpj}
 onChange={(evento) =>
setCnpj(evento.target.value)}
 maxLength="11"
 required
 />
 <label htmlFor="email">E-mail</label>
 <input
 id="email"
 type="email"
 value={email}
 onChange={(evento) =>
setEmail(evento.target.value)}
 />
 <label htmlFor="telefone">Telefone</label>
 <input
 id="telefone"
 type="text"
 value={telefone}
 onChange={(evento) =>
setTelefone(evento.target.value)}
 />
 <button type="submit">Cadastrar funcionario</button>
 </form>
 <Link to="/funcionarios">Voltar para Gerenciamento de Funcionarios</Link>
</main>
 )
}
export default CadastroFuncionario