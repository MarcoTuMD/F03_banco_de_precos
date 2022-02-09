import { truncStr } from "./Utils";
import React, { useState, useEffect, Component } from "react";

import { search } from "./Utils";
import { forwardRef } from "react";
import MaterialTable from "material-table";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Search from "@material-ui/icons/Search";
import SaveAlt from "@material-ui/icons/SaveAlt";
import ViewColumn from "@material-ui/icons/ViewColumn";
import Equalizer from "@material-ui/icons/Equalizer";
import { Button, Modal, ModalFooter, ModalHeader, ModalBody } from "reactstrap";
import Charts from "./Charts";
import "./Charts.css";

const Retornoapi = (props) => {
  const tableIcons = {
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),

    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
  };

  let columns = [];
  let action = "";

  if (props.agrupamento) {
    if (props.desc) {
      columns.push({ title: "Descrição", field: "original", align: "center" });
    }

    if (props.ano) {
      columns.push({ title: "Ano", field: "ano", align: "center" });
    }
    if (props.unidade) {
      columns.push({
        title: "Unidade",
        field: "dsc_unidade_medida",
        align: "center",
      });
    }

    columns.push({ title: "Preço médio", field: "mean", align: "center" });
    columns.push({ title: "Preço máximo", field: "max", align: "center" });
    columns.push({ title: "Preço mínimo", field: "min", align: "center" });
    columns.push({
      title: "Quantidade total",
      field: "count",
      align: "center",
    });
  } else {
    columns = [
      {
        title: "Descrição",
        field: "original",
        align: "justify",
      },
      { title: "Data", field: "data", align: "center" }, //, width: '100%'
      { title: "Und Medida", field: "dsc_unidade_medida", align: "center" },
      { title: "Grupo", field: "grupo", align: "center" },
      { title: "Orgão", field: "orgao", align: "center" },
      { title: "Qtd Item", field: "qtde_item", align: "center" },
      { title: "Modalidade", field: "modalidade", align: "center" },
      { title: "Preço", field: "preco", align: "center" },
      { title: "Tipo Licitação", field: "tipo_licitacao", align: "center" },
      { title: "Município", field: "municipio", align: "center" },
      { title: "Nome Vencedor", field: "nome_vencedor", align: "center" },
    ];
  }

  // Modal open state
  const [modal, setModal] = React.useState(false);

  // Toggle for Modal
  const toggle = () => setModal(!modal);

  const [state, setstate] = useState({ data: "", loading: false });

  const changeState = (dadosTab) => {
    setstate({
      data: dadosTab,
      loading: false,
    });
  };

  const alertMyRow = (selectedRow) => {
    changeState(selectedRow);

    toggle();
  };

  return (
    <div>
      <div className="modalCharts">
        <Modal
          isOpen={modal}
          toggle={toggle}
          modalTransition={{ timeout: 2000 }}
          className="custom-modal-style"
        >
          <ModalHeader
            toggle={this.toggle}
            cssModule={{ "modal-title": "w-100 text-center" }}
          >
            <h1>Detalhamento</h1>
          </ModalHeader>
          <ModalBody>
            <Charts data={state.data} />
          </ModalBody>
        </Modal>
      </div>

      <MaterialTable
        icons={tableIcons}
        columns={columns}
        data={props.dadosTabela}
        actions={[
          {
            icon: () => <Equalizer />,
            tooltip: "Detalhes",
            onClick: (evt, selectedRow) => alertMyRow(selectedRow),
          },
        ]}
        options={{
          actionsCellStyle: {
            backgroundColor: "#f2f2f2",
            color: "#000000",
            justifyContent: "center", // border: "3px solid black",
          },
          cellStyle: {
            maxWidth: "100%",
          },
          headerStyle: {
            maxWidth: "100%",
          },
          grouping: true,
          groupTitle: "Teste",

          exportButton: true,
          exportFileName: "Banco de Preço",

          rowStyle: (x) => {
            if (x.tableData.id % 2) {
              return {
                backgroundColor: "#f2f2f2",
              };
            }
          },
          headerStyle: {
            backgroundColor: "#378FC3",
            color: "#FFF",
            fontSize: "17px",
            textAlign: "center",
            fontWeight: "bold",
          },
        }}
        localization={{
          header: {
            actions: "Detalhamento",
          },

          toolbar: {
            exportCSVName: "Exportar para CSV",
            exportPDFName: "Exportar para PDF",
            searchPlaceholder: "Pesquisar na tabela",
          },
          body: {
            emptyDataSourceMessage: (
              <h3
                style={{
                  textAlign: "center",
                }}
              >
                Sem dados para apresentar
              </h3>
            ),
          },
          grouping: {
            placeholder: "Arraste uma coluna para ser agrupada",
            groupedBy: "Agrupado por:",
          },

          pagination: {
            labelRowsSelect: "linhas",
            labelDisplayedRows: "{count} de {from}-{to}",
            firstTooltip: "Primeira página",
            previousTooltip: "Página anterior",
            nextTooltip: "Próxima página",
            lastTooltip: "Última página",
          },
        }}
        title=""
      />
    </div>
  );
};

export default Retornoapi;
