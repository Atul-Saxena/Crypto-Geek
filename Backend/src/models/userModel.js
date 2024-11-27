import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    user_id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    user_image: { type: String, required: true },
    User_verification_status: { type: Boolean, required: true },
    user_type: { type: String, required: true },
    account_provider: { type: String, required: true },
    account_creation_date: { type: Date, required: true },
    last_login: { type: Date, required: true },
  },
  { timestamps: true }
);

export default mongoose.model('User', userSchema);

