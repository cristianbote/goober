import { css } from 'goober';

import { forwardProp } from '../index';

describe('shouldForwardProp', () => {
    it('type', () => {
        expect(typeof forwardProp).toEqual('function');
    });

    it('forwardProp', () => {
        const fn = forwardProp((prop) => {
            // Filter out props prefixed with '$'
            return prop[0] !== '$';
        });

        const props = {
            color: 'red',
            $shouldAnimate: true
        };

        // 'render'
        fn(props);

        expect(props).toEqual({ color: 'red' });
    });
});
