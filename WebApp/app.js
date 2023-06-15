const express = require("express");

const app = express();

const nodemailer = require("nodemailer"); // Importing Nodemailer for sending email to users

const port = 3000;

app.set("view engine", "ejs"); //Configuring the view engine to use EJS templates

app.use(express.static("public")); // Serving static files from the "public" directory
app.use(express.urlencoded({ extended: true })); // Parsing URL-encoded data in the request body
app.use(express.json()); // Parsing JSON data in the request body

// routes for pages
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

//function to send email to users
app.post('/contact', function(req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'test.only622544@gmail.com',
            pass: 'muigwegmtiwvpbgu'
        }
    });

    let mailOptions = {
        from: 'test.only622544@gmail.com',
        to: email,
        subject: 'Thank you for contacting us',
        text: `Hello ${name},\n\nDescription :${message} \n\nWe will get in touch with you as soon as possible.\n\nThank You!\nAdmin`
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.error('Error:', error);
            res.sendStatus(500); // Sending a status that an error occurred
        } else {
            console.log('Email sent:', info.response);
            res.sendStatus(200); // Sending a status that success
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
  console.log(`Server listening on port ${port}`);// Starting the server
});