import React from 'react';

interface Step3Props {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  prevStep: () => void;
  handleSubmit: () => void;
  isSubmitting: boolean;
}

const Step3PaymentSummary: React.FC<Step3Props> = ({ formData, handleChange, prevStep, handleSubmit, isSubmitting }) => {
  const roomPrices: Record<string, number> = {
    'Standard': 100,
    'Deluxe': 200,
    'Suite': 300
  };

  const getPricePerNight = () => {
    return roomPrices[formData.roomType] || 0;
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">3. Summary & Payment</h2>
      
      <div className="bg-blue-900 bg-opacity-5 rounded-xl p-5 mb-6 border border-blue-900/10">
        <h3 className="text-lg font-bold text-gray-800 mb-3 border-b border-blue-900/20 pb-2">Booking Summary</h3>
        <div className="space-y-2 text-sm text-gray-700">
          <p className="flex justify-between"><span>Destination:</span> <span className="font-semibold text-gray-900">{formData.location}</span></p>
          <p className="flex justify-between"><span>Dates:</span> <span className="font-semibold text-gray-900">{formData.checkInDate} to {formData.checkOutDate} ({formData.nights} nights)</span></p>
          <p className="flex justify-between"><span>Guests:</span> <span className="font-semibold text-gray-900">{formData.adults} Adults, {formData.children} Children</span></p>
          <p className="flex justify-between"><span>Room:</span> <span className="font-semibold text-gray-900">{formData.rooms} x {formData.roomType}</span></p>
          {formData.amenities.length > 0 && (
            <p className="flex justify-between"><span>Amenities:</span> <span className="font-semibold text-gray-900">{formData.amenities.join(', ')}</span></p>
          )}
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-5 mb-6 border border-gray-200">
         <h3 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-200 pb-2">Price Breakdown</h3>
         <div className="space-y-2 text-sm text-gray-700">
          <p className="flex justify-between"><span>Price per night:</span> <span className="font-semibold">${getPricePerNight()}</span></p>
          <p className="flex justify-between"><span>Total nights:</span> <span className="font-semibold">{formData.nights}</span></p>
          <p className="flex justify-between"><span>Rooms:</span> <span className="font-semibold">{formData.rooms}</span></p>
          <div className="border-t pt-2 mt-2">
            <p className="flex justify-between text-lg font-bold text-rose-600"><span>Total Amount:</span> <span>${formData.totalPrice}</span></p>
          </div>
         </div>
      </div>

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Special Request (Optional)</label>
          <textarea 
            name="specialRequest"
            value={formData.specialRequest}
            onChange={handleChange}
            rows={3}
            placeholder="Any special requests or preferences..."
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-rose-500 outline-none transition resize-none"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Coupon Code (Optional)</label>
          <input 
            type="text" 
            name="coupon"
            value={formData.coupon}
            onChange={handleChange}
            placeholder="TRAVEL2026"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-rose-500 outline-none transition uppercase"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Payment Method <span className="text-red-500">*</span></label>
          <div className="grid grid-cols-3 gap-3">
            {['UPI', 'Card', 'Net Banking'].map(method => (
              <label key={method} className={`border rounded-lg p-3 cursor-pointer text-center flex flex-col items-center justify-center transition-all ${formData.paymentMethod === method ? 'border-rose-500 bg-rose-50 text-rose-700 shadow-sm' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
                <input 
                  type="radio" 
                  name="paymentMethod"
                  value={method}
                  checked={formData.paymentMethod === method}
                  onChange={handleChange}
                  className="hidden"
                />
                <span className="font-medium text-sm">{method}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex gap-4 mt-6">
          <button 
            onClick={prevStep}
            disabled={isSubmitting}
            className="w-1/3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-lg transition disabled:opacity-50"
          >
            &larr; Back
          </button>
          <button 
            onClick={handleSubmit}
            disabled={isSubmitting || !formData.paymentMethod || formData.totalPrice === 0}
            className="w-2/3 bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-6 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
               <span>Confirm Booking &rarr;</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step3PaymentSummary;
