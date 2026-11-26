import fs from 'fs';
import path from 'path';

/**
 * The cjs, esm and umd builds keep ES2020 syntax as written. `??` and `?.`
 * there break webpack 4 (it reads the `module` field), Node < 14 and
 * browsers from before 2020, so the source must not use them.
 */
describe('source syntax', () => {
    const root = path.join(__dirname, '..');
    const files = ['css.js', 'styled.js', 'index.js'].concat(
        fs
            .readdirSync(path.join(root, 'core'))
            .filter((f) => f.endsWith('.js'))
            .map((f) => 'core/' + f)
    );

    it.each(files)('%s has no nullish coalescing or optional chaining', (file) => {
        expect(fs.readFileSync(path.join(root, file), 'utf8')).not.toMatch(/\?\?|\?\.(?!\d)/);
    });
});
