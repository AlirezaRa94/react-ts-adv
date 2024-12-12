import Button from "./components/Button";
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
    </main>
  );
}

export default App;
