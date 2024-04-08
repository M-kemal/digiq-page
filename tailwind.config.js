/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      header: ['Merriweather Light', 'Merriweather Regular'],
      body: ['Inter-600', 'Inter-Semibold']
    },
    extend: {
      gridTemplateColumns: {
        auto: 'repeat( auto-fit, minmax(10px, 1fr) )'
      },
      screens: {
        h4: '400px',
        h6: '600px',
        h8: '800px',
        k1: '1000px',
        k11: '1100px',
        k12: '1200px',
        k13: '1300px',
        k14: '1400px',
        k15: '1500px',
        k16: '1600px',
        k18: '1800px',
        k2: '2000px',
        k22: '2200px',
        k24: '2400px',
        k25: '2500px',
        k26: '2600px',
        k28: '2800px',
        k3: '3000px',
        k32: '3200px',
        k34: '3400px',
        k35: '3500px',
        k36: '3600px',
        k38: '3800px',
        k4: '4000px',
        k42: '4200px',
        k44: '4400px'
      },
      colors: {
        titleBackground: '#3D3D67',
        cvblue: '#002395',
        parisGreen: '#50c878',
        neutral: '#e5e7eb',
        diversity: '#6434E9',
        standardization: '#2C7CE5',
        representation: '#49CC5C',
        innovation: '#EDB407',
        access: '#FB6640',
        communication: '#F82553',
        // firstColor: "#e1b254",
        firstColor: '#d8ab4e',
        secondColor: '#040404',
        firstColor2: '#3d3d3f'
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'translateX(0px)' },
          '33%': { transform: 'translateX(10px)' },
          '66%': { transform: 'translateX(-4px)' },
          '100%': { transform: 'translateX(0px)' }
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 100 }
        },
        fadeInSlide: {
          '0%': { opacity: 0 },
          '100%': { opacity: 100 }
        },
        rotate: {
          '0%': { transform: 'rotate(0)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        leftLine: {
          '0%': { transform: 'scaleX(0.4)', 'transform-origin': '0% 0%' },
          '100%': { transform: 'scaleX(1)', 'transform-origin': '0% 0%' }
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out',
        fadeIn: 'fadeIn 0.2s ease-in-out forwards',
        fadeInSlide: 'fadeIn 0.7s ease-in-out forwards',
        rotate: 'rotate 0.6s ease-in-out both',
        leftLine: 'leftLine 1.7s  cubic-bezier(0.390, 0.575, 0.565, 1.000) both'
      }
    }
  },
  plugins: []
}
