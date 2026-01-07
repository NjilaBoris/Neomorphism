import Button from "./components/Button";
import Nav from "./components/Nav";

const App = () => {
  return (
    <main className="">
      <Nav />
      <div className="space-x-2">
        <Button variant="primary" disabled>
          Submit
        </Button>
        <Button variant="destructive">Submit</Button>
        <Button variant="warning">Submit</Button>
        <Button>Submit</Button>
      </div>
    </main>
  );
};

export default App;
