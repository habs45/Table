/** @type {import('tailwindcss').Config} */
module.exports = {
  content:
    [
        './views/*.pug',
    ],
  theme: {
    // screens:{

    // },
    extend: {
      spacing: {
        '1.3': '1.3rem',
        '1.125':'1.125rem',
        '1.2':'1.2rem'
      },
       fontSize:{
        'custom-0.75':"0.75rem"
       },
      colors:{
        'custom-grey':'rgb(237, 239, 244)',
        'custom-voilet':'rgb(78, 38, 219)',
        'custom-border':'#e0e3eb',
        'custom-sort-color':'rgb(71, 84, 103)',
        'custom-search-border':'rgb(207, 200, 200)',
        'custom-img-border':'rgb(245, 240, 240)'
      },
      width: {
        'custom-calc': 'calc(100%-4.6rem)',
        '45':'45rem',
        'custom':'30rem'
      },
      letterSpacing:{
        'tighter':'0.2px'
      },
      borderRadius: {
        'custom': '0.625rem 0.625rem 0rem 0rem',
      },
      borderSpacing: {
        'tl-custom': '0.125rem 0.125rem 0 0',
        'tr-custom': '0.125rem 0.125rem 0 0',
        '0': '0',
      },
      width: {
        '97.5': '97.5%',
      },
      
    },

  },
  plugins: [],
}

