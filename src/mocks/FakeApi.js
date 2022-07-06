
const prods = [
    { id: 1, image: "#", title: "Pan" , description: "Loremmm", price: 60},
    { id: 2, image: "#", title: "Pan Casero", description: "Loremmm", price: 60 },
    { id: 3, image: "#", title: "Pan Salvado", description: "Loremmm", price: 60 },
    { id: 3, image: "#", title: "Facturas", description: "Loremmm", price: 60 },
];


  export const getData = new Promise ((resolve, reject) =>{
    //acciones
    let condition = true
    setTimeout(()=>{
      if(condition){
        resolve(products)
      }else{
        reject('salio mal :(')
      }
    },3000)
  })