import { vars } from 'nativewind';

export const lightTheme = vars({
  '--color-background':        '0 26 24',
  '--color-foreground':        '240 249 255',
  '--color-card':              '0 38 34',
  '--color-border':            '0 64 57',
  '--color-primary':           '20 184 166',   // #14b8a6
  '--color-primary-foreground':'255 255 255',
  '--color-muted':             '0 20 18',
  '--color-muted-foreground':  '148 163 184',
  '--color-destructive':       '239 68 68',
  '--color-destructive-foreground': '255 255 255',
});

// CompSciCarno is dark-only; darkTheme = same values
export const darkTheme = lightTheme;
