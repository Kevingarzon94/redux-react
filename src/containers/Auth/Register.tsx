import * as React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Card from "../../components/cards";
import Center from "../../components/center";
import Container from "../../components/Container";
import Input from "../../components/input";
import Title from "../../components/Title";

export default class Login extends React.Component {
  public render() {
    return (
      <Container>
        <Card>
          <Title>Registro</Title>
          <Input placeholder="Correo" label="CORREO" />
          <Input placeholder="Contraseña" label="CONTRASEÑA" />
          <Button block={true}>Enviar</Button>
          <Center>
            <Link to="/">Iniciar sesión</Link>
          </Center>
        </Card>
      </Container>
    );
  }
}
