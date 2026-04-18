const Booking = require('../models/Booking');

// @desc    Create a new booking
// @route   POST /api/bookings
const createBooking = async (req, res) => {
  try {
    const {
      fullName, email, phone, address, location, checkInDate, checkOutDate,
      guests, roomType, amenities, specialRequest, coupon, totalPrice, paymentMethod
    } = req.body;

    if (!fullName || !email || !phone || !location || !checkInDate || !checkOutDate || !roomType || !totalPrice || !paymentMethod) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    const booking = new Booking({
      fullName, email, phone, address, location, checkInDate, checkOutDate,
      guests, roomType, amenities, specialRequest, coupon, totalPrice, paymentMethod,
      bookingStatus: 'confirmed' // Auto confirm for now as per simple flow
    });

    const savedBooking = await booking.save();
    res.status(201).json(savedBooking);
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ message: 'Server error while creating booking', error: error.message });
  }
};

// @desc    Get all bookings
// @route   GET /api/bookings
const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ message: 'Server error while fetching bookings' });
  }
};

// @desc    Get booking by ID
// @route   GET /api/bookings/:id
const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.status(200).json(booking);
  } catch (error) {
    console.error('Error fetching booking:', error);
    res.status(500).json({ message: 'Server error while fetching booking' });
  }
};

module.exports = {
  createBooking,
  getAllBookings,
  getBookingById
};
