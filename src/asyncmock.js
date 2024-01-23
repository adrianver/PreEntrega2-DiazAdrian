const productos = [
{id: "1", nombre: "Literatura infantil", precio: 5500, img: "../img/LITERATURA INFANTIL.jpeg", idCat: "1" , parrafo: "La literatura infantil es un género literario dirigido específicamente a niños y niñas, abordando temáticas, estilos y enfoques adaptados a su edad y nivel de comprensión. Su principal objetivo es estimular el interés por la lectura desde una edad temprana, fomentar el desarrollo del lenguaje, la imaginación y valores positivos."},
{id: "2", nombre: "Lengua y Literatura", precio: 18000 , img: "../img/literatura.jpeg", idCat: "1", parrafo: "Se centra en la apreciación y el análisis de obras literarias. Los estudiantes exploran diferentes géneros, períodos y estilos literarios, analizando textos clave para comprender mejor la función del lenguaje en la expresión artística. Esto incluye la interpretación de poemas, novelas, cuentos, ensayos y otras formas literarias."},
{id: "3", nombre: "Cien años de Soledad", precio:25000 , img: "../img/literatura1.jpeg", idCat: "1", parrafo: "Explora temas como el amor, la guerra, la política, la soledad y el paso del tiempo. La narrativa combina elementos realistas y mágicos en un estilo conocido como realismo mágico, donde lo fantástico se presenta de manera natural y cotidiana."},
{id: "4", nombre: "Escritos sobre la literatura Argentina", precio: 30000, img: "../img/literatura2.jpeg", idCat: "1", parrafo: "Trata de una compilación de ensayos, críticas literarias o reflexiones de diferentes autores sobre la literatura argentina."},
{id: "5", nombre: "La literatura nazi en Argentina", precio: 45000 , img: "../img/literatura3.jpeg", idCat: "1", parrafo: "Se refiere a la producción literaria de aquellos escritores argentinos que simpatizaron o expresaron apoyo hacia el nazismo durante el período de la Segunda Guerra Mundial (1939-1945). Es importante tener en cuenta que, aunque hubo individuos con simpatías nazis en Argentina en ese momento, la mayoría de los escritores y la sociedad en general no compartían estas ideas."},
{id: "6", nombre: "Humanos sin Recursos", precio: 20000, img: "../img/humanidades.jpeg", idCat: "2", parrafo: "Referido a la escasa preparación que invierte las empresas en los Recursos Humanos"},
{id: "7", nombre: "Ciencia de la Educacion", precio: 10000, img: "../img/humanidades1.jpeg", idCat: "2", parrafo: "Es un libro que aborda diversos aspectos de la teoría y la práctica educativa."},
{id: "8", nombre: "La Naturaleza Humana", precio: 12500, img: "../img/humanidades2.jpeg", idCat: "2", parrafo: "Obra literaria que aborda el tema de la naturaleza humana desde diferentes perspectivas."},
{id: "9", nombre: "Conflicto de interés en los negocios", precio: 15000, img: "../img/humanidades3.jpeg", idCat: "2", parrafo: "Se refiere a situaciones en las cuales un individuo o entidad tiene intereses que podrían entrar en conflicto con los objetivos o responsabilidades que se le han encomendado. "},
{id: "10", nombre: "La Ciencia Pop", precio: 27000, img: "../img/ciencia.jpeg", idCat: "3", parrafo: "se refiere a situaciones en las cuales un individuo o entidad tiene intereses que podrían entrar en conflicto con los objetivos o responsabilidades que se le han encomendado. "},
{id: "11", nombre: "El Génesis y la ciencia", precio: 18000, img: "../img/ciencia1.jpeg", idCat: "3", parrafo: "Se refiere la discusión que aborda la intersección entre la creación bíblica según el libro del Génesis y las explicaciones científicas sobre el origen del universo y la vida. "},
{id: "12", nombre: "A vivir de la Ciencia", precio: 12000, img: "../img/ciencia2.jpeg", idCat: "3", parrafo: "Trabajo referido al ambito de la ciencia."},
{id: "13", nombre: "La Ciencia de hacerse Rico", precio: 33000, img: "../img/ciencia3.jpeg", idCat: "3", parrafo: "Es un clásico de la literatura de autoayuda y desarrollo personal que se centra en la filosofía de la prosperidad y la creación de riqueza."},
{id: "14", nombre: "Secretos Vivientes", precio: 17500, img: "../img/juvenil.jpeg", idCat: "4", parrafo: "Son diferentes perspectivas, interpretaciones o enfoques que podrían enriquecer tu escritura y hacerla más interesante."},
{id: "15", nombre: "Maneras de Vivir", precio: 9500, img: "../img/juvenil1.jpeg", idCat: "4", parrafo: "Es un libro que explora temas relacionados con la vida, la sociedad, la cultura o la filosofía."},
{id: "16", nombre: "La Formula para encontrar el amor de tu vida", precio: 45000, img: "../img/juvenil2.jpeg", idCat: "4", parrafo: "Aborda la relacion sentimental de los adolescentes "},
{id: "17", nombre: "El modelo Coach", precio: 21000, img: "../img/juvenil3.jpeg", idCat: "4", parrafo: "Las fundamentales prácticas y principios del coaching, ofreciendo una guía completa para aquellos que buscan maximizar su potencial y alcanzar sus metas. "},
{id: "18", nombre: "El estilo de vida Saludable", precio: 17000, img: "../img/estilodevida.jpeg", idCat: "5", parrafo: "Abarca prácticas y elecciones diarias destinadas a mejorar la salud física, mental y emocional. Este enfoque implica adoptar hábitos que promueven el bienestar general y previenen enfermedades. "},
{id: "19", nombre: "Ser Fitness", precio: 12000, img: "../img/estilodevida1.jpeg", idCat: "5", parrafo: "Explica el enfoque de vida centrado en la salud y el bienestar físico, que va más allá de simplemente hacer ejercicio y abarca una mentalidad holística hacia el cuidado personal."},
{id: "20", nombre: "Clave para un estilo saludable", precio: 25000, img: "../img/estilodevida2.jpeg", idCat: "5", parrafo: "Es una obra que busca proporcionar las herramientas esenciales y los principios fundamentales para cultivar un enfoque de vida que promueva la salud y el bienestar"},
{id: "21", nombre: "Práctica Bienestar", precio: 8500, img: "../img/estilodevida3.jpeg", idCat: "5", parrafo: "Es una guía que te lleva más allá de la teoría del bienestar, proporcionando herramientas y estrategias prácticas para integrar hábitos saludables en tu vida diaria. "},
] 

export const getProductos = () => {
return new Promise ((resolve)=> {
setTimeout ( ()=> {
resolve (productos);
}, 2000)
})
}

export const getUnProducto = (id) => {
return new Promise(resolve=> {
setTimeout (()=> {
const producto = productos.find(prod=> prod.id ===id);
resolve (producto);
}, 2000 )
})
}


export const getProductosPorCategoria = (idCategory)=> {
return new Promise (resolve=>{
setTimeout ( ()=> {
const productosCategoria = productos.filter (prod=>prod.idCat===idCategory)
resolve (productosCategoria);
},2000)
})
}