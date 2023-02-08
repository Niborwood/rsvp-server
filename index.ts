import sendgrid from "@sendgrid/mail";

const app = express();
const port = process.env.PORT || 3000;

// Set your SendGrid API Key
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

app.get("/", (req, res) => {
  res.send("Express Server with SendGrid Support!");
});

app.get("/send-email", (req, res) => {
  const msg = {
    to: "recipient@example.com",
    from: "sender@example.com",
    subject: "Hello from Express + SendGrid",
    text: "This is a test email sent using SendGrid and Express.",
    html: "<strong>This is a test email sent using SendGrid and Express.</strong>",
  };

  sendgrid
    .send(msg)
    .then(() => {
      res.status(200).send("Email sent successfully.");
    })
    .catch((error) => {
      res.status(400).send(`Failed to send email: ${error}`);
    });
});

app.listen(port, () => {
  console.log(`Express server running on port ${port}`);
});
