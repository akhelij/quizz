module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {               
        '1/12': '8vh',                   
        '2/12': '16vh', 
        '3/12': '24vh',                    
        '4/12': '32vh',                    
        '5/12': '40vh', 
        '6/12': '50vh',              
        '7/12': '58vh',              
        '8/12': '66vh',              
        '9/12': '74vh',                 
        '10/12': '82vh',              
        '11/12': '90vh',
        'extra': '130vh'
      },
      maxHeight: {               
        '1/12': '8vh',                   
        '2/12': '16vh', 
        '3/12': '24vh',                    
        '4/12': '32vh',                    
        '5/12': '40vh', 
        '6/12': '50vh',              
        '7/12': '58vh',              
        '8/12': '66vh',              
        '9/12': '74vh',                 
        '10/12': '82vh',              
        '11/12': '90vh',
        'extra': '130vh'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // ...
    require('tailwind-scrollbar'),
  ],
}
