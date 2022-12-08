import Button from "../components/Buttons/Button";
import Card from "../components/Cards/Card";
import CardAction from "../components/Cards/CardAction";
import CardBody from "../components/Cards/CardBody";
import CardHeader from "../components/Cards/CardHeader";
import CardImage from "../components/Cards/CardImage";
import Divider from "../components/Divider";
import Grid from "../components/Grid/Grid";

const images = [
  {
    scr: "https://i.ibb.co/5MMtXQQ/masahiro-miyagi-t-Hz-Ai-Axe-GBo-unsplash.jpg",
    blurUrl: "LCD*|x0K9a^k}t0|=xt70yxuw^NG",
  },
];

const Dashboard = () => {
  return (
    <div className="flex flex-wrap justify-center sm:justify-start">
      {Array.from(Array(3), (e, i) => {
        return (
          <div key={i}>
            <Card>
              <CardImage image={images[0].scr} blured={images[0].blurUrl} />
              <CardHeader>Head</CardHeader>
              <CardBody>asd</CardBody>
              <Divider />
              <CardAction>
                <Button>Click</Button>
              </CardAction>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
