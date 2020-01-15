import { toHash } from '../to-hash';

describe('to-hash', () => {
    it('regression', () => {
        const res = toHash('goober');

        expect(res).toEqual('.go3054717608');
        expect(toHash('goober')).toEqual('.go3054717608');
    });

    it('collision', () => {
        const a = toHash('background:red;color:black;');
        const b = toHash('background:black;color:red;');

        expect(a === b).toBeFalsy();
    });
});
