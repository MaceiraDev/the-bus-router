import Modal from 'react-modal'
import { FormEvent, useContext, useState } from 'react';
import { FormContainer } from './style';
import { Loader } from '../Loader';
import { UsuarioContext } from '../../contexts/usuarioContext';


interface PropsModal {
  modalVisibleU: boolean;
  fecharModalU: () => void;
}

export function ModalUsuario(props: PropsModal) {

  const { createUsuario } = useContext(UsuarioContext)

  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState('')
  const [endereco, setEndereco] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [login, setLogin] = useState('')
  const [senha, setSenha] = useState('')


  function limparCamposEFecharModal() {
    setNome('')
    setCpf('')
    setEndereco('')
    setEmail('')
    setTelefone('')
    setLogin('')
    setSenha('')
    props.fecharModalU()
  }

  function criarUsuario(event: FormEvent) {
    event.preventDefault()

    createUsuario({
      nome,
      cpf,
      endereco,
      email,
      telefone,
      login,
      senha,
      id: 0
    })

    limparCamposEFecharModal()

  }

  return (
    <Modal isOpen={props.modalVisibleU}
      overlayClassName="react-modal-overlay"
      className="react-modal-content">
      <button
        type='button'
        className='react-modal-close'
        onClick={limparCamposEFecharModal}
      >
        X
      </button>

      <FormContainer onSubmit={criarUsuario}>
        <h2>Cadastrar Usuário</h2>
        <input
          type="text"
          placeholder='Nome:'
          required
          value={nome}
          onChange={(event => setNome(event.target.value))}
        />
        <input
          type="text"
          placeholder='CPF:'
          required
          value={cpf}
          onChange={(event => setCpf(event.target.value))}
        />
        <input
          type="text"
          placeholder='Endereço:'
          required
          value={endereco}
          onChange={(event => setEndereco(event.target.value))}
        />
        <input
          type="email"
          placeholder='E-mail:'
          required
          value={email}
          onChange={(event => setEmail(event.target.value))}
        />
        <input
          type="text"
          placeholder='Telefone:'
          required
          value={telefone}
          onChange={(event => setTelefone(event.target.value))}
        />
        <input
          type="text"
          placeholder='Login:'
          required
          value={login}
          onChange={(event => setLogin(event.target.value))}
        />
        <input
          type="password"
          placeholder='Senha:'
          required
          value={senha}
          onChange={(event => setSenha(event.target.value))}
        />
        <Loader visible={false} />
        <button type='submit'>
          Cadastrar
        </button>
      </FormContainer>

    </Modal>
  )

}