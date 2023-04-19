import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://limhoooo:dlagh12@cluster0.tqob8j2.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollention = db.collection("meetups");
    const result = await meetupsCollention.insertOne(data);
    console.log(result);

    client.close();

    res.status(201).json({ message: "inserted" });
  }
}

export default handler;
