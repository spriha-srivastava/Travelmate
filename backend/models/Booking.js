const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String },
  location: { type: String, required: true },
  checkInDate: { type: Date, required: true },
  checkOutDate: { type: Date, required: true },
  guests: {
    adults: { type: Number, required: true, default: 1 },
    children: { type: Number, default: 0 },
    rooms: { type: Number, required: true, default: 1 }
  },
  roomType: { type: String, required: true, enum: ['Standard', 'Deluxe', 'Suite'] },
  amenities: [{ type: String }],
  specialRequest: { type: String },
  coupon: { type: String },
  totalPrice: { type: Number, required: true },
  paymentMethod: { type: String, required: true, enum: ['UPI', 'Card', 'Net Banking'] },
  bookingStatus: { type: String, default: 'pending', enum: ['pending', 'confirmed', 'cancelled'] },
  bookingReferenceId: { type: String, required: true, unique: true }
}, {
  timestamps: true
});

// Pre-save hook to generate bookingReferenceId
bookingSchema.pre('validate', function(next) {
  if (!this.bookingReferenceId) {
    const randomStr = Math.random().toString(36).substring(2, 8).toUpperCase();
    this.bookingReferenceId = `BKG-${Date.now().toString().slice(-4)}-${randomStr}`;
  }
  next();
});

module.exports = mongoose.model('Booking', bookingSchema);
