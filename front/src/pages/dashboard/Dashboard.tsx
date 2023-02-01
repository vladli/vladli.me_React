import Button from "../../components/Buttons/Button";
import Card from "../../components/Cards/Card";
import Divider from "../../components/Divider";

const images = [
  {
    scr: "https://i.ibb.co/5MMtXQQ/masahiro-miyagi-t-Hz-Ai-Axe-GBo-unsplash.jpg",
    blurUrl: "LCD*|x0K9a^k}t0|=xt70yxuw^NG",
  },
];

const Dashboard = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 md:justify-around">
      {Array.from(Array(15), (e, i) => {
        return (
          <Card key={i} className="max-w-xs">
            <Card.Image image={images[0].scr} blured={images[0].blurUrl} />
            <Card.Header>Head</Card.Header>
            <Card.Body>
              The longest word in any of the major English language dictionaries
              is pneumonoultramicroscopicsilicovolcanoconiosis, a word that
              refers to a lung disease contracted from the inhalation of very
              fine silica particles, specifically from a volcano; medically, it
              is the same as silicosis.
            </Card.Body>
            <Card.Action>
              <Button disabled>Click</Button>
            </Card.Action>
          </Card>
        );
      })}
    </div>
  );
};

export default Dashboard;
