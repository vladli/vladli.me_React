import Button from "components/Button";
import Card from "components/Cards/Card";

const images = [
  {
    scr: "https://i.ibb.co/5MMtXQQ/masahiro-miyagi-t-Hz-Ai-Axe-GBo-unsplash.jpg",
    blurUrl: "LCD*|x0K9a^k}t0|=xt70yxuw^NG",
  },
];

export default function Dashboard() {
  return (
    <div className="p-4 flex flex-wrap justify-center gap-4 md:justify-around">
      {Array.from(Array(4), (e, i) => {
        return (
          <Card key={i} className="max-w-xs">
            <Card.Image image={images[0].scr} blured={images[0].blurUrl} />
            <Card.Body>
              <Card.Header>Head</Card.Header>
              <p>
                The longest word in any of the major English language
                dictionaries is pneumonoultramicrosc opicsilicovolcanoconiosis,
                .
              </p>
              <Card.Action>
                <Button>Click</Button>
              </Card.Action>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
