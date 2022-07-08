
const productos = [
    { id: 1, image: "https://i.postimg.cc/25fDmjxp/the-french-bread-5357423-640.jpg", title: "Pan" , description: "Loremmm", price: 60, category: "salado", stock: 20 },
    { id: 2, image: "https://i.postimg.cc/653FHgfn/bread-5220161-640.jpg", title: "Pan Casero", description: "Loremmm", price: 60, category: "salado", stock: 20},
    { id: 3, image: "https://i.postimg.cc/LXxKztFR/loaf-6246768-640.jpg", title: "Pan Salvado", description: "Loremmm", price: 60, category: "salado", stock: 20},
    { id: 4, image: "https://i.postimg.cc/hjDRzCwp/croissant-3836578-640.jpg", title: "Facturas", description: "Loremmm", price: 60, category: "dulce", stock: 20 },
    { id: 5, image: "https://i.postimg.cc/pdYtdN0m/cupcakes-2285209-640.jpg", title: "Muffins", description: "Loremmm", price: 60, category: "dulce", stock: 20 },
    { id: 6, image: "https://i.postimg.cc/pdh2gyQQ/cake-1284548-640.jpg", title: "Tortas", description: "Loremmm", price: 60, category: "dulce", stock: 20 },
    { id: 7, image: "https://i.postimg.cc/Vkt830nB/american-1239081-640.jpg", title: "Pizza", description: "Loremmm", price: 60, category: "pizza", stock: 20 },
    { id: 8, image: "https://i.postimg.cc/nh1Rp12p/pizza-1202775-640.jpg", title: "Pizza Especial", description: "Loremmm", price: 60, category: "pizza", stock: 20 },
    { id: 9, image: "https://i.postimg.cc/GphM2sgY/pizza-1344720-640.jpg", title: "Pizza Calabresa", description: "Loremmm", price: 60, category: "pizza", stock: 20 },
];




  export const getProds = (categoryId) => {
    return new Promise((resolve, reject) => {
        const productosFiltrados = productos.filter(
            (prod) => prod.category === categoryId
        );
        setTimeout(() => {
            categoryId ? resolve(productosFiltrados) : resolve(productos);
        }, 1000);
    });
};

export const getProd = (id) => {
    return new Promise((resolve, reject) => {
        const productoEncontrado = productos.find(
            (prod) => prod.id === Number(id)
        );
        setTimeout(() => {
            resolve(productoEncontrado);
        }, 1000);
    });
};


/* 
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
  }) */
