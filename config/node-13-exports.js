const fs = require('fs');

const subRepositories = ['goober-autoprefixer'];

const copyGoober = () => {
    // Copy .module.js --> .mjs for Node 13 compat.
    fs.writeFileSync(
        `${process.cwd()}/dist/goober.mjs`,
        fs.readFileSync(`${process.cwd()}/dist/goober.module.js`)
    );
};

const copy = (name) => {
    // Copy .module.js --> .mjs for Node 13 compat.
    fs.writeFileSync(
        `${process.cwd()}/packages/${name}/dist/${name}.mjs`,
        fs.readFileSync(`${process.cwd()}/packages/${name}/dist/${name}.module.js`)
    );
};

copyGoober();
subRepositories.forEach(copy);
