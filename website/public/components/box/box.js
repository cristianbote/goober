import { styled } from 'goober';

export const Box = styled('div')(
    ({ theme, bg, size, centered, horizontal, reactive, flex, full, onTop, rounded, max }) => [
        {
            display: 'flex',
            flexShrink: 0,
            flexDirection: horizontal ? 'row' : 'column',
            margin: 0,
            padding: theme.sizes[size] || 0,
            alignItems: centered ? 'center' : 'flex-start',
            justifyContent: centered ? 'center' : 'flex-start'
        },
        rounded ? { borderRadius: theme.sizes[rounded] } : null,
        onTop ? { zIndex: 1 } : null,
        flex ? { flex: 1 } : null,
        full ? { width: '100%' } : null,
        max ? { maxWidth: theme.widthSmall } : null,
        bg && { backgroundColor: theme.colors[bg] },
        reactive
            ? {
                  flexDirection: 'row',
                  [`@media all and (max-width: ${theme.widthSmall})`]: {
                      flexDirection: 'column'
                  }
              }
            : null
    ]
);
