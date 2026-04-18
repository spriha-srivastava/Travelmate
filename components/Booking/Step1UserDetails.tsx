import React from 'react';

interface Step1Props {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  nextStep: () => void;
}

const Step1UserDetails: React.FC<Step1Props> = ({ formData, handleChange, nextStep }) => {
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const validateAndProceed = () => {
    let newErrors: Record<string, string> = {};
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone Number is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      nextStep();
    }
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">1. User Details</h2>
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            className={`w-full px-4 py-3 rounded-lg border ${errors.fullName ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-rose-500 outline-none transition`}
          />
          {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-rose-500 outline-none transition`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number <span className="text-red-500">*</span></label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 234 567 8900"
            className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-rose-500 outline-none transition`}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Address (Optional)</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="123 Street, City"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-rose-500 outline-none transition"
          />
        </div>

        <button
          onClick={validateAndProceed}
          className="w-full mt-6 bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-6 rounded-lg transition"
        >
          Next Step &rarr;
        </button>
      </div>
    </div>
  );
};

export default Step1UserDetails;
