import { Request, Response } from "express";
import { AppError } from "../lib/error";

interface IError extends AppError {
	_message?: string;
	errors?: object;
}

const sendError = (err: IError, req: Request, res: Response, env: string) => {
	if (env === "development") {
		console.log(err);

		return res.status(err.statuscode).json({
			status: err.status,
			message: err.message
		});
	}

	return res.status(err.statuscode).json({
		status: err.status,
		message: err.message
	});
};

const errorHandler = (err: IError, req: Request, res: Response) => {
	err.statuscode = err.statuscode || 500;
	err.status = err.status || "error";
	err.message = err.message || "Something went wrong!";

	if (process.env.NODE_ENV === "development") {
		sendError(err, req, res, "development");
	} else {
		console.log(err);
		sendError(err, req, res, "production");
	}
};

export default errorHandler;
