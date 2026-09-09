import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
function EditarFuncionario({ funcionarios, aoAlterar }) {
 const { id } = useParams()
 const navigate= useNavigate()
 const funcionarioEncontrado = funcionarios.find(
 (funcionario) => funcionario.id === Number(id)
 )
 const [nome, setNome] = useState(funcionarioEncontrado?.nome ?? '')
 const [cnpj, setCnpj] = useState(funcionarioEncontrado?.cnpj ?? '')
 const [email, setEmail] = useState(funcionarioEncontrado?.email ??'')
 const [telefone, setTelefone] = useState(funcionarioEncontrado?.telefone ?? '')
 function alterarFuncionario(evento) {
 evento.preventDefault()
 const funcionarioAtualizado = {
 id: Number(id),
 nome,
 cnpj,
 telefone,
 email,
 }
 aoAlterar(funcionarioAtualizado)
 alert('Funcionario alterado com sucesso!')
 navigate('/funcionarios/listar')
 }
 if (!funcionarioEncontrado) {
 return (
 <main className="pagina-funcionarios">
 <h1>Funcionario não encontrado</h1>
 <Link to="/funcionarios/listar">
 Voltar para a lista de funcionarios
 </Link>

 </main>
 )
 }
 return (
 <main className="pagina-clientes">
 <h1>Alterar funcionario</h1>
 <form
 className="formulario-cliente"
 onSubmit={alterarFuncionario}
 >
 <label htmlFor="nome">Nome</label>
 <input
 id="nome"
 type="text"
 value={nome}
 onChange={(evento) => setNome(evento.target.value)}
 required
 />
 <label htmlFor="cnpj">CNPJ</label>
 <input
 id="cnpj"
 type="text"
 value={cnpj}
 onChange={(evento) => setCnpj(evento.target.value)}
 maxLength="11"
 required
 />
 <label htmlFor="email">E-mail</label>
 <input
 id="email"
 type="email"
 value={email}
 onChange={(evento) => setEmail(evento.target.value)}
 />
 <label htmlFor="telefone">Telefone</label>
 <input
 id="telefone"
 type="text"
 value={telefone}
 onChange={(evento) => setTelefone(evento.target.value)}
 />
 <button type="submit">
 Salvar alterações
 </button>
 </form>
 <Link to="/funcionarios/listar">
 Voltar para a lista de funcionarios
 </Link>
 </main>
  )
}
export default EditarFuncionario