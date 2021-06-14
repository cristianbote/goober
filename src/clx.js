import { cache } from './core/hash';
import { update } from './core/update';
import { toHash } from './core/to-hash';
import { getSheet } from './core/get-sheet';

/**
 * clx
 * @param {...String} classes
 */
function clx() {
    let ctx = this || {};
    let args = [].slice.call(arguments);
    let classes = args.reduce((classes, c) => classes.concat(c.split(' ')), []);

    let id = toHash(args.join('$'));

    let scopedClasses = classes.map((c) => {
        let scopedClass = c + '-' + id;

        if (cache[c]) {
            if (!cache[scopedClass]) {
                cache[scopedClass] = cache[c].replace(c, scopedClass);
                update(cache[scopedClass], getSheet(ctx.target), ctx.o);
            }

            return scopedClass;
        } else {
            return c;
        }
    });

    return scopedClasses.join(' ');
}

export { clx };
