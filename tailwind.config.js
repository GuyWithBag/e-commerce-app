/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      screens: {
        lg2: '1250px'
      }, 
      width: {
        productCard: '175px', 
        productCardsm: '150px', 
        flashSaleProductCard: '155px', 
        flashSaleProductCardsm: '100px', 
        categoryCard: '135px', 
        categoryCardsm: '75px', 
      },
      height: {
        productCard: '290px', 
        productCardsm: '275px', 
        flashSaleProductCard: '240px', 
        flashSaleProductCardsm: '195px', 
        categoryCard: '135px', 
        categoryCardsm: '75px', 
      }, 
      fontSize: {

      }
    },
  },
  plugins: [],
}

