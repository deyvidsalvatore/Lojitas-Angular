const cors = require("cors");
const express = require("express");

require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.listen(8000, () => {
  console.log("Server started at port 8000");
});

app.post("/api/create-checkout-session", async (req, res) => {
  const origin = req.get("origin");
  const lineItems = req.body.map((item) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: item.name,
        images: [item.imageUrl],
      },
      unit_amount: Math.round(item.price * 100),
    },
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: origin + "/success",
    cancel_url: origin + "/cancel"
  });
  res.json({id: session.id});
});
