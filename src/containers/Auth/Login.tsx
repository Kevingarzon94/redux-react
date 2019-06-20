import * as React from "react";
import Button from "../../components/Button";
import Card from "../../components/cards";
import Center from "../../components/center";
import Container from "../../components/Container";
import Input from "../../components/input";
import Link from "../../components/Link";
import Title from "../../components/Title";

export default class Login extends React.Component {
  public render() {
    return (
      <Container>
        <Card>
          <Title>Iniciar sesiom</Title>
          <Input placeholder="Correo" label="CORREO" />
          <Input placeholder="Contraseña" label="CONTRASEÑA" />
          <Button block={true}>Enviar</Button>
          <Center>
            <Link>Registrarse</Link>
          </Center>
        </Card>
      </Container>
    );
  }
}
