import Button from "./components/Button";
import Card, {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/card";
import Nav from "./components/Nav";
import NeuSwitch from "./components/Switch";

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
        <Card>
          <CardHeader>
            <CardTitle>This is my title</CardTitle>
            <CardDescription>This is the price of my product</CardDescription>
          </CardHeader>
          <CardContent>These are the following content</CardContent>
          <CardFooter>
            <Button variant={"primary"}>Purchase Now</Button>
          </CardFooter>
          <NeuSwitch />
        </Card>
      </div>
    </main>
  );
};

export default App;
