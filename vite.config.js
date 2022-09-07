import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';
import { createHtmlPlugin } from 'vite-plugin-html';

export default {
    plugins: [
        handlebars({
            partialDirectory: resolve(__dirname, 'src/partials')
        }),
        createHtmlPlugin({
            minify: true,
            pages: [
                {
                    filename: 'index.html',
                    template: 'index.html',
                    injectOptions: {
                        data: {
                            title: 'Andrew Haine | Norfolk based freelance web developer and designer',
                            description: 'Creative, Norwich-based freelance developer and designer by the name of Andrew Haine - Come back soon to see my full website'
                        }
                    }
                },
                {
                    filename: '404.html',
                    template: '404.html',
                    injectOptions: {
                        data: {
                            title: 'Page not found | Andrew Haine',
                        }
                    }
                }
            ]
        })
    ],
};
