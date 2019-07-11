import * as React from "react";
import { Link } from "react-router-dom";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import Button from "../components/Button";
import Center from "../components/center";
import Input from "../components/input";

class LoginForm extends React.Component<InjectedFormProps> {
  public render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          label="Correo"
          placeholder="Correo"
          name="email"
          type="email"
          component={Input}
        />
        <Field
          label="Contraseña"
          placeholder="Contraseña"
          name="password"
          type="password"
          component={Input}
        />
        <Button block={true}>Enviar</Button>
        <Center>
          <Link to="/register">Registrarse</Link>
        </Center>
      </form>
    );
  }
}
export default reduxForm({
  form: "login"
})(LoginForm);
