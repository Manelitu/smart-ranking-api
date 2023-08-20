import * as mongoose from 'mongoose';

const mongooseConfig = { timestamps: true, collection: 'players' };

export const playerSchema = new mongoose.Schema(
  {
    phone: { type: String, unique: true },
    email: { type: String, unique: true },
    name: String,
    ranking: String,
    rankingPosition: Number,
    image: String,
  },
  mongooseConfig,
);
