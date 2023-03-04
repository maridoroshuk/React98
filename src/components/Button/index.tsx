import React from 'react';

import { IButtonProps } from './interface';
import { StyledButton, StyledSubmitButton } from './styles';

export const Button = ({ onClick, type, disabled, children }: IButtonProps) => {
  // eslint-disable-next-line no-console
  console.log(type);
  return (
    <>
      {type && (
        <StyledSubmitButton
          type={type}
          onSubmit={onClick}
          value={type === 'reset' ? 'Reset' : 'Submit'}
          disabled={disabled}
        />
      )}
      {!type && (
        <StyledButton disabled={disabled} onClick={onClick}>
          {children}
        </StyledButton>
      )}
    </>
  );
};
