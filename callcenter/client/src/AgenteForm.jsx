import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { login_agente } from './api'
import { useNavigate } from 'react-router-dom'

const AgenteForm = () => {
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
      username: '',
      password: '',
    });
    
    const navigate = useNavigate();

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);

    // login agente
    try {
        const data = await login_agente(formData)
        console.log('Resultado de login: ', data);

        // si el login es exitoso, redirigir al agente a detalles del agente
        navigate(`/agente/${data.id}`);
    } catch (error) {
        console.error('Error al iniciar sesión: ', error);
    }
  }; // aqui termina la opcion del boton

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <h1>¡Bienvenido/a al sistema de soporte técnico.</h1>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Nombre de usuario</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              name='username'
              onChange={handleChange}
              value={formData.username}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            required
            type="password"
            name='password'
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
          />
          <Form.Control.Feedback type="invalid">
              Please type a password
            </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button type="submit">Submit form</Button>
    </Form>
  );
}

export default AgenteForm;