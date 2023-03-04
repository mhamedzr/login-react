import './Container.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Container = () => {
  return (
    <>

    <Form id='formCenter' border="dark" >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Utilisateur</Form.Label>
        <Form.Control type="username" placeholder="Entrer le nom " />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mot de passe</Form.Label>
        <Form.Control type="password" placeholder="Entrer le Mot de passe" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Connexion
      </Button>
    </Form>
    </>
  )
}

export default Container