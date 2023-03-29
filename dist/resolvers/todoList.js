import todoList from "../models/todoList";
export const createTodo = async (req, res) => {
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
export const getTodo = async (req, res) => {
    todoList.find().then((result) => {
        res.send(result);
    });
};
export const updateTodo = async (req, res) => {
    const { query } = req;
    todoList
        .findByIdAndUpdate(query._id, {
        completed: query.completed,
    })
        .then((result) => {
        res.send(result);
    });
};
export const deleteTodo = async (req, res) => {
    const { query } = req;
    todoList
        .findByIdAndDelete(query._id)
        .then((result) => {
        res.send(result);
    })
        .catch((error) => res.status(400).send(error));
};
