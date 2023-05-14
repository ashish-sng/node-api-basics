import express from "express";
const app = express();
const port = 3000;
import foodData from "./data.js";

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/health-api", (req, res) => {
  const currentTime = new Date();
  const hours = currentTime.getHours().toString().padStart(2, "0");
  const minutes = currentTime.getMinutes().toString().padStart(2, "0");
  const seconds = currentTime.getSeconds().toString().padStart(2, "0");
  const formattedTime = `${hours}:${minutes}:${seconds}`;
  res.json({
    time: formattedTime,
    app: "express-server",
    status: "active",
  });
});
app.get("/all", (req, res) => {
  res.json(foodData);
});

app.get("/vegetable", (req, res) => {
  const vegetable = foodData.filter((item) => item.category === "Vegetable");
  res.json(vegetable);
});

app.get("/protein", (req, res) => {
  const protein = foodData.filter((item) => item.category === "Protein");
  res.json(protein);
});

app.get("/fruit", (req, res) => {
  const fruit = foodData.filter((item) => item.category === "Fruit");
  res.json(fruit);
});

app.get("/calorie-above-100", (req, res) => {
  const calorieAbove100 = foodData.filter((item) => item.calorie > 100);
  res.json(calorieAbove100);
});

app.get("/calorie-below-100", (req, res) => {
  const calorieBelow100 = foodData.filter((item) => item.calorie < 100);
  res.json(calorieBelow100);
});

app.use((req, res) => {
  res.status(404).send("Not Found");
});

app.listen(port, () => console.log(`App listening on port!`));
