// const obj = "/sites/MLA/search?q="


let obj = [
    {id: '1', name: 'Gorra Timmy', categoria: 'gorras',stock: '100',price: '999',  foto:'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg'},
    {id: '2', name: 'Gorra Turner', categoria: 'gorras',stock: '55',price: '4000',  foto:'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg'},
    {id: '3', name: 'Gorra Rosa Full Box', categoria: 'gorras',stock: '2',price: '25',  foto:'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg'},
    {id: '4', name: 'Gorra "Gorriado"', categoria: 'gorras',stock: '88',price: '9999',  foto:'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg'},
    {id: '5', name: 'La Goooooorra', categoria: 'gorras',stock: '10',price: '1499',  foto:'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg'},
    {id: '6', name: 'La Goooooorra', categoria: 'gorras',stock: '10',price: '1499',  foto:'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg'},
    {id: '7', name: 'La Goooooorra', categoria: 'gorras',stock: '10',price: '1499',  foto:'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg'},
    {id: '8', name: 'La Goooooorra', categoria: 'gorras',stock: '10',price: '1499',  foto:'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg'},
    {id: '9', name: 'La Goooooorra', categoria: 'gorras',stock: '10',price: '1499',  foto:'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg'},
    {id: '10', name: 'La Goooooorra', categoria: 'gorras',stock: '10',price: '1499',  foto:'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg'},
    {id: '11', name: 'La Goooooorra', categoria: 'gorras',stock: '10',price: '1499',  foto:'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg'}
]

export const getFetch = (id) =>{
    return new Promise ((resolve, reject) =>{
        setTimeout(()=>{
            resolve(id ? obj.find(item => item.id === id) : obj)
            console.log(obj);
        }, 2000)
    })
}