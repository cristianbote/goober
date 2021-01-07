import { styled } from 'goober';

export const Button = styled('button')(({ theme, plain }) => [
    {
        display: 'flex',
        padding: [theme.sizes[300], theme.sizes[400]].join(' '),
        backgroundColor: theme.colors['accent-200'],
        color: theme.colors['white'],
        borderRadius: theme.sizes[500],
        border: 0,
        fontSize: theme.fontSizes[300],
        fontWeight: 'bold',
        cursor: 'pointer',
        boxShadow: [0, theme.sizes[100], theme.sizes[400], theme.colors['black']].join(' '),
        transition: 'transform 100ms ease-out',
        transform: 'translateY(0)',
        '&:active,&:focus': {
            outline: 0
        },
        '&:hover': {
            transform: 'translateY(-2px) scale(1.05)'
        }
    },
    plain
        ? {
              backgroundColor: theme.colors['gray-100'],
              fontWeight: 'normal',
              color: theme.colors.white,
              boxShadow: 'unset',
              '&:hover': {
                  transform: 'translateY(-2px)'
              }
          }
        : null
]);
