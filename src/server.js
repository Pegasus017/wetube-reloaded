import express from "express";

const PORT = 4000;

const app = express();

const logger = (req, res, next) => {
    console.log(`${req.method}, ${req.url}`)
    next();
};

const handleHome = (req, res) => {
    return res.send(`This is Home, http://localhost:${PORT}/`);
};

app.use(logger);
app.get("/", handleHome);

const handleListening = () => console.log(`Server is Listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);