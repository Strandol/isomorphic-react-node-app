import mongoose, { Schema } from 'mongoose';

const model = {
	username: {
		type: String,	
		required: true
	},
	hash: {
		type: String,
		required: true
	}
};

const User = new Schema(model);

export default mongoose.model('User', User);
