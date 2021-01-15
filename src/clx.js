import { cache } from './core/hash';
import { update } from './core/update';
import { toHash } from './core/to-hash';
import { getSheet } from './core/get-sheet';

/**
 * clx
 * @param {String[]} classes
 */
function clx() {
    let ctx = this || {};
    let classes = [].reduce.call(arguments, (classes, c) => classes.concat(c.split(' ')), []);

    let id = toHash(classes.join(''));

    let hashedClasses = classes.reduce((hashedClasses, c) => {
        let hashedClass = c + '-' + id;

        if (cache[c]) {
            if (!cache[hashedClass]) {
                cache[hashedClass] = cache[c].replace(c, hashedClass);
                update(cache[hashedClass], getSheet(ctx.target), ctx.o);
            }
            hashedClasses.push(hashedClass);
        } else {
            hashedClasses.push(c);
        }

        return hashedClasses;
    }, []);

    return hashedClasses.join(' ');
}

export { clx };
