import Modal from 'react-modal'
import { FormEvent, useContext, useState } from 'react';
import { TransportadoraContext } from '../../contexts/transportadoraContext'
import { FormContainer } from './style';


interface PropsModal {
  modalVisibleT: boolean;
  fecharModalT: () => void;
}

export function ModalTransportadora(props: PropsModal) {

  const { createTransportadora, editarTransportadora } = useContext(TransportadoraContext)

  const [nome, setNome] = useState('')
  const [endereco, setEndereco] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [sitio, setSitio] = useState('')
<<<<<<< HEAD
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    if (editarTransportadora.editar) {

      setNome(editarTransportadora.transportadora?.nome ? editarTransportadora.transportadora.nome : '')
      setEmail(editarTransportadora.transportadora?.email ? editarTransportadora.transportadora.email : '')
      setEndereco(editarTransportadora.transportadora?.endereco ? editarTransportadora.transportadora.endereco : '')
      setTelefone(editarTransportadora.transportadora?.telefone ? editarTransportadora.transportadora.telefone : '')
      setSitio(editarTransportadora.transportadora?.sitio ? editarTransportadora.transportadora.sitio : '')

    }
    console.log('Todos')

  }, [editarTransportadora.editar])
=======

>>>>>>> a361f10cf7ed7ae4b5cd9e4a26810bb39415954c

  function limparCamposEFecharModal() {
    setNome('')
    setEmail('')
    setEndereco('')
    setTelefone('')
    setSitio('')
    props.fecharModalT()
  }

  function criarTransportadora(event: FormEvent) {
    event.preventDefault()

<<<<<<< HEAD

    if (editarTransportadora.editar && editarTransportadora.transportadora) {
      let objTransportadora = {
        ...editarTransportadora.transportadora,
        nome,
        endereco,
        telefone,
        email,
        sitio,
      }
      updateTransportadora(objTransportadora)

    } else {
      setLoading(true)
=======
      // if (editarTransportadora.editar && editarTransportadora.transportadora) {
      //   let objTransportadora = {
      //     ...editarTransportadora.transportadora,
      //     nome,
      //     endereco,
      //     telefone,
      //     email,
      //     sitio,
      //   }
      //   editarTransportadora(objTransportadora)
      // } else {
>>>>>>> a361f10cf7ed7ae4b5cd9e4a26810bb39415954c
      createTransportadora({
        nome,
        endereco,
        telefone,
        email,
        sitio,
        id: 0,

      })
<<<<<<< HEAD
      setLoading(false)
    }


=======
    //}
>>>>>>> a361f10cf7ed7ae4b5cd9e4a26810bb39415954c

    limparCamposEFecharModal()

  }

  return (
    <Modal isOpen={props.modalVisibleT}
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
        <h2>Cadastrar Transportadora</h2>
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
          placeholder='Sítio:'
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