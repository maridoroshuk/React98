import styled from 'styled-components';

export const StyledButton = styled.button`
  box-sizing: border-box;
  border: none;
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) =>
    `${theme.borders.borderRaisedOuter}, ${theme.borders.borderRaisedInner} `};
  border-radius: 0;

  min-width: 75px;
  min-height: 23px;
  padding: 0 12px;

  &:not(:disabled):active {
    box-shadow: ${({ theme }) =>
      `${theme.borders.borderSunkenOuter}, ${theme.borders.borderSunkenInner} `};
    padding: 2px 11px 0 13px;
  }

  &:focus {
    outline: 1px dotted #000000;
    outline-offset: -4px;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &:disabled {
    text-shadow: 1px 1px 0 ${({ theme }) => theme.colors.buttonHighlight};
  }
`;

export const StyledSubmitButton = styled.input`
  box-sizing: border-box;
  border: none;
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) =>
    `${theme.borders.borderRaisedOuter}, ${theme.borders.borderRaisedInner} `};
  border-radius: 0;

  min-width: 75px;
  min-height: 23px;
  padding: 0 12px;

  &:not(:disabled):active {
    box-shadow: ${({ theme }) =>
      `${theme.borders.borderSunkenOuter}, ${theme.borders.borderSunkenInner} `};
    padding: 2px 11px 0 13px;
  }

  &:focus {
    outline: 1px dotted #000000;
    outline-offset: -4px;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &:disabled {
    text-shadow: 1px 1px 0 ${({ theme }) => theme.colors.buttonHighlight};
  }
`;
