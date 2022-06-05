import { Request, Response } from "express";
import { catchAsync } from "../lib/error";
import Booking from "../models/bookingModel";

export const createBooking = catchAsync(async (req: Request, res: Response) => {
	const existingUser = await Booking.findOne({ name: req.body.name });

	if (!existingUser) {
		const date = req.body.date;
		delete req.body.date;
		const time = req.body.time;
		delete req.body.time;
		const datetime = new Date(date + " " + time);
		req.body.datetime = datetime;
		req.body.amount = Number(req.body.amount.replaceAll(",", ""));

		await Booking.create(req.body);

		return res.status(200).json({
			status: "success",
			id: Math.random().toString().slice(2, 12)
		});
	}

	res.status(409).json({
		status: "fail",
		message: "This name already exists!"
	});
});
