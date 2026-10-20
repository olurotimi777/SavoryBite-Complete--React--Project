/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    colors: { orange: { 50:'#fff7ed', 100:'#ffedd5', 200:'#fed7aa', 300:'#fdba74', 400:'#fb923c', 500:'#f97316', 600:'#ea580c', 700:'#c2410c' }, charcoal:'#1f2937', cream:'#fff7ed', canvas:'#fffbf5' },
    fontFamily: { sans:['Poppins','sans-serif'], display:['Playfair Display','serif'] },
    boxShadow: { soft:'0 15px 55px rgba(38, 28, 17, .065)', float:'0 18px 50px rgba(38, 28, 17, .12)' },
    backgroundImage: { 'warm-glow':'radial-gradient(circle at 75% 12%, #ffedd5 0%, transparent 38%)' },
  } }, plugins: []
};
