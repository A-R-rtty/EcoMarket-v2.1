const productos = [
  {
    id: 1,
    nombre: "Acondicionador Johnson´s",
    precio: 4990,
    descripcion: "Acondicionador natural para el cabello Johnson´s 400ml",
    imagen: "/images/acondicionador.jpg",
    stock: 12,
    categoria: "Acondicionador",
    beneficios:["Hidratación profunda", "Suavidad y brillo", "Fórmula natural" ,"Ingredientes naturales"],
    ingredientes: ["Agua", "Aceite de coco", "Extracto de aloe vera", "Glicerina"]
}, 
{
    id: 2,
    nombre: "Crema Beuty Secret",
    precio: 990,
    descripcion:"Crema para manos natural Beauty Secret 50ml",
    imagen: "/images/Cremamano.jpg",
    stock: 20,
    categoria: "Crema de manos",
    beneficios:["Hidratación intensiva", "Reparación de piel seca", "Fórmula natural" ,"Ingredientes naturales"],
    ingredientes: ["Agua", "Manteca de karité", "Aceite de almendra", "Vitamina E"]
},
{
    id: 3,
    nombre:"Protector solar Hawaiian Tropic",
    precio: 13190,
    descripcion:"Protector solar en polvo Hawaiian Tropic FPS 30 · 4.25g",
    imagen: "/images/cremasol.jpg",
    stock: 15,
    categoria: "Protector solar",
    beneficios:["Protección UV", "Hidratación", "Fórmula natural" ,"Ingredientes naturales"],
    ingredientes: ["Óxido de zinc", "Dióxido de titanio", "Extracto de té verde", "Vitamina C"]
},
{
    id: 4,
    nombre:"Protector solar Neutrogena",
    precio:10990,
    descripcion:"Protector solar facial Neutrogena FPS 50+ · 40ml",
    imagen:"/images/cremaSoll.jpg",
    stock: 10,
    categoria: "Protector solar",
    beneficios:["Alta protección UV", "Resistente al agua", "Fórmula ligera" ,"Ingredientes naturales"],
    ingredientes: ["Óxido de zinc", "Dióxido de titanio", "Extracto de pepino", "Vitamina E"]
},
{
    id: 5,
    nombre:"Shampoo Garnier Fructis",
    precio: 3990,
    descripcion:"Shampoo Garnier Fructis 350ml",
    imagen:"/images/Fructis.jpg",
    stock: 18,
    categoria: "Shampoo",
    beneficios:["Limpieza profunda", "Fortalecimiento del cabello", "Fórmula natural" ,"Ingredientes naturales"],
    ingredientes: ["Agua", "Extracto de frutas", "Aceite de argán", "Vitamina B5"]
},
{
    id: 6,
    nombre:"Hidratante corporal Lubridem",
    precio: 14790,
    descripcion:"Hidratante corporal Lubridem 450gr · piel extra seca",
    imagen:"/images/Hidratan.jpg",
    stock: 12,
    categoria: "Hidratante corporal",
    beneficios:["Hidratación intensiva", "Suavidad de la piel", "Fórmula natural" ,"Ingredientes naturales"],
    ingredientes: ["Agua", "Manteca de karité", "Aceite de almendra", "Vitamina E"]
},
{
    id: 7,
    nombre:"Hidratante Facial Neutrogena",
    precio: 10490,
    descripcion:"Hidratante facial Neutrogena Refill · todo tipo de piel · 50ml",
    imagen:"/images/hidratante.jpg",
    stock: 14,
    categoria: "Hidratante facial",
    beneficios:["Hidratación intensiva", "Suavidad de la piel", "Fórmula natural" ,"Ingredientes naturales"],
    ingredientes: ["Agua", "Manteca de karité", "Aceite de almendra", "Vitamina E"]
},
{
    id: 8,
    nombre:"Humectante Diario Lubridem",
    precio: 3690,
    descripcion:"Humectante diario Lubridem · 120ml",
    imagen:"/images/Humectacion.jpg",
    stock: 16,
    categoria: "Humectante",
    beneficios:["Hidratación diaria", "Piel suave y flexible", "Fórmula natural" ,"Ingredientes naturales"],
    ingredientes: ["Agua", "Manteca de karité", "Aceite de almendra", "Vitamina E"]
},
{
    id: 9,
    nombre:"Sérum L’Oréal Elvive",
    precio: 9990,
    descripcion:"Sérum L’Oréal Elvive · 100ml",
    imagen:"/images/Serum.jpg",
    stock: 11,
    categoria: "Sérum",
    beneficios:["Reparación del cabello", "Brillo intenso", "Fórmula natural" ,"Ingredientes naturales"],
    ingredientes: ["Aceite de argán", "Vitamina E", "Extracto de flores", "Siliconas ligeras"]
},
{
    id: 10,
    nombre:"Parche invisible Garnier",
    precio: 7590,
    descripcion:"Parche invisible Garnier · 22 unidades · 10mm 12mm",
    imagen:"/images/Parche.jpg",
    stock: 25,
    categoria: "Parche",
    beneficios:["Cubrimiento instantáneo", "Piel suave y natural", "Fórmula natural" ,"Ingredientes naturales"],
    ingredientes: ["Adhesivo hipoalergénico", "Extracto de aloe vera", "Vitamina E"]
},
{
    id: 11,
    nombre:"Perfume Árabe Ana Abiyedh",
    precio:19590,
    descripcion:"Perfume Árabe Ana Abiyedh Rouge EDP · 60ml",
    imagen:"/images/PerfubeArabe2.jpg",
    stock: 10,
    categoria: "Perfume Árabe",
    beneficios:["Aroma duradero", "Notas florales y amaderadas", "Fórmula natural" ,"Ingredientes naturales"],
    ingredientes: ["Aceite de jazmín", "Extracto de rosa", "Madera de sándalo", "Ámbar"]
},
{
    id: 12,
    nombre:"Perfume Árabe Armaf",
    precio: 5990,
    descripcion:"Perfume Árabe Armaf Odyssey for Men · 200ml",
    imagen:"/images/PerfubeArabe.jpg",
    stock: 15,
    categoria: "Perfume Árabe",
    beneficios:["Aroma duradero", "Notas frescas y amaderadas", "Fórmula natural" ,"Ingredientes naturales"],
    ingredientes: ["Aceite de jazmín", "Extracto de rosa", "Madera de sándalo", "Ámbar"]
},
{
    id: 13,
    nombre:"Perfume Árabe Lattafa Fakhar",
    precio: 25890,
    descripcion:"Perfume Árabe Lattafa Fakhar Gold Extrait EDP · 100ml",
    imagen:"/images/Perfume.jpg",
    stock: 10,
    categoria: "Perfume Árabe",
    beneficios:["Aroma duradero", "Notas florales y amaderadas", "Fórmula natural" ,"Ingredientes naturales"],
    ingredientes: ["Aceite de jazmín", "Extracto de rosa", "Madera de sándalo", "Ámbar"]
},
{
    id: 14,
    nombre:"Protector solar Hawaiian Tropic",
    precio: 9590,
    descripcion:"Protector solar Hawaiian Tropic Facial FPS 50+ · 50ml",
    imagen:"/images/Sol.jpg",
    stock: 20,
    categoria: "Protector solar",
    beneficios:["Alta protección UV", "Hidratación", "Fórmula ligera" ,"Ingredientes naturales"],
    ingredientes: ["Óxido de zinc", "Dióxido de titanio", "Extracto de pepino", "Vitamina E"]
},
{
    id: 15,
    nombre:"Perfume Árabe Lattafa Yara",
    precio: 34990,
    descripcion:"Perfume Árabe Lattafa Yara Tous mujer · 100ml",
    imagen:"/images/perfumearab.jpg",
    stock: 10,
    categoria: "Perfume Árabe",
    beneficios:["Aroma duradero", "Notas florales y frutales", "Fórmula natural" ,"Ingredientes naturales"],
    ingredientes: ["Aceite de jazmín", "Extracto de rosa", "Madera de sándalo", "Ámbar"]
},
];

export default productos;