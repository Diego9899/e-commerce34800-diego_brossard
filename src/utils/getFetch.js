
let productlist = [
  {id: '4', name: 'Gorra "Gorriado"', category: 'gorras',stock: '88',price: '9999',  urlimg:'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg'},
  {id: '14', name: 'Playera blanca', category: 'remeras',stock: '10',price: '1499',  urlimg:'https://media1.sistemacontinuo.com.ar/5289/remera-hombre-sublimable.jpg'},
  {id: '5', name: 'La Gooorra', category: 'gorras',stock: '10',price: '1499',  urlimg:'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg'},
  {id: '6', name: 'La Goooooorra', category: 'gorras',stock: '10',price: '1499',  urlimg:'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg'},
  {id: '21', name: 'Zapatilla cebra', category: 'zapatillas',stock: '10',price: '1499',  urlimg:'https://assets.adidas.com/images/w_600,f_auto,q_auto/7b85bada2e2d4329bdd4aa3100c072a6_9366/Zapatillas_Energyfalcon_Negro_EE9843_01_standard.jpg'},
  {id: '7', name: 'La Goooooorra', category: 'gorras',stock: '10',price: '1499',  urlimg:'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg'},
  {id: '16', name: 'La blanca', category: 'remeras',stock: '10',price: '1499',  urlimg:'https://media1.sistemacontinuo.com.ar/5289/remera-hombre-sublimable.jpg'},
  {id: '8', name: 'La Goooooorra', category: 'gorras',stock: '10',price: '1499',  urlimg:'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg'},
  {id: '9', name: 'La Goooooorra', category: 'gorras',stock: '10',price: '1499',  urlimg:'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg'},
  {id: '18', name: 'BlackWhite Shoes', category: 'zapatillas',stock: '10',price: '1499',  urlimg:'https://assets.adidas.com/images/w_600,f_auto,q_auto/7b85bada2e2d4329bdd4aa3100c072a6_9366/Zapatillas_Energyfalcon_Negro_EE9843_01_standard.jpg'},
  {id: '10', name: 'La Goooooorra', category: 'gorras',stock: '10',price: '1499',  urlimg:'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg'},
  {id: '11', name: 'La Goooooorra', category: 'gorras',stock: '10',price: '1499',  urlimg:'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg'},
  {id: '12', name: 'Remera Blanca', category: 'remeras',stock: '10',price: '1499',  urlimg:'https://media1.sistemacontinuo.com.ar/5289/remera-hombre-sublimable.jpg'},
  {id: '1', name: 'Gorra Timmy', category: 'gorras',stock: '100',price: '999',  urlimg:'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg'},
  {id: '13', name: 'Blancamera', category: 'remeras',stock: '10',price: '1499',  urlimg:'https://media1.sistemacontinuo.com.ar/5289/remera-hombre-sublimable.jpg'},
  {id: '15', name: 'Retazo de tela blanca', category: 'remeras',stock: '10',price: '1499',  urlimg:'https://media1.sistemacontinuo.com.ar/5289/remera-hombre-sublimable.jpg'},
  {id: '17', name: 'Zapatilla negra', category: 'zapatillas',stock: '10',price: '1499',  urlimg:'https://assets.adidas.com/images/w_600,f_auto,q_auto/7b85bada2e2d4329bdd4aa3100c072a6_9366/Zapatillas_Energyfalcon_Negro_EE9843_01_standard.jpg'},
  {id: '2', name: 'Gorra Turner', category: 'gorras',stock: '55',price: '4000',  urlimg:'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg'},
  {id: '19', name: 'Llanta deportiva', category: 'zapatillas',stock: '10',price: '1499',  urlimg:'https://assets.adidas.com/images/w_600,f_auto,q_auto/7b85bada2e2d4329bdd4aa3100c072a6_9366/Zapatillas_Energyfalcon_Negro_EE9843_01_standard.jpg'},
  {id: '3', name: 'Gorra Rosa Full Box', category: 'gorras',stock: '2',price: '25',  urlimg:'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg'},
  {id: '20', name: 'Zapatosss', category: 'zapatillas',stock: '10',price: '1499',  urlimg:'https://assets.adidas.com/images/w_600,f_auto,q_auto/7b85bada2e2d4329bdd4aa3100c072a6_9366/Zapatillas_Energyfalcon_Negro_EE9843_01_standard.jpg'}
]

export const getFetch = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        id ? productlist.find((item) => item.id === id) : productlist
      );
    }, 1000);
  });
};