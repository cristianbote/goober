import { core } from 'goober';

export default function clx() {
    let ctx = this || {};
    let args = [].slice.call(arguments);
    let classes = args.reduce((classes, c) => classes.concat(c.split(' ')), []);

    let id = core.toHash(args.join('$'));

    let scopedClasses = classes.map((c) => {
        let scopedClass = c + '-' + id;

        if (core.cache[c]) {
            if (!core.cache[scopedClass]) {
                core.cache[scopedClass] = core.cache[c].replace(c, scopedClass);
                core.update(core.cache[scopedClass], core.getSheet(ctx.target), ctx.o);
            }

            return scopedClass;
        }

        return c;
    });

    return scopedClasses.join(' ');
}
