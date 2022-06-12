import Router from "next/router";
import React, { useEffect, useState } from "react";

import { Container, Button, Row, Col, Table } from "react-bootstrap";
import Matriz from "../components/Matriz";
import style from "../styles/preparation.module.scss";

// type matriz = {
//   matriz: Array<Array<number>>;
// };
export default function Preparation() {
  const [matriz, setMatriz] = useState<Array<Array<number>>>([
    [1],
    [1],
    [1],
    [1],
    [1],
    [1],
    [1],
    [1],
    [1],
    [1],
  ]);
  const hidroaviao = [
    [0, 3, 3, 3, 0],
    [3, 3, 1, 3, 3],
    [3, 1, 3, 1, 3],
    [3, 3, 3, 3, 3],
  ];
  const submarino = [
    [3, 3, 3],
    [3, 1, 3],
    [3, 3, 3],
  ];
  const cruzadores = [
    [3, 3, 3],
    [3, 1, 3],
    [3, 1, 3],
    [3, 3, 3],
  ];
  const encouracados = [
    [3, 3, 3],
    [3, 1, 3],
    [3, 1, 3],
    [3, 1, 3],
    [3, 1, 3],
    [3, 3, 3],
  ];
  const portaAvioes = [
    [3, 3, 3],
    [3, 1, 3],
    [3, 1, 3],
    [3, 1, 3],
    [3, 1, 3],
    [3, 1, 3],
    [3, 3, 3],
  ];
  useEffect(() => {
    let matrizTemp: Array<Array<number>> = [[]];
    matrizTemp.push([3, 1, 3, 3, 1, 3, 1, 3, 1, 3]);
    matrizTemp.push([1, 3, 1, 3, 1, 3, 1, 3, 1, 3]);
    matrizTemp.push([3, 3, 3, 3, 3, 3, 3, 3, 3, 3]);
    matrizTemp.push([1, 3, 1, 3, 1, 3, 1, 3, 0, 0]);
    matrizTemp.push([1, 3, 1, 3, 1, 3, 3, 3, 0, 0]);
    matrizTemp.push([1, 3, 1, 3, 1, 3, 0, 3, 3, 3]);
    matrizTemp.push([1, 3, 1, 3, 1, 3, 0, 3, 1, 3]);
    matrizTemp.push([1, 3, 3, 3, 3, 3, 0, 3, 3, 3]);
    matrizTemp.push([3, 3, 3, 3, 3, 0, 0, 3, 3, 3]);
    matrizTemp.push([0, 0, 3, 1, 3, 0, 0, 3, 1, 3]);

    matrizTemp.shift();
    setMatriz(matrizTemp);
  }, []);

  function Quit() {
    Router.push("/");
  }
  return (
    <Container className={style.container}>
      <Row className={style.row}>
        <Col sm={13} md={6} className={style.col}>
          <h2>Nome do jogador</h2>
        </Col>

        <Col
          sm={12}
          md={6}
          className={style.col}
          style={{ marginLeft: "auto", width: "auto" }}
        >
          <Button onClick={Quit}>
            <a> Sair</a>
          </Button>
        </Col>
      </Row>
      <Matriz data={matriz} />
      <Row className={style.arsenal}>
        <Col sm={12} md={2} className={style.arma} style={{ width: "100%" }}>
          <Matriz data={hidroaviao} />
          <h3 style={{ marginTop: "2%" }}>Hidroavião</h3>
        </Col>
        <Col sm={12} md={2} className={style.arma} style={{ width: "100%" }}>
          <Matriz data={portaAvioes} />
          <h3 style={{ marginTop: "2%" }}>PortaAviões</h3>
        </Col>
        <Col sm={12} md={2} className={style.arma} style={{ width: "100%" }}>
          <Matriz data={encouracados} />
          <h3 style={{ marginTop: "2%" }}>Encouraçado</h3>
        </Col>
        <Col sm={12} md={2} className={style.arma} style={{ width: "100%" }}>
          <Matriz data={cruzadores} />
          <h3 style={{ marginTop: "2%" }}>Cruzador</h3>
        </Col>
        <Col sm={12} md={2} className={style.arma} style={{ width: "100%" }}>
          <Matriz data={submarino} />
          <h3 style={{ marginTop: "2%" }}>Submarino</h3>
        </Col>
      </Row>
    </Container>
  );
}
