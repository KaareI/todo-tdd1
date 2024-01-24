<<<<<<< HEAD
const request = require("supertest")
const app = require("../../app");
const newTodo = require("../mock-data/new-todo.json")

const endpointUrl = "/todos/";

describe(endpointUrl, () => {
    it("POST " + endpointUrl, async () => {
        const response = await request(app)
            .post(endpointUrl)
            .send(newTodo);
        expect(response.statusCode).toBe(201);
        expect(response.body.title).toBe(newTodo.title);
        expect(response.body.done).toBe(newTodo.done);
    })

    it(
        "should return error 500 on malformed data with POST" + endpointUrl, async () => {
            const response = await request(app)
                .post(endpointUrl)
                .send({title: "Missing done property "});
            expect(response.statusCode).toBe(500);
            expect(response.body).toStrictEqual({
                message: "Todo validation failed: done: Path `done` is required."
            })
        }
    );
=======
const request = require("supertest")
const app = require("../../app");
const newTodo = require("../mock-data/new-todo.json")

const endpointUrl = "/todos/";

describe(endpointUrl, () => {
    it("POST " + endpointUrl, async() => {
        const response = await request(app)
            .post(endpointUrl)
            .send(newTodo);
        expect(response.statusCode).toBe(201);
        expect(response.body.title).toBe(newTodo.title);
        expect(response.body.done).toBe(newTodo.done);
    })
>>>>>>> 368c7e1ff3a9ee11f1deda771fc25d41ba363159
})