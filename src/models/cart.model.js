import mongoose from 'mongoose';

const { Schema } = mongoose;

const cartSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  items: [
    {
      bookId: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
      quantity: { type: Number, default: 1, min: 1 }
    }
  ],
  totalPrice: { type: Number, default: 0, min: 0 }
}, { timestamps: true });

export default mongoose.model('Cart', cartSchema);
