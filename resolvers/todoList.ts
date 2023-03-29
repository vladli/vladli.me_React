import { Request, Response } from "express";
import todoList from "../models/todoList";

export const createTodo = async (req: Request, res: Response) => {
  const { userId, body } = req;
  const { text } = body;

  todoList
    .create({
      userUID: userId,
      text,
      completed: false,
    })
    .then((result) => {
      res.send(result);
    })
    .catch((error) => res.status(400).send(error));
};

export const getTodo = async (req: Request, res: Response) => {
  const { userId } = req;
  todoList.find({ userUID: userId }).then((result) => {
    res.send(result);
  });
};

export const updateTodo = async (req: Request, res: Response) => {
  const { query } = req;
  todoList
    .findByIdAndUpdate(query._id, {
      text: query.text,
      completed: query.completed,
    })
    .then((result) => {
      res.send(result);
    });
};

export const deleteTodo = async (req: Request, res: Response) => {
  const { query } = req;
  todoList
    .findByIdAndDelete(query._id)
    .then((result) => {
      res.send(result);
    })
    .catch((error) => res.status(400).send(error));
};
