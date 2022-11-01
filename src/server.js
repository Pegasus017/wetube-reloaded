import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
    console.log(res);
    return res.send(`This is Home, http://localhost:${PORT}/`);
};

app.get("/", handleHome);

const handleListening = () => console.log(`Server is Listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);