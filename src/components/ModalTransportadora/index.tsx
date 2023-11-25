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

    limparCamposEFecharModal()

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
          onChange={(event => setNome(event.target.value))}
        />
        <input
          type="text"
          placeholder='Endereço:'
          required
          value={endereco}
          onChange={(event => setEndereco(event.target.value))}

        />
        <input
          type="text"
          placeholder='Telefone'
          required
          value={telefone}
          onChange={(event => setTelefone(event.target.value))}
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
          placeholder='sitio:'
          required
          value={sitio}
          onChange={(event => setSitio(event.target.value))}
        />
        <button type='submit'>
          Cadastrar
        </button>
      </FormContainer>

    </Modal>
  )

}