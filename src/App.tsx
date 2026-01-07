import Button from "./components/Button";

const App = () => {
  return (
    <main className="">
      <h1>Hey There</h1>
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
