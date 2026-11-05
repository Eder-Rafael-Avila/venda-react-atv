import './index.scss'

import { useState } from 'react';

export default function App() {

  const [tamanho, setTamanho] = useState('');
  const [quantidade, setQuantidade] = useState(0);
  const [temCupom, setTemCupom] = useState(false);
  const [cupom, setCupom] = useState('');
  const [resultado, setResultado] = useState('');

  function calcularValor() {
    let valorInicial;
    let preco;

    if (tamanho == 'peq') {
      valorInicial = 10;
    } else if (tamanho == 'med') {
      valorInicial = 15;
    } else if (tamanho == 'grnd') {
      valorInicial = 20;
    }

    preco = valorInicial * quantidade;

    if (cupom === 'CUPOM25DESCONTO') {
      return setResultado(preco * 0.25);
    }

    setResultado(preco);

  }

  return (
    <div className='page-app'>
      <header>
        <h1>Vendas com React</h1>
      </header>
      <main>
        <h2>Pamento por unidade</h2>

        <div className="form">
          <div className="campo radio">
            <label htmlFor="">Tamanho:</label>
            <ul className="selecao">
              <li><input type="radio" name="tamanho" value={'peq'} onChange={e => setTamanho(e.target.value)}  />Pequeno - R$10,00</li>

              <li><input type="radio" name="tamanho" value={'med'} onChange={e => setTamanho(e.target.value)} />Médio - R$15,00</li>

              <li><input type="radio" name="tamanho" value={'grnd'} onChange={e => setTamanho(e.target.value)} />Grande - R$20,00</li>
            </ul>
          </div>

          <div className="campo">
            <label htmlFor="">Quantidade:</label>

            <input type="number" value={quantidade} onChange={e => setQuantidade(e.target.value)} />
          </div>

          <div className="campo desconto">
            <label htmlFor="">Cupom de desconto:</label>

            <input type="checkbox" name="" id="" onChange={e => setTemCupom(e.target.checked)} />
          </div>

          <div className="campo">
            <label htmlFor="">Código do Cupom</label>

            <input type="text" value={cupom} onChange={e => setCupom(e.target.value)} disabled={temCupom == false} />
          </div>

          <div className="resultado">
            <button
              onClick={calcularValor}
            >Calcular valor</button>

            <div className="valor">
              <p>Resultado: {resultado}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}


