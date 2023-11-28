import Modal from 'react-modal'
import { FormEvent, useContext, useState } from 'react';
import { FormContainer } from './style';
import { VeiculoContext } from '../../contexts/veiculoContext';


interface PropsModal {
  modalVisibleV: boolean;
  fecharModalV: () => void;
}

export function ModalVeiculo(props: PropsModal) {

  const { createVeiculo } = useContext(VeiculoContext)

  const [rota, setRota] = useState('')
  const [descricao, setDescricao] = useState('')
  const [placa, setPlaca] = useState('')
  const [assento, setAssento] = useState('')


  function limparCamposEFecharModal() {
    setRota('')
    setDescricao('')
    setPlaca('')
    setAssento('')
    props.fecharModalV()
  }

  function criarVeiculo(event: FormEvent) {
    event.preventDefault()

    createVeiculo({
      rota,
      descricao,
      placa,
      assento,
      id: 0
    })

    limparCamposEFecharModal()

  }

  return (
    <Modal isOpen={props.modalVisibleV}
      overlayClassName="react-modal-overlay"
      className="react-modal-content">
      <button
        type='button'
        className='react-modal-close'
        onClick={limparCamposEFecharModal}
      >
        X
      </button>

      <FormContainer onSubmit={criarVeiculo}>
        <h2>Cadastrar Veículo</h2>
        <input
          type="text"
          placeholder='Rota'
          required
          value={rota}
          onChange={(event => setRota(event.target.value))}
        />
        <textarea
          placeholder='Descrição:'
          required
          value={descricao}
          onChange={(event => setDescricao(event.target.value))}
        ></textarea>
        <input
          type="text"
          placeholder='Placa:'
          required
          value={placa}
          onChange={(event => setPlaca(event.target.value))}
        />

        <input
          type="number"
          placeholder='Assentos:'
          required
          value={assento}
          onChange={(event => setAssento(event.target.value))}
        />
<<<<<<< HEAD
F        <button type='submit'>
=======
        <button type='submit'>
>>>>>>> a361f10cf7ed7ae4b5cd9e4a26810bb39415954c
          Cadastrar
        </button>
      </FormContainer>

    </Modal>
  )

}