import * as dao from './dao.js';

export default function UserRoutes(app) {
    const createUser = async (req, res) => {
        const user = await dao.createUser(req.body);
        res.json(user);
    };
    app.post('/api/users', createUser);
    const deleteUser = async (req, res) => {
        const status = await dao.deleteUser(req.params.userId);
        res.json(status);
    };
    app.delete('/api/users/:userId', deleteUser);
    const findUserById = async (req, res) => {
        const user = await dao.findUserById(req.params.userId);
        res.json(user);
    };
    app.get('/api/users/:userId', findUserById);
    const findAllUsers = async (req, res) => {
        const users = await dao.findAllUsers();
        res.json(users);
    };
    app.get('/api/users', findAllUsers);
    const updateUser = async (req, res) => {
        const status = await dao.updateUser(req.params.userId, req.body);
        const currentUser = await dao.findUserById(req.params.userId);
        res.json(currentUser);
    };
    app.put('/api/users/:userId', updateUser);
    const signup = async (req, res) => {
        const user = await dao.findUserByUsername(req.body.username);
        if (user) {
          res.status(400).json({ message: "Username already taken" });
          return;
        }
        console.log(req.body);
        const currentUser = await dao.createUser(req.body);
        req.session["currentUser"] = currentUser;
        res.json(currentUser);
    };
    app.post("/api/users/signup", signup);
    const signin = async (req, res) => {
        const { username, password } = req.body;
        const currentUser = await dao.findUserByCredentials(username, password);
        if (currentUser) {
          req.session["currentUser"] = currentUser;
          res.json(currentUser);
        } else {
          res.status(401).json({ message: "Unable to login. Try again later." });
        }
    };
    app.post("/api/users/signin", signin);
    const signout = (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    };
    app.post("/api/users/signout", signout);
    const profile = (req, res) => {
        const currentUser = req.session["currentUser"];
        if (!currentUser) {
          res.sendStatus(401);
          return;
        }
        res.json(currentUser);
    };
    app.post("/api/users/profile", profile);
}