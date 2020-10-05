const mb = [                    /* produkt 0 */
    {
        id: 0,
        name:"Gigabyte B450 AORUS ELITE",
        price: 409,
        producent:"Gigabyte"
    },
    {
        id: 1,
        name:"MSI B450M PRO-VDH MAX",
        price: 329,
        producent:"MSI"
    },
    {
        id: 2,
        name:"MSI B450 TOMAHAWK MAX",
        price: 469,
        producent:"MSI"
    },
]
const cpu = [                    /* produkt 1 */
    {
        id: 0,
        name:"AMD Ryzen 3 3100, 3.6GHz, 16 MB, BOX",
        price: 479,
        producent:"AMD"
    },
    {
        id: 1,
        name:"Intel Core i5-9400F, 2.9GHz, 9 MB, BOX",
        price: 599,
        producent:"Intel"
    },
    {
        id: 2,
        name:"Intel Core i7-10700K, 3.8GHz, 16 MB, BOX",
        price: 1749,
        producent:"Intel"
    },
]
const gpu = [                    /* produkt 2 */
    {
        id: 0,
        name:"Gigabyte GeForce RTX 2060 OC 6GB GDDR6",
        price: 1399,
        producent:"Gigabyte"
    },
    {
        id: 1,
        name:"MSI GeForce GTX 1660 SUPER Ventus XS OC 6GB GDDR6",
        price: 1021,
        producent:"MSI"
    },
    {
        id: 2,
        name:"Gainward GeForce RTX 2060 Phoenix GS 6GB GDDR6",
        price: 1599,
        producent:"GeForce"
    },
]
const ram = [                    /* produkt 3 */
    {
        id: 0,
        name:"ADATA Gammix D10, DDR4, 16 GB, 3200MHz, CL16",
        price: 289,
        producent:"Adata"
    },
    {
        id: 1,
        name:"GoodRam IRDM, DDR4, 16 GB, 3600MHz, CL17",
        price: 319,
        producent:"GoodRam"
    },
    {
        id: 2,
        name:"Crucial Ballistix Black at DDR4 3000 DRAM Desktop Gaming Memory Kit 16GB (8GBx2) CL15",
        price: 299,
        producent:"Ballistix"
    },
]
const psu = [                    /* produkt 4 */
    {
        id: 0,
        name:"SilentiumPC Vero L3 500W",
        price: 219,
        producent:"Silentium"
    },
    {
        id: 1,
        name:"be quiet! SYSTEM POWER 9 500W",
        price: 237,
        producent:"be quiet!"
    },
    {
        id: 2,
        name:"Thermaltake Smart BM1 600W",
        price: 289,
        producent:"Thermaltake"
    },
]
var cart = [
    {
        name: 'mb',     /*cart 0 */
        price:0
    },
    {
        name: 'cpu',    /*cart 1 */
        price:0
    },
    {
        name: 'gpu',    /*cart 2 */
        price:0
    },
    {
        name: 'ram',    /*cart 3 */
        price:0
    },
    {
        name: 'psu',    /*cart 4 */
        price:0
    }
]

function addOpt(elem, optValue, textOpt) {
    let select1 = document.getElementById(elem);
    option = document.createElement("option");
    option.setAttribute("value", optValue );
    const textOption = document.createTextNode(textOpt);
    option.appendChild(textOption);
    select1.appendChild(option);
}
function SelectedItemValue(SelectId){
    const selectedItem = document.getElementById(SelectId)
    let strAtt = selectedItem.options[selectedItem.selectedIndex].getAttribute('value');
    console.log("Wybrany element ma ID: "+strAtt);

    const summaryCPU = document.getElementById("summaryCPU");
    const summaryMB = document.getElementById("summaryMB");
    const summaryGPU = document.getElementById("summaryGPU");
    const summaryRAM = document.getElementById("summaryRAM");
    const summaryPSU = document.getElementById("summaryPSU");

    if (SelectId == "mb") {
        summaryMB.innerText = mb[strAtt].name + " " + mb[strAtt].price
        cart[0].price = mb[strAtt].price
        cart[0].name = mb[strAtt].name
    }
    else if (SelectId == "cpu") {
        summaryCPU.innerText = cpu[strAtt].name + " " + cpu[strAtt].price
        cart[1].price = cpu[strAtt].price
        cart[1].name = cpu[strAtt].name
    }
    else if (SelectId == "gpu") {
        summaryGPU.innerText = gpu[strAtt].name + " " + gpu[strAtt].price
        cart[2].price = gpu[strAtt].price
        cart[2].name = gpu[strAtt].name
    }
    else if (SelectId == "ram") {
        summaryRAM.innerText = ram[strAtt].name + " " + ram[strAtt].price
        cart[3].price = ram[strAtt].price
        cart[3].name = ram[strAtt].name
    }
    else if (SelectId == "psu") {
        summaryPSU.innerText = psu[strAtt].name + " " + psu[strAtt].price
        cart[4].price = psu[strAtt].price
        cart[4].name = psu[strAtt].name
    }
    document.getElementById("sumAll").innerHTML="<b>Wartość produktów: "+ (cart[0].price+cart[1].price+cart[2].price+cart[3].price+cart[4].price)+"</b>"
}

for(let i=0; i<mb.length; i++) {
    addOpt("mb", mb[i].id, mb[i].name);
}
for(let i=0; i<cpu.length; i++) {
    addOpt("cpu", cpu[i].id, cpu[i].name);
}
for(let i=0; i<gpu.length; i++) {
    addOpt("gpu", gpu[i].id, gpu[i].name)
}
for(let i=0; i<ram.length; i++) {
    addOpt("ram", ram[i].id, ram[i].name)
}
for(let i=0; i<psu.length; i++) {
    addOpt("psu", psu[i].id, psu[i].name)
}
let summaryCompHandler = document.getElementById("summaryComp");

