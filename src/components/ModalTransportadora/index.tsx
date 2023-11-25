import Modal from 'react-modal'
import { FormEvent, useContext, useState } from 'react';
import { TransportadoraContext } from '../../contexts/transportadoraContext'
import { FormContainer } from './style';


interface PropsModal {
  modalVisible: boolean;
  fecharModal: () => void;
}

export function ModalTransportadora(props: PropsModal) {

  const { createTransportadora } = useContext(TransportadoraContext)


  const [nome, setNome] = useState('')
  const [endereco, setEndereco] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [sitio, setSitio] = useState('')

  function limparCamposEFecharModal() {
    setNome('')
    setEmail('')
    setEndereco('')
    setTelefone('')
    setSitio('')
    props.fecharModal()
  }

  function criarTransportadora(event: FormEvent) {
    event.preventDefault()

    createTransportadora({
      nome,
      endereco,
      telefone,
      email,
      sitio,
      id: 0
    })

  }

  return (
    <Modal isOpen={props.modalVisible}
      overlayClassName="react-modal-overlay"
      className="react-modal-content">
      <button
        type='button'
        className='react-modal-close'
        onClick={limparCamposEFecharModal}
      >
        X
      </button>

      <FormContainer onSubmit={criarTransportadora}>
        <h2>Cadastrar Tarefa</h2>
        <input
          type="text"
          placeholder='Nome:'
          required
          value={nome}
        />
        <input
          type="text"
          placeholder='Endereço:'
          required
          value={endereco}
        />
        <input
          type="text"
          placeholder='Telefone'
          required
          value={telefone}
        />
        <input
          type="email"
          placeholder='E-mail:'
          required
          value={email}
        />
        <select value={sitio}>
          <option value="Sim">Sim</option>
          <option value="Não">Não</option>
        </select>
        <button type='submit'>
          Cadastrar
        </button>
      </FormContainer>

    </Modal>
  )

}