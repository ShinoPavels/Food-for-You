import React from 'react';

const InputField = ({ label, type, name, value, onChange, error }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className={`block w-full bg-gray-200 border ${error ? 'border-red-500' : 'border-gray-300'} rounded py-2 px-3 text-gray-700 focus:outline-none focus:bg-white focus:border-gray-500`}
      />
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
  );
};


export default InputField;
