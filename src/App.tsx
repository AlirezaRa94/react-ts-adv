import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";

function App() {
  return (
    <main>
      <Input id='name' label='Your Name' type='text' />
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
    </main>
  );
}

export default App;
