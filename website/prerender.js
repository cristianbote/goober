import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { locationStub } from 'preact-iso/prerender';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Routes to prerender
const routes = ['/', '/the-great-shave-off'];

async function prerenderRoutes() {
    // Import the built server entry
    const { prerender } = await import('./dist/server/main.js');

    // Read the built index.html template
    const template = readFileSync(join(__dirname, 'dist/index.html'), 'utf-8');

    for (const route of routes) {
        console.log(`Prerendering ${route}...`);

        // Set up location stub for SSR
        locationStub(route);

        // Prerender the route
        const result = await prerender({ url: route });

        // Inject the HTML into the template
        let html = template.replace('<!--app-html-->', result.html || '');

        // Determine output path
        const outputPath =
            route === '/'
                ? join(__dirname, 'dist/index.html')
                : join(__dirname, 'dist', route, 'index.html');

        // Create directory if needed
        const outputDir = dirname(outputPath);
        if (!existsSync(outputDir)) {
            mkdirSync(outputDir, { recursive: true });
        }

        // Write the file
        writeFileSync(outputPath, html);
        console.log(`  Written to ${outputPath}`);
    }

    console.log('Prerendering complete!');
}

prerenderRoutes().catch(console.error);
