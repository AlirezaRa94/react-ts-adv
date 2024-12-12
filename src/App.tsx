import { useRef } from "react";
import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";
import Form from "./components/Form";

function App() {
  const inputEl = useRef<HTMLInputElement>(null);

  function handleFormSubmit(data: unknown) {
    const extractedData = data as { email: string; password: string };
    console.log(extractedData);
  }

  return (
    <main>
      <Input id='name' label='Your Name' type='text' ref={inputEl} />
      <Input id='age' label='Your Age' type='number' />
      <p>
        <Button el='button'>Submit</Button>
      </p>
      <p>
        <Button el='a' href='/'>
          Cancel
        </Button>
      </p>
      <Container as='button' type='submit'>
        Click Me
      </Container>
      <Form onSave={handleFormSubmit}>
        <Input id='email' label='Your Email' type='email' />
        <Input id='password' label='Your Password' type='password' />
        <Button el='button'>Submit</Button>
      </Form>
    </main>
  );
}

export default App;
