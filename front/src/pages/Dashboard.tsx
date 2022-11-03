import Button from "../components/Buttons/Button";
import Card from "../components/Cards/Card";
import CardAction from "../components/Cards/CardAction";
import CardHeader from "../components/Cards/CardHeader";
import CardImage from "../components/Cards/CardImage";

const Dashboard = () => {
  return (
    <div>
      <Card>
        <CardImage image="https://source.unsplash.com/random" />
        <CardHeader>Head</CardHeader>
        Body
        <CardAction>
          <Button>Read</Button>
        </CardAction>
      </Card>
    </div>
  );
};

export default Dashboard;
