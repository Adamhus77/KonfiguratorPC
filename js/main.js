const mb = [                    /* produkt 0 */
    {
        id: 0,
        name:"Gigabyte B450 AORUS ELITE",
        price: 409,
        producent:"Gigabyte",
        img: "../img/mb0.png"
    },
    {
        id: 1,
        name:"MSI B450M PRO-VDH MAX",
        price: 329,
        producent:"MSI",
        img: "../img/mb1.png"
    },
    {
        id: 2,
        name:"MSI B450 TOMAHAWK MAX",
        price: 469,
        producent:"MSI",
        img: "../img/mb2.png"
    },
]
const cpu = [                    /* produkt 1 */
    {
        id: 0,
        name:"AMD Ryzen 3 3100, 3.6GHz, 16 MB, BOX",
        price: 479,
        producent:"AMD",
        img: "../img/cpu0.png"
    },
    {
        id: 1,
        name:"Intel Core i5-9400F, 2.9GHz, 9 MB, BOX",
        price: 599,
        producent:"Intel",
        img: "../img/cpu1.png"
    },
    {
        id: 2,
        name:"Intel Core i7-10700K, 3.8GHz, 16 MB, BOX",
        price: 1749,
        producent:"Intel",
        img: "../img/cpu2.png"
    },
]
const gpu = [                    /* produkt 2 */
    {
        id: 0,
        name:"Gigabyte GeForce RTX 2060 OC 6GB GDDR6",
        price: 1399,
        producent:"Gigabyte",
        img: "../img/gpu0.png"
    },
    {
        id: 1,
        name:"MSI GeForce GTX 1660 SUPER Ventus XS OC 6GB GDDR6",
        price: 1021,
        producent:"MSI",
        img: "../img/gpu1.png"
    },
    {
        id: 2,
        name:"Gainward GeForce RTX 2060 Phoenix GS 6GB GDDR6",
        price: 1599,
        producent:"GeForce",
        img: "../img/gpu2.png"
    },
]
const ram = [                    /* produkt 3 */
    {
        id: 0,
        name:"ADATA Gammix D10, DDR4, 16 GB, 3200MHz, CL16",
        price: 289,
        producent:"Adata",
        img: "../img/ram0.png"
    },
    {
        id: 1,
        name:"GoodRam IRDM, DDR4, 16 GB, 3600MHz, CL17",
        price: 319,
        producent:"GoodRam",
        img: "../img/ram1.png"
    },
    {
        id: 2,
        name:"Crucial Ballistix Black at DDR4 3000 DRAM Desktop Gaming Memory Kit 16GB (8GBx2) CL15",
        price: 299,
        producent:"Ballistix",
        img: "../img/ram2.png"
    },
]
const psu = [                    /* produkt 4 */
    {
        id: 0,
        name:"SilentiumPC Vero L3 500W",
        price: 219,
        producent:"Silentium",
        img: "../img/psu0.png"
    },
    {
        id: 1,
        name:"be quiet! SYSTEM POWER 9 500W",
        price: 237,
        producent:"be quiet!",
        img: "../img/psu1.png"
    },
    {
        id: 2,
        name:"Thermaltake Smart BM1 600W",
        price: 289,
        producent:"Thermaltake",
        img: "../img/psu2.png"
    },
]
const hdd = [                    /* produkt 5 */
    {
        id: 0,
        name:"Seagate Barracuda 1 TB 3.5 SATA III",
        price: 179,
        producent:"Seagate",
        img: "../img/hdd0.png"
    },
    {
        id: 1,
        name:"Western Digital Blue 1 TB 2.5 SATA III",
        price: 225,
        producent:"WD",
        img: "../img/hdd1.png"
    },
    {
        id: 2,
        name:"Toshiba L200 1 TB 2.5 SATA III",
        price: 289,
        producent:"Toshiba",
        img: "../img/hdd2.png"
    },
]
const cas = [                    /* produkt 6 */
    {
        id: 0,
        name:"SilentiumPC Signum SG7V Evo TG ARGB",
        price: 389,
        producent:"Silentum",
        img: "../img/cas0.png"
    },
    {
        id: 1,
        name:"Fractal Design Meshify C TG",
        price: 409,
        producent:"Meshify",
        img: "../img/cas1.png"
    },
    {
        id: 2,
        name:"MSI MAG Forge 100M",
        price: 209,
        producent:"MSI",
        img: "../img/cas2.png"
    },
]
const viv = [                    /* produkt 7 */
    {
        id: 0,
        name:"Samsung S24R350",
        price: 529,
        producent:"Samsung",
        img: "../img/viv0.png"
    },
    {
        id: 1,
        name:"Acer Nitro VG240Ybmiix",
        price: 568,
        producent:"Acer",
        img: "../img/viv1.png"
    },
    {
        id: 2,
        name:"LG 27GL850-B ",
        price: 2149,
        producent:"LG",
        img: "../img/viv2.png"
    },
]
const sys = [                    /* produkt 8 */
    {
        id: 0,
        name:"Microsoft Windows 10 Home PL 64 bit OEM",
        price: 489,
        producent:"Microsoft",
        img: "../img/sys0.png"
    },
    {
        id: 1,
        name:"Microsoft Windows 10 Professional PL 64 bit OEM",
        price: 639,
        producent:"Microsoft",
        img: "../img/sys1.png"
    },
    {
        id: 2,
        name:"Microsoft Windows 10 Professional PL 32 bit 64 bit BOX",
        price: 1045,
        producent:"Microsoft",
        img: "../img/sys2.png"
    },
]
const ant = [                    /* produkt 9 */
    {
        id: 0,
        name:"Kaspersky Lab Anti-Virus 2019 Polish Edition 1-Desktop 1 year + METAL POSTER",
        price: 59,
        producent:"Kaspersky",
        img: "../img/ant0.png"
    },
    {
        id: 1,
        name:"NORTON 360 DELUXE 25GB PL 1 User 3 Device 1Year",
        price: 99,
        producent:"Norton",
        img: "../img/ant1.png"
    },
    {
        id: 2,
        name:"ESET Security Pack",
        price: 131,
        producent:"ESET",
        img: "../img/ant2.png"
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
    },
    {
        name: 'hdd',    /*cart 5 */
        price:0
    },
    {
        name: 'cas',    /*cart 6 */
        price:0
    },
    {
        name: 'viv',    /*cart 7 */
        price:0
    },
    {
        name: 'sys',    /*cart 8 */
        price:0
    },
    {
        name: 'ant',    /*cart 9 */
        price:0
    },
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
    const summaryHDD = document.getElementById("summaryHDD");
    const summaryCAS = document.getElementById("summaryCAS");
    const summaryVIV = document.getElementById("summaryVIV");
    const summarySYS = document.getElementById("summarySYS");
    const summaryANT = document.getElementById("summaryANT");

    if (SelectId == "mb") {
        summaryMB.innerHTML = "<td><img src='img/"+mb[strAtt].img+"'></td><td>"+mb[strAtt].name+"</td><td>"+mb[strAtt].price+"</td>"
        cart[0].price = mb[strAtt].price
        cart[0].name = mb[strAtt].name
    }
    else if (SelectId == "cpu") {
        summaryCPU.innerHTML = "<td><img src='img/"+cpu[strAtt].img+"'></td><td>"+cpu[strAtt].name+"</td><td>"+cpu[strAtt].price+"</td>"
        cart[1].price = cpu[strAtt].price
        cart[1].name = cpu[strAtt].name
    }
    else if (SelectId == "gpu") {
        summaryGPU.innerHTML = "<td><img src='img/"+gpu[strAtt].img+"'></td><td>"+gpu[strAtt].name+"</td><td>"+gpu[strAtt].price+"</td>"
        cart[2].price = gpu[strAtt].price
        cart[2].name = gpu[strAtt].name
    }
    else if (SelectId == "ram") {
        summaryRAM.innerHTML = "<td><img src='img/"+ram[strAtt].img+"'></td><td>"+ram[strAtt].name+"</td><td>"+ram[strAtt].price+"</td>"
        cart[3].price = ram[strAtt].price
        cart[3].name = ram[strAtt].name
    }
    else if (SelectId == "psu") {
        summaryPSU.innerHTML = "<td><img src='img/"+psu[strAtt].img+"'></td><td>"+psu[strAtt].name+"</td><td>"+psu[strAtt].price+"</td>"
        cart[4].price = psu[strAtt].price
        cart[4].name = psu[strAtt].name
    }
    else if (SelectId == "hdd") {
        summaryHDD.innerHTML = "<td><img src='img/"+hdd[strAtt].img+"'></td><td>"+hdd[strAtt].name+"</td><td>"+hdd[strAtt].price+"</td>"
        cart[5].price = hdd[strAtt].price
        cart[5].name = hdd[strAtt].name
    }
    else if (SelectId == "cas") {
        summaryCAS.innerHTML = "<td><img src='img/"+cas[strAtt].img+"'></td><td>"+cas[strAtt].name+"</td><td>"+cas[strAtt].price+"</td>"
        cart[6].price = cas[strAtt].price
        cart[6].name = cas[strAtt].name
    }
    else if (SelectId == "viv") {
        summaryVIV.innerHTML = "<td><img src='img/"+viv[strAtt].img+"'></td><td>"+viv[strAtt].name+"</td><td>"+viv[strAtt].price+"</td>"
        cart[7].price = viv[strAtt].price
        cart[7].name = viv[strAtt].name

    }
    else if (SelectId == "sys") {
        summarySYS.innerHTML = "<td><img src='img/"+sys[strAtt].img+"'></td><td>"+sys[strAtt].name+"</td><td>"+sys[strAtt].price+"</td>"
        cart[8].price = sys[strAtt].price
        cart[8].name = sys[strAtt].name

    }
    else if (SelectId == "ant") {
        summaryANT.innerHTML = "<td><img src='img/"+ant[strAtt].img+"'></td><td>"+ant[strAtt].name+"</td><td>"+ant[strAtt].price+"</td>"
        cart[8].price = ant[strAtt].price
        cart[8].name = ant[strAtt].name

    }
    document.getElementById("sumAll").innerHTML="<b>Wartość produktów: "+ (cart[0].price+cart[1].price+cart[2].price+cart[3].price+cart[4].price+cart[5].price+cart[6].price+cart[7].price+cart[8].price+cart[9].price)+"</b>"
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
for(let i=0; i<hdd.length; i++) {
    addOpt("hdd", hdd[i].id, hdd[i].name)
}
for(let i=0; i<cas.length; i++) {
    addOpt("cas", cas[i].id, cas[i].name)
}
for(let i=0; i<viv.length; i++) {
    addOpt("viv", viv[i].id, viv[i].name)
}
for(let i=0; i<sys.length; i++) {
    addOpt("sys", sys[i].id, sys[i].name)
}
for(let i=0; i<ant.length; i++) {
    addOpt("ant", ant[i].id, ant[i].name)
}
let summaryCompHandler = document.getElementById("summaryComp");

