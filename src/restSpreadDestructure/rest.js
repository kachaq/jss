//ODEV October 21 ES6
let student = {
    id:1,
    name:"Yusuf",
    school:"FLCC",
    student:true
}
//console.log(student);

function save(ogrenci,puan=10) {
    //console.log(ogrenci.name + " " + puan)
}

//save(student);

let students = [
    "Yusuf Butun",
    "Osman Butun",
    "Bilal Butun"
]

//console.log(students);

let students2 = [
    student, 
    {
        id:2, name:"Andrea"  
    },
    "Bursa",
    {
        city: "istanbul"
    }
]

//console.log(students2);

//rest
let showProducts = function (id, ...products) {
    console.log(id)
    console.log(products[0])
}
// console.log (typeof showProducts)
// showProducts(10,"Elma","Armut","Karpuz")