"use client";

import React, { useState } from 'react';
import Step1UserDetails from '../../components/Booking/Step1UserDetails';
import Step2BookingDetails from '../../components/Booking/Step2BookingDetails';
import Step3PaymentSummary from '../../components/Booking/Step3PaymentSummary';

const BookingPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [submitError, setSubmitError] = useState('');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    location: '',
    checkInDate: '',
    checkOutDate: '',
    adults: 1,
    children: 0,
    rooms: 1,
    roomType: 'Standard',
    amenities: [] as string[],
    nights: 0,
    totalPrice: 0,
    specialRequest: '',
    coupon: '',
    paymentMethod: ''
  });

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      if (checked) {
        return { ...prev, amenities: [...prev.amenities, value] };
      } else {
        return { ...prev, amenities: prev.amenities.filter(a => a !== value) };
      }
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError('');
    try {
      // Structure payload for backend
      const payload = {
        ...formData,
        guests: {
          adults: Number(formData.adults),
          children: Number(formData.children),
          rooms: Number(formData.rooms)
        }
      };

      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setBookingRef(data.bookingReferenceId || (data._id ? data._id.toString() : 'Unknown Ref'));
      } else {
        setSubmitError(data.message || 'Something went wrong during booking.');
      }
    } catch (error) {
      setSubmitError('Failed to connect to the server. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 pt-[12vh]">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl max-w-lg w-full text-center border border-gray-100">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Booking Confirmed!</h2>
          <p className="text-gray-600 mb-6">Thank you for booking with us. A confirmation email has been sent to <span className="font-semibold">{formData.email}</span>.</p>
          <div className="bg-gray-50 rounded-xl p-4 mb-8 border">
            <p className="text-sm text-gray-500 mb-1">Booking Reference</p>
            <p className="text-xl font-mono font-bold tracking-wider text-rose-600">{bookingRef}</p>
          </div>
          <button onClick={() => window.location.href = '/'} className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-8 rounded-full transition w-full">
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-[15vh] pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2 mt-10">Complete Your Booking</h1>
          <p className="text-gray-500">Just a few steps away from your dream destination.</p>
        </div>

        {/* Progress Tracker */}
        <div className="mb-8">
          <div className="flex items-center justify-between relative">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-200 -z-10"></div>
            <div className={`absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-rose-600 transition-all duration-300 -z-10`} style={{ width: `${((currentStep - 1) / 2) * 100}%` }}></div>
            
            {[1, 2, 3].map((step) => (
              <div key={step} className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 transition-colors duration-300 bg-white ${
                currentStep >= step ? 'border-rose-600 text-rose-600' : 'border-gray-300 text-gray-400'
              } ${currentStep === step ? 'ring-4 ring-rose-100' : ''}`}>
                {step}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs font-semibold text-gray-500 px-1">
            <span className={currentStep >= 1 ? 'text-rose-600' : ''}>User Details</span>
            <span className={currentStep >= 2 ? 'text-rose-600 text-center' : 'text-center'}>Booking Details</span>
            <span className={currentStep >= 3 ? 'text-rose-600 text-right' : 'text-right'}>Payment Details</span>
          </div>
        </div>

        {submitError && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r-md">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
              <p className="text-red-700 font-medium">{submitError}</p>
            </div>
          </div>
        )}

        <div className="transition-all">
          {currentStep === 1 && (
            <Step1UserDetails 
              formData={formData} 
              handleChange={handleChange} 
              nextStep={nextStep} 
            />
          )}
          {currentStep === 2 && (
            <Step2BookingDetails 
              formData={formData} 
              handleChange={handleChange}
              handleCheckbox={handleCheckbox}
              setFormData={setFormData}
              nextStep={nextStep} 
              prevStep={prevStep} 
            />
          )}
          {currentStep === 3 && (
            <Step3PaymentSummary 
              formData={formData} 
              handleChange={handleChange} 
              prevStep={prevStep}
              handleSubmit={handleSubmit}
              isSubmitting={isSubmitting}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
