const path = require('path');

const BG = path.resolve(__dirname, 'src/images/fruit.jpg');
const ducoBg = path.resolve(__dirname, 'src/images/ducoLoginBg.png');
const loginDesign = path.resolve(__dirname, 'src/images/loginDesign.png');
const dashboardBg = path.resolve(__dirname, 'src/images/Graphic Side.svg');



module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['Poppins'],
        nato: ['Noto'],
        cinzel: ['Cinzel'],
        sans: ['Roboto', 'sans-serif'],
      },
      backgroundImage: (theme) => ({
        'fruit': `url(${BG})`,
        'ducoBg':`url(${ducoBg})`,
        'loginDesign':`url(${loginDesign})`,
        'dashboardBg':`url(${dashboardBg})`,

      }),
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
            },
          },
        ],
      },
    ],
  },
  variants: {
    extend: {
      borderColor: ['focus'],
    },
  },
  plugins: [],
};
