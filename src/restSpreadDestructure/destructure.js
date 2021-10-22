
//destructure
let populations = [10000,20000,30000,[40000,100000]]
let [small,medium,high,[xhigh,mxhigh]] = populations
console.log(small)
console.log(medium)
console.log(high)
console.log(xhigh)
console.log(mxhigh)

function someFunctions([medium1,small1],number) {
    console.log(medium1,small1)
}
someFunctions(populations)

let category = {id:1, name:"Icecek"}
console.log(category.id)
console.log(category["name"])

let{id,name} = category
console.log(id)
console.log(name)

//redux