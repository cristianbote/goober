import { Box } from '../box/Box';
import { Text } from '../text/Text';

export const Feature = ({ title, children, centered = false }) => (
    <Box size={200} fill centered={centered}>
        <Text size={300} bold>
            {title}
        </Text>
        <Box size={200} />
        <Text size={200} faded centered={centered}>
            {children}
        </Text>
    </Box>
);
