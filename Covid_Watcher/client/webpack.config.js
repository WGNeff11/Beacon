const path = require('path');
module.exports = {
  mode: "development",
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      }, 
      {
          test: /\.s[a|c]ss$/,
          loader: 'style!css!sass'
      }
    ],
    rules: [
      // SASS has different line endings than SCSS
      // and cannot use semicolons in the markup
      // {
      //   test: /\.sass$/,
      //   use: [
      //     'vue-style-loader',
      //     'css-loader',
      //     {
      //       loader: 'sass-loader',
      //       // Requires sass-loader@^7.0.0
      //       options: {
      //         // This is the path to your variables
      //         data: "@import '@/styles/_variables.scss'"
      //       },
      //       // Requires sass-loader@^8.0.0
      //       options: {
      //         // This is the path to your variables
      //         prependData: "@import '@/styles/_variables.scss'"
      //       },
      //     },
      //   ],
      // },
      // SCSS has different line endings than SASS
      // and needs a semicolon after the import.
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            // Requires sass-loader@^7.0.0
            // options: {
            //   // This is the path to your variables
            //   data: "@import '@/styles/variables.scss';"
            // },
            // Requires sass-loader@^8.0.0
            options: {
              // This is the path to your variables
              prependData: "@import '@/styles/_variables.scss';"
            },
          },
        ],
      },
    ],
  },
  vue: {
    loaders: {
      scss: 'style!css!sass'
    }
  }

}