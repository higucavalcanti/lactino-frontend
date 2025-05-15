import { useState } from "react";
import ModalCompra from "../../features/GestãoCompras/ModalCompras/ModalCompras";
import Campo from "../../components/Campo";
import Botao from "../../components/Botao";
import "../GestaoCompras/GestaoCompras.css";
import { Compra } from "../../types/compras";
import ModalRelatorio from "../../features/GestãoCompras/ModalRelatorio/ModalRelatorio";
import ModalFornecedor from "../../features/GestãoCompras/ModalFornecedor/ModalFornecedor";

export default function GestaoCompras() {
  const [modalAberto, setModalAberto] = useState(false);
  const [compras, setCompras] = useState<Compra[]>([]);
  const [modalFornecedor, setModalFornecedor] = useState(false);
  const [modalRelatorio, setModalRelatorio] = useState<Compra | null>(null);
  
  const handleNovaCompra = (compra: any) => {
    setCompras([...compras, compra]);
  };

  return (
    <div className="compras">
      <header className="compras__header">
        <h1 className="compras__header-title">Compras</h1>
      </header>

      {/* Filtros (campos de busca) */}
      <section className="compras__filtros">
        <div className="compras__linha">
          <Campo type="text" placeholder="Fornecedor" />
          <Campo type="select" placeholder="Tipo de Insumo" />
          <Campo type="text" placeholder="Produto" />
        </div>
        <div className="compras__linha">
          <Campo type="date" placeholder="Período da Compra" />
          <Campo type="number" placeholder="Faixa de Valor" />
        </div>
      </section>

      {/* Tabela de compras */}
            <section className="compras__tabela">
        <div className="compras__tabela-cabecalho">
          <span>Fornecedor</span>
          <span>Produto</span>
          <span>Quantidade</span>
          <span>Data</span>
          <span>Valor</span>
          <span>Forma</span>
          <span>Validade</span>
          <span>Ações</span>
        </div>

        {compras.map((item, index) => (
          <div key={index} className="compras__tabela-linha">
            <span>{item.fornecedor}</span>
            <span>{item.produto}</span>
            <span>{item.quantidade}</span>
            <span>{item.dataCompra.toLocaleDateString()}</span>
            <span>R$ {item.valorTotal.toFixed(2)}</span>
            <span>{item.formaPagamento}</span>
            <span>{item.validadeProduto.toLocaleDateString()}</span>
            <button
              className="compras__ver-relatorio"
              onClick={() => setModalRelatorio(item)}
            >
              🔍 Ver Relatório
            </button>
          </div>
        ))}
      </section>

      <footer className="compras__footer">
          <Botao
            tipo="primary"
            label="Cadastrar Fornecedor"
            onClick={() => setModalFornecedor(true)}
          />
        <Botao 
          tipo="primary" 
          label="Registrar Compra" 
          onClick={() => setModalAberto(true)} 
        />
      </footer>

      {modalAberto && (
        <ModalCompra 
          onClose={() => setModalAberto(false)} 
          onSave={handleNovaCompra} 
        />
      )}

      {modalFornecedor && (
        <ModalFornecedor
          onClose={() => setModalFornecedor(false)}
          onSave={(novoFornecedor) => {
            setCompras(prev => {
              const ultima = prev[prev.length - 1];
              ultima.fornecedor = novoFornecedor;
              return [...prev.slice(0, -1), ultima];
            });
          }}
        />
      )}

      {modalRelatorio && (
        <ModalRelatorio compra={modalRelatorio} onClose={() => setModalRelatorio(null)} />
      )}
    </div>
  );
}