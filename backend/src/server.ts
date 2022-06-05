import { createServer } from "http";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
import app from "./app";

const server = createServer(app);

// Part: Configure DB and Server
try {
	(async () => {
		const connection = await mongoose.connect(process.env.MONGO_URI || "");
		const PORT: String | undefined = process.env.PORT || "5000";
		server.listen(PORT, () => {
			console.log(`Listening on port ${PORT}.`);
		});
		if (!connection)
			throw new Error("Failed to connect with DB and Server!");
	})();
} catch (err) {
	console.log(err);
}
