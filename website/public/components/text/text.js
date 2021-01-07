import { styled } from 'goober';

export const Text = styled('p')(({ theme, size, faded, accent, bold, color, mono }) => [
    {
        margin: 0,
        fontWeight: bold ? 'bold' : 'normal',
        fontSize: theme.fontSizes[size] || theme.fontSizes[200],
        color: 'currentcolor',
        lineHeight: 1.6,
        letterSpacing: '0.01em'
    },
    faded && { color: theme.colors['gray-300'] },
    accent && { color: theme.colors['accent-200'] },
    color && { color: theme.colors[color] },
    mono && { fontFamily: 'monospace' }
]);
