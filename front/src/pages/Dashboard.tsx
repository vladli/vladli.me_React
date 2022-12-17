import Button from "../components/Buttons/Button";
import Card from "../components/Cards/Card";
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
    <Grid>
      {Array.from(Array(15), (e, i) => {
        return (
          <Grid.Item key={i}>
            <Card>
              <Card.Image image={images[0].scr} blured={images[0].blurUrl} />
              <Card.Header>Head</Card.Header>
              <Card.Body>asd</Card.Body>
              <Divider />
              <Card.Action>
                <Button>Click</Button>
              </Card.Action>
            </Card>
          </Grid.Item>
        );
      })}
    </Grid>
  );
};

export default Dashboard;
