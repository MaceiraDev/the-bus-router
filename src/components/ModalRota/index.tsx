import Modal from 'react-modal'
import { FormEvent, useContext, useState } from 'react';
import { FormContainer } from './style';
import { Loader } from '../Loader';
import { RotaContext } from '../../contexts/rotaContext';


interface PropsModal {
  modalRVisibleR: boolean;
  fecharModalR: () => void;
}

export function ModalRota(props: PropsModal) {

  const { newRota } = useContext(RotaContext);

  const [transportadora, setTransportadora] = useState('')
  const [descricao, setDescricao] = useState('')
  const [localPartida, setPartida] = useState('')
  const [destino, setDestino] = useState('')
  const [saida, setSaida] = useState('')
  const [chegada, setChegada] = useState('')


  function limparCamposEFecharModal() {
    setTransportadora('')
    setDescricao('')
    setPartida('')
    setDestino('')
    setSaida('')
    setChegada('')
    props.fecharModalR()
  }

  function criarRota(event: FormEvent) {
    event.preventDefault()
    newRota({
      transportadora,
      descricao,
      localPartida,
      destino,
      saida,
      chegada,
      id: 0
    })

    limparCamposEFecharModal()

  }

  return (
    <Modal isOpen={props.modalRVisibleR}
      overlayClassName="react-modal-overlay"
      className="react-modal-content">
      <button
        type='button'
        className='react-modal-close'
        onClick={limparCamposEFecharModal}
      >
        X
      </button>

      <FormContainer onSubmit={criarRota}>
        <h2>Cadastrar Rota</h2>
        <input
          type="text"
          placeholder='Transportadora:'
          required
          value={transportadora}
          onChange={(event => setTransportadora(event.target.value))}
        />
        <textarea
          placeholder='Descrição:'
          required
          value={descricao}
          onChange={(event => setDescricao(event.target.value))}
        />
        <input
          type="text"
          placeholder='Local de Partida:'
          required
          value={localPartida}
          onChange={(event => setPartida(event.target.value))}
        />
        <input
          type="text"
          placeholder='Destino:'
          required
          value={destino}
          onChange={(event => setDestino(event.target.value))}
        />
        <input
          type="text"
          placeholder='Saída:'
          required
          value={saida}
          onChange={(event => setSaida(event.target.value))}
        />
        <input
          type="text"
          placeholder='Chegada:'
          required
          value={chegada}
          onChange={(event => setChegada(event.target.value))}
        />
        <Loader visible={false} />
        <button type='submit'>
          Cadastrar
        </button>
      </FormContainer>

    </Modal>
  )

}