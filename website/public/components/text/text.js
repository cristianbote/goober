import { styled } from 'goober';

export const Text = styled('p')(
    ({ theme, size, faded, accent, ph, pl, pr, bold, color, mono, spaced, superSpaced }) => [
        {
            margin: 0,
            fontWeight: bold ? 'bold' : 'normal',
            fontSize: theme.fontSizes[size] || theme.fontSizes[200],
            color: 'currentcolor',
            lineHeight: 1.6
        },
        ph && { padding: `0 ${theme.sizes[ph]}` },
        pl && { paddingLeft: theme.sizes[pl] },
        pr && { paddingRight: theme.sizes[pr] },
        faded && { color: theme.colors['gray-300'] },
        accent && { color: theme.colors['accent-200'] },
        color && { color: theme.colors[color] },
        mono && { fontFamily: 'monospace' },
        mono && { fontFamily: 'monospace' },
        spaced && { letterSpacing: '0.01em' },
        superSpaced && { letterSpacing: '0.05em' }
    ]
);
