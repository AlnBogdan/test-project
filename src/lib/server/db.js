import mongoose from 'mongoose';

const MONGO_URI = 'your-mongodb-uri-here';

export async function connectDB() {
	if (mongoose.connection.readyState === 1) return;

	try {
		await mongoose.connect(MONGO_URI);
		console.log('MongoDB connected');
	} catch (err) {
		console.error('MongoDB connection error', err);
	}
}
