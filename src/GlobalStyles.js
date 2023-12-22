var selector = 1
var GlobalStyleDefault = {}

if (selector === 1) {
  
  GlobalStyleDefault = {
    colors: {
      primary: '#F1D4D6',
      secondary: '#9384D7',
      tertiary: '#FD68B9',
      background: '#f2f2f2',
      text: '#333333',
      
    },
    fonts: {
      main: 'Roboto, sans-serif',
      heading: 'Georgia, serif',
        
      },
      fontSize: {
        smaller: "1rem",
        small: "1.2rem",
        medium: "1.4rem",
        big: "1.6rem",
        bigger: "1.8rem",
        title: "2rem"

      },
      shadows: {
        small: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        medium: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        large: '0px 8px 16px rgba(0, 0, 0, 0.3)',
        card: '10px 18px 16px rgba(0, 0, 0, 0.6)',
        banner: '10px 18px 16px rgba(0, 0, 0, 0.6)',
        footer: '0px -6px 16px rgba(0, 0, 0, 0.3)',
        
      },
    }
  }else if (selector === 2) {
  GlobalStyleDefault = {
    colors: {
      primary: 'blue',
      secondary: '#9384D7',
      tertiary: '#FD68B9',
      background: '#f2f2f2',
      text: '#333333',
      
    },
    fonts: {
      main: 'Arial, sans-serif',
        heading: 'Georgia, serif',
        
      },
      shadows: {
        small: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        medium: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        large: '0px 8px 16px rgba(0, 0, 0, 0.3)',
        footer: '0px -6px 16px rgba(0, 0, 0, 0.3)',
        
      },
    }
  }
  
  export default GlobalStyleDefault