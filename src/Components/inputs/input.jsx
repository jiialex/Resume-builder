import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
import '../../styles/input.css';

function Input({ value, onChange, label, placeholder, type = 'text', name }) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className="input-wrapper">
      {label && (
        <label htmlFor={name} className="input-label">
          {label}
        </label>
      )}

      <div className="input-field">
        <input
          id={name}
          name={name}
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="input-control"
          autoComplete={isPassword ? 'current-password' : 'on'}
        />

        {isPassword && (
          <button
            type="button"
            className="icon-button"
            onClick={() => setShowPassword((s) => !s)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <FaRegEyeSlash size={18} /> : <FaRegEye size={18} />}
          </button>
        )}
      </div>
    </div>
  );
}

export default Input;
