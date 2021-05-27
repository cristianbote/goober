import { Box } from '../box/box';
import { Text } from '../text/text';

export const Feature = ({ title, children }) => (
    <Box size={200} fill>
        <Text size={300} bold>
            {title}
        </Text>
        <Box size={200} />
        <Text size={200} faded>
            {children}
        </Text>
    </Box>
);
