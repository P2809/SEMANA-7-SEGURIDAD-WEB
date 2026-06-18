const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    session({
        secret: "semana7",
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            secure: false,
            sameSite: "strict"
        }
    })
);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "PRESENTACION", "login.html"));
});

app.post("/login", (req, res) => {

    const { usuario, password } = req.body;

    if (usuario === "admin" && password === "1234") {

        req.session.usuario = usuario;

        console.log("Login exitoso");

        res.redirect("/privado");

    } else {

        console.log("Credenciales incorrectas");

        res.send("Usuario o contraseña incorrecta");
    }
});

function requireAuth(req, res, next) {

    if (req.session.usuario) {
        next();
    } else {
        console.log("Acceso denegado");
        res.status(401).send("Debe iniciar sesión");
    }
}

app.get("/privado", requireAuth, (req, res) => {

    console.log("Acceso autorizado");

    res.sendFile(path.join(__dirname, "PRESENTACION", "privado.html"));
});

app.get("/logout", (req, res) => {

    req.session.destroy(() => {

        console.log("Sesion cerrada");

        res.redirect("/");
    });
});

app.listen(3000, () => {
    console.log("Servidor ejecutándose en puerto 3000");
});