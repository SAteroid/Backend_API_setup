const express = require("express");
const { json } = require("body-parser");
const { connect, Schema, model } = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

const tokenSchema = new Schema({
    address: { type: String, required: true },
    name: { type: String, required: true },
    symbol: { type: String, required: true }
});

// Define sub-schema for transaction
const transactionSchema = new Schema({
    buys: { type: Number, required: true },
    sells: { type: Number, required: true }
});


const volumeSchema = new Schema({
    h24: { type: Number, required: true },
    h6: { type: Number, required: true },
    h1: { type: Number, required: true },
    m5: { type: Number, required: true }
});


const priceChangeSchema = new Schema({
    m5: { type: Number, required: true },
    h1: { type: Number, required: true },
    h6: { type: Number, required: true },
    h24: { type: Number, required: true }
});


const infoSchema = new Schema({
    imageUrl: { type: String, required: true },
    websites: [{ label: String, url: String }],
    socials: [{ type: String, url: String }]
});

const pairSchema = new Schema({
    chainId: { type: String, required: true },
    dexId: { type: String, required: true },
    url: { type: String, required: true },
    pairAddress: { type: String, required: true },
    baseToken: tokenSchema,
    quoteToken: tokenSchema,
    priceNative: { type: String, required: true },
    priceUsd: { type: String, required: true },
    txns: {
        m5: transactionSchema,
        h1: transactionSchema,
        h6: transactionSchema,
        h24: transactionSchema
    },
    volume: volumeSchema,
    priceChange: priceChangeSchema,
    liquidity: {
        usd: { type: Number, required: true },
        base: { type: Number, required: true },
        quote: { type: Number, required: true }
    },
    pairCreatedAt: { type: Number, required: true },
    info: infoSchema
});


connect(
  "mongodb+srv://ScaleX_Finance:3iRLoAPvL8124SqZ@cluster0.bkttiil.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const User = model("User", pairSchema); 

app.use(json());


app.get("/api/user/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

app.post("/api/user", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});


app.put("/api/user/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

app.delete("/api/user/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
