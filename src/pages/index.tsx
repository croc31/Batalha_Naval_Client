import Router from "next/router";
import React, { useState } from "react";
import Preparation from "./preparation";

import { Container, Button } from "react-bootstrap";
import style from "../styles/lobby.module.scss";

export default function Lobby() {
  function handleSubmit() {
    console.log("preparação");

    Router.push("/preparation", undefined, { shallow: true });
  }
  return (
    <Container className={style.container}>
      <h1>Novo Jogo</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Jogador 1" />
        <Button type="submit" value="Submit">
          Enviar
        </Button>
      </form>
    </Container>
  );
}
