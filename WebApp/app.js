const express = require("express");

const app = express();

const nodemailer = require("nodemailer");

const port = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (request, response) => {
	response.redirect("home");
});

app.get("/home", (request, response) => {
	response.render("home");
});

app.get("/accommodation", (request, response) => {
	response.render("accommodation");
});

app.get("/contact", (request, response) => {
	response.render("contact");
});

app.post('/contact', function(req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'health.tracker12345@gmail.com',
            pass: 'whqovcfviseafiqx'
        }
    });

    let mailOptions = {
        from: 'health.tracker12345@gmail.com',
        to: email,
        subject: 'Thank you for contact us',
        text: `Hello ${name},Description :${message}`
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.error('Error:', error);
            res.sendStatus(500);
        } else {
            console.log('Email sent:', info.response);
            res.sendStatus(200);
        }
    });
});


app.get("/environment", (request, response) => {
	response.render("environment");
});

app.get("/history", (request, response) => {
	response.render("history");
});

app.get("/resources", (request, response) => {
	response.render("resources");
});

app.get("/services", (request, response) => {
	response.render("services");
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});