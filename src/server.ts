import express, { Request, Response } from "express";
import cors from "cors";
import userRoutes from "./user/routes/user.routes";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Server is running with TypeScript 🚀");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
