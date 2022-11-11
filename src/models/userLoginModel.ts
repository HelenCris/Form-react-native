import React from 'react';

export interface UserLoginModel {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  handleLogin: () => any;
  onSubmit: () => any;
  errorMessage: string;
  setErrorMessage: string;
}