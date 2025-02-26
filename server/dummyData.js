import mongoose from "mongoose";
import { faker } from "@faker-js/faker";
import transactionModel from "./Models/transactionModel.js";
import userModel from "./Models/userModel.js";

const MONGO_URI =
  "mongodb+srv://kunalgupta1208:XtdAng0slDwerwc5@cluster0.htl5m.mongodb.net/Expensetrack?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Connected to MongoDB for seeding.");

    // Find or create a dummy user
    let dummyUser = await userModel.findOne({ email: "epicboy1208@gmail.com" });
    if (!dummyUser) {
      dummyUser = await User.create({
        email: "dummy@example.com",
        username: "dummyuser",
        password: "dummyPassword", // will be hashed via pre-save hook
      });
    }

    // Generate dummy transactions for that user
    const transactions = [];
    for (let i = 0; i < 10; i++) {
      transactions.push({
        description: faker.lorem.sentence(),
        amount: parseFloat(faker.finance.amount(10, 1000, 2)),
        type: faker.helpers.arrayElement(["income", "expense"]),
        date: faker.date.recent(30),
        category: faker.commerce.department(),
        user: dummyUser._id, // associates transaction with the dummy user
      });
    }

    await transactionModel.insertMany(transactions);
    console.log("Dummy transactions inserted.");

    mongoose.connection.close();
    process.exit();
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
