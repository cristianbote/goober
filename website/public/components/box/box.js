import { styled } from 'goober';

export const Box = styled('div')(
    ({
        theme,
        bg,
        border,
        size,
        centered,
        horizontal,
        reactive,
        flex,
        full,
        fill,
        onTop,
        rounded,
        max,
        marginAuto
    }) => [
        {
            display: 'flex',
            flexShrink: 0,
            position: 'relative',
            flexDirection: horizontal ? 'row' : 'column',
            margin: 0,
            padding: theme.sizes[size] || 0,
            alignItems: centered ? 'center' : 'flex-start',
            justifyContent: centered ? 'center' : 'flex-start'
        },
        marginAuto
            ? {
                  margin: 'auto'
              }
            : null,
        rounded ? { borderRadius: theme.sizes[rounded] } : null,
        border
            ? {
                  border: `1px solid ${theme.colors[border]}`
              }
            : null,
        onTop ? { zIndex: 1 } : null,
        flex ? { flex: 1 } : null,
        full ? { width: '100%' } : null,
        fill ? { overflow: 'hidden' } : null,
        max ? { maxWidth: theme.maxWidth } : null,
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
