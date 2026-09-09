import { Link } from 'react-router'
import Funcionarios from './Funcionarios'
function ListaFuncionarios({ Funcionarios, aoExcluir }) {
 function confirmarExclusao(funcionarios) {
 const confirmacao = window.confirm(
 `Deseja realmente excluir o funcionario ${funcionarios.nome}?`
 )
 if (confirmacao) {
 aoExcluir(funcionarios.id)
 }
 }
 return (
 <main className="pagina-clientes">
 <h1>Lista de funcionarios</h1>
 <ul className="lista-clientes">
 {Funcionarios.map((funcionario) => (
 <li key={funcionario.id}>
 <strong>{funcionario.nome}</strong>
 <span>CNPJ: {funcionario.cnpj}</span>
 <span>E-mail: {funcionario.email}</span>
 <span>Telefone: {funcionario.telefone}</span>
 <div className="acoes-cliente">
<Link
to={`/funcionarios/editar/${funcionario.id}`}
className="botao-alterar">Alterar
</Link>
<button
type="button"
className="botao-excluir"
onClick={() => confirmarExclusao(funcionario)}>
Excluir
</button>
</div>
 </li>
 ))}
 </ul>
 <Link to="/funcionarios">Voltar para Gerenciamento de Funcionarios</Link>
 </main>
 )
}
export default ListaFuncionarios
