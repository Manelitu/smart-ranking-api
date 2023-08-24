import * as mongoose from 'mongoose';

const mongooseConfig = { timestamps: true, collection: 'categories' };

export const categorySchema = new mongoose.Schema(
  {
    category: { type: String, unique: true },
    description: String,
    events: [{ name: String, operation: String, value: Number }],
    players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'players' }],
  },
  mongooseConfig,
);
