module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  safelist: ['btn-sm', 'btn-primary', 'btn-secondary', 'btn-accent', 'btn-xs', 'btn-md', 'btn-lg'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
