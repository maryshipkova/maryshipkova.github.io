module.exports = {
    plugins: [
        require('postcss-css-to-bem-css')({
            sourceNaming: 'origin',
             targetNaming: 'react'
        }),
    ],
};