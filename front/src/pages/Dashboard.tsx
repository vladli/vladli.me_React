import Button from "../components/Buttons/Button";
import Card from "../components/Cards/Card";
import CardAction from "../components/Cards/CardAction";
import CardBody from "../components/Cards/CardBody";
import CardHeader from "../components/Cards/CardHeader";
import CardImage from "../components/Cards/CardImage";
import Divider from "../components/Divider";

const Dashboard = () => {
  return (
    <div>
      <Card>
        <CardImage image="https://source.unsplash.com/random" />
        <CardHeader>Head</CardHeader>
        <CardBody>asd</CardBody>
        <Divider />
        <CardAction>
          <Button>Click</Button>
        </CardAction>
      </Card>
    </div>
  );
};

export default Dashboard;
