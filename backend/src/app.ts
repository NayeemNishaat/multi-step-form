import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
const app = express();
import { AppError } from "./lib/error";
import errorHandler from "./controllers/errorController";
import bookingRoute from "./routes/bookingRoute";

// Part: Cors
app.use(cors());

// Part: Parsing body
app.use(express.json());

// Part: Mounting Routes
app.use("/api/v1/booking", bookingRoute);

// Part: Handeling unwanted routes
app.all("*", (req: Request, _res: Response, next: NextFunction) => {
	next(
		new AppError(`This (${req.originalUrl}) route is not available!`, 404)
	);
});

// Part: Handeling error
app.use(errorHandler);

export default app;
