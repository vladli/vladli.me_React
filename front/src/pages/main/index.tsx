import Button from "components/Button";
import Card from "components/Cards/Card";
import Modal from "components/Modal/Modal";
import { useId, useState } from "react";

const images = [
  {
    scr: "https://i.ibb.co/5MMtXQQ/masahiro-miyagi-t-Hz-Ai-Axe-GBo-unsplash.jpg",
    blurUrl: "LCD*|x0K9a^k}t0|=xt70yxuw^NG",
  },
];

export default function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const [card, setCard] = useState({
    header: "Title",
    body: `The longest word in any of the major English language
    dictionaries is pneumonoultramicrosc opicsilicovolcanoconiosis.`,
  });
  const hideModal = () => setModalOpen(false);
  const cardOpen = () => {
    setModalOpen(true);
  };
  return (
    <div className="flex flex-wrap justify-center gap-4 md:justify-around">
      {Array.from(Array(4), (_, i) => {
        return (
          <Card key={i} className="max-w-xs">
            <Card.Image image={images[0].scr} blured={images[0].blurUrl} />
            <Card.Body>
              <Card.Header>{card.header}</Card.Header>
              <p>{card.body}</p>
              <Card.Action>
                <Button onClick={cardOpen}>Open</Button>
              </Card.Action>
            </Card.Body>
          </Card>
        );
      })}
      <Modal open={modalOpen} onClickBackDrop={hideModal}>
        <Modal.Header className="font-bold">{card.header}</Modal.Header>
        <Modal.Body>
          <p>{card.body}</p>
        </Modal.Body>
      </Modal>
    </div>
  );
}
