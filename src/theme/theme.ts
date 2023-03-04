import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    surface: '#c0c0c0',
    buttonHighlight: '#ffffff',
    buttonFace: '#dfdfdf',
    buttonShadow: '#808080',
    windowFrame: '#0a0a0a',
    dialogBlue: '#000080',
    dialogBlueLight: '#1084d0',
    dialogGray: '#808080',
    dialogGrayLight: '#b5b5b5',
    linkBlue: '#0000ff',
  },
  spaces: {
    elementSpacing: '8px',
    groupedButtonSpacing: '4px',
    groupedElementSpacing: '6px',
    radioWidth: '12px',
    checkboxWidth: '13px',
    radioLabelSpacing: '6px',
    rangeTrackHeight: '4px',
    rangeSpacing: '10px',
  },
  borders: {
    borderWidth: '1px',
    borderRaisedOuter: 'inset -1px -1px #0a0a0a, inset 1px 1px #ffffff',
    borderRaisedInner: 'inset -2px -2px #808080, inset 2px 2px #dfdfdf',
    borderSunkenOuter: 'inset -1px -1px #ffffff, inset 1px 1px #0a0a0a',
    borderSunkenInner: 'inset -2px -2px #dfdfdf, inset 2px 2px #808080',
    borderWindowOuter: 'inset -1px -1px #0a0a0a, inset 1px 1px #dfdfdf',
    borderWindowInner: 'inset -2px -2px #808080, inset 2px 2px #ffffff',
    borderField:
      'inset -1px -1px #ffffff, inset 1px 1px #808080, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a',
  },
  fonts: {
    Pixelated: 'Pixelated MS Sans Serif',
  },
};
