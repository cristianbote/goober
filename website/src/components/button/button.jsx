import { styled } from 'goober';

export const Button = styled('button')(({ theme, secondary }) => [
    {
        display: 'flex',
        padding: [theme.sizes[300], theme.sizes[400]].join(' '),
        backgroundColor: theme.colors['gray-100'],
        color: theme.colors['white'],
        borderRadius: theme.sizes[500],
        border: 0,
        fontSize: theme.fontSizes[300],
        letterSpacing: 0,
        fontWeight: 'normal',
        cursor: 'pointer',
        boxShadow: [0, theme.sizes[100], theme.sizes[400], theme.colors['gray-25']].join(' '),
        transition: 'transform 100ms ease-out, letter-spacing 200ms ease-out',
        transform: 'translateY(0)',
        '&:active,&:focus': {
            outline: 0
        },
        '&:hover': {
            transform: 'translateY(-2px)'
        }
    },
    secondary
        ? {
              backgroundColor: theme.colors['accent-200'],
              backgroundImage: `linear-gradient(to left, ${theme.colors['accent-200']}, ${theme.colors['accent-100']})`,
              fontWeight: 'bold',
              boxShadow: [0, theme.sizes[100], theme.sizes[400], theme.colors['black']].join(' '),
              '&:hover': {
                  letterSpacing: '1px',
                  transform: 'translateY(-2px)'
              }
          }
        : null
]);
