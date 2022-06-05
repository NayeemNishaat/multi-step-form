import mongoose, { Schema } from "mongoose";

const bookingSchema: Schema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "User must have a name!"],
		trim: true
	},
	gender: {
		type: String,
		enum: ["male", "female"]
	},
	from: {
		type: String,
		required: true
	},
	to: {
		type: String,
		required: true
	},
	datetime: {
		type: Date,
		required: true
	},
	amount: {
		type: Number,
		required: true
	},
	note: {
		type: String
	}
});

export default mongoose.model("Booking", bookingSchema);
