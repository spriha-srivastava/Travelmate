import React, { useEffect } from 'react';

interface Step2Props {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleCheckbox: (e: React.ChangeEvent<HTMLInputElement>) => void;
  nextStep: () => void;
  prevStep: () => void;
  setFormData: any;
}

const Step2BookingDetails: React.FC<Step2Props> = ({ formData, handleChange, handleCheckbox, nextStep, prevStep, setFormData }) => {
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const roomPrices: Record<string, number> = {
    'Standard': 100,
    'Deluxe': 200,
    'Suite': 300
  };

  // Auto calculate total price when dependencies change
  useEffect(() => {
    if (formData.checkInDate && formData.checkOutDate) {
      const checkIn = new Date(formData.checkInDate);
      const checkOut = new Date(formData.checkOutDate);
      
      const timeDiff = checkOut.getTime() - checkIn.getTime();
      const nights = Math.ceil(timeDiff / (1000 * 3600 * 24));
      
      if (nights > 0) {
        const roomPrice = roomPrices[formData.roomType] || 100;
        const total = nights * roomPrice * formData.rooms;
        if (formData.totalPrice !== total) {
          setFormData((prev: any) => ({ ...prev, totalPrice: total, nights }));
        }
      } else {
         if (formData.totalPrice !== 0) {
           setFormData((prev: any) => ({ ...prev, totalPrice: 0, nights: 0 }));
         }
      }
    }
  }, [formData.checkInDate, formData.checkOutDate, formData.roomType, formData.rooms]);

  const validateAndProceed = () => {
    let newErrors: Record<string, string> = {};
    if (!formData.location) newErrors.location = 'Location is required';
    if (!formData.checkInDate) newErrors.checkInDate = 'Check-in Date is required';
    if (!formData.checkOutDate) newErrors.checkOutDate = 'Check-out Date is required';
    
    if (formData.checkInDate && formData.checkOutDate) {
      const checkIn = new Date(formData.checkInDate);
      const checkOut = new Date(formData.checkOutDate);
      if (checkOut <= checkIn) {
         newErrors.checkOutDate = 'Check-out must be after check-in';
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      nextStep();
    }
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">2. Booking Details</h2>
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Destination / Location <span className="text-red-500">*</span></label>
          <input 
            type="text" 
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="E.g. Paris, France"
            className={`w-full px-4 py-3 rounded-lg border ${errors.location ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-rose-500 outline-none transition`}
          />
          {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Check-in Date <span className="text-red-500">*</span></label>
            <input 
              type="date" 
              name="checkInDate"
              value={formData.checkInDate}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${errors.checkInDate ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-rose-500 outline-none transition`}
            />
            {errors.checkInDate && <p className="text-red-500 text-xs mt-1">{errors.checkInDate}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Check-out Date <span className="text-red-500">*</span></label>
            <input 
              type="date" 
              name="checkOutDate"
              value={formData.checkOutDate}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${errors.checkOutDate ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-rose-500 outline-none transition`}
            />
            {errors.checkOutDate && <p className="text-red-500 text-xs mt-1">{errors.checkOutDate}</p>}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 border-t border-b py-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Adults</label>
            <input 
              type="number" 
              name="adults"
              min="1"
              value={formData.adults}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-rose-500 outline-none transition"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Children</label>
            <input 
              type="number" 
              name="children"
              min="0"
              value={formData.children}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-rose-500 outline-none transition"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Rooms</label>
            <input 
              type="number" 
              name="rooms"
              min="1"
              value={formData.rooms}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-rose-500 outline-none transition"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Room Type</label>
          <select 
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-rose-500 outline-none transition"
          >
            <option value="Standard">Standard (${roomPrices['Standard']}/night)</option>
            <option value="Deluxe">Deluxe (${roomPrices['Deluxe']}/night)</option>
            <option value="Suite">Suite (${roomPrices['Suite']}/night)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Amenities</label>
          <div className="grid grid-cols-2 gap-3">
            {['WiFi', 'AC', 'Breakfast', 'Pool', 'Gym'].map(amenity => (
              <label key={amenity} className="flex items-center space-x-2 text-gray-600 cursor-pointer">
                <input 
                  type="checkbox" 
                  value={amenity}
                  checked={formData.amenities.includes(amenity)}
                  onChange={handleCheckbox}
                  className="w-4 h-4 text-rose-600 border-gray-300 rounded focus:ring-rose-500"
                />
                <span>{amenity}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex gap-4 mt-6">
          <button 
            onClick={prevStep}
            className="w-1/3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-lg transition"
          >
            &larr; Back
          </button>
          <button 
            onClick={validateAndProceed}
            className="w-2/3 bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-6 rounded-lg transition"
          >
            Next Step &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step2BookingDetails;
