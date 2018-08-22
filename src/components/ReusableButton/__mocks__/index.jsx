import React from 'react';

export const ReusableButton = jest.fn(({ onClick, buttonLabel }) => (
  <button data-testid="mock-button" onClick={onClick}>
    {buttonLabel}
  </button>
));
