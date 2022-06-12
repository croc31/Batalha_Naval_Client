import React from "react";

import { Row, Col, Table } from "react-bootstrap";
import style from "./styles.module.scss";

type matriz = {
  data: Array<Array<number>>;
};
export default function Matriz(matriz: matriz) {
  console.log(matriz.data);

  return (
    <Row className={style.row}>
      <Col style={{ width: "100%" }} className={style.col}>
        <Table
          style={{ width: "60%", margin: "auto" }}
          bordered
          hover
          variant="light"
        >
          <tbody className={style.tbody}>
            {matriz.data.map((linha, i) => (
              <tr key={i} className={style.tr}>
                {linha.map((celula, j) => (
                  <td
                    key={j}
                    className={
                      celula == 1
                        ? style.tdRed
                        : celula == 2
                        ? style.tdBlue
                        : celula == 3
                        ? style.tdYellow
                        : style.tdwhite
                    }
                  ></td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}
