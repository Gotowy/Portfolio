const path = require('path'); // importuje moduł path w node.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/index.ts', // ścieżka relatywna względem pliku webpack.config.js
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
            inject: "body",
            // scriptLoading: "module"
        })
    ],
    module: { // instrukcje dla postępowania z modułami (plkikami) w projekcie.
        rules: [
            {
                test: /\.ts$/i,
                use: 'ts-loader', // jak nazwa pliku przejdzie test, to zostanie zastosowane na nim use.
                include: [path.resolve(__dirname, 'src')] // z jakich lokalizacji pliki mają być uwzględniane (ścieżka bezwzględna).
            },
            {
                test: /\.html$/i,
                use: 'html-loader',
                include: [path.resolve(__dirname, 'src')]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [ // Module loaders can be chained. Each loader in the chain applies transformations to the processed resource. A chain is executed in reverse order. The first loader passes its result (resource with applied transformations) to the next one, and so forth. Finally, webpack expects JavaScript to be returned by the last loader in the chain.
                    "style-loader", //3. Creates `style` nodes from JS strings (Inject styles into DOM).
                    "css-loader", //2. Translates CSS into CommonJS.
                    "sass-loader" //1. Compiles Sass to CSS.
                ],
                include: [path.resolve(__dirname, 'src')]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', 'html'] // jakiego typu pliki może importować/exportować.
    },
    output: {
        // publicPath: 'public', // gdzie ma publikować bieżąco kompilowany kod z pamięci (ścieżka relatywna).
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public') // ścieżka bezwzględna dla wypluwanego bundla tworzona dzięki metodzie resolve(). __dirname znajduje bezwzględną ścieżkę do pliku webpack.config.js, drugi parametr wymagany jest do utworzenia pozostałej część bezwzględnej ścieżki.
    }
}