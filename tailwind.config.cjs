/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '16px'
      },
      navContainer: {
        center: true,
        padding: '8px'
      },
      spacing: {
        '128': '1280px',
        '144': '1440px',
        '133': '1336px',
      },
      colors: {
        'primaryBG'   : '#121526',
        'secondaryBG' : '#1C234F',
        'hilight'     : '#52598A',
        'fontColor'   : '#ffffff',
        'cardColor'   : '#2C3673',
        'buttonColor' : '#475DCC',
        'trmColor'    : '#303457',
        'trmUserColor': '#8890CA',
        'trmCmdColor' : '#94CBFF',
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'display': ['Poppins'],
        'terminal': ['"JetBrains Mono"'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
