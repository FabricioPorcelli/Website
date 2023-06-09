// **********************************
// Time line

// array
const historia = [
    {
        name:"1.",
        description:"Había una vez un joven apasionado por la programación. Desde muy temprana edad, dedicó horas interminables a estudiar lenguajes de programación y desarrollar sus habilidades informáticas. Su esfuerzo y dedicación dieron sus frutos cuando consiguió un empleo en una prestigiosa empresa tecnológica."
    },
    {
        name:"2.",
        description:"El peronismo resurgió con fuerza y nuevas políticas económicas se implementaron. El peso de los impuestos aumentó drásticamente y las regulaciones laborales se volvieron más restrictivas. La empresa en la que trabajaba se vio obligada a reducir costos y comenzaron los despidos masivos."
    },
    {
        name:"3.",
        description:"El programador, junto a muchos otros empleados, fue despedido y se encontró en una situación desfavorable. La falta de oportunidades y la inflación galopante hicieron estragos en su economía personal. Pronto, se vio obligado a vender sus pertenencias y buscar alternativas para subsistir."
    },
    {
        name:"4.",
        description:"A pesar de su talento y experiencia, el programador luchaba por encontrar empleo en un mercado laboral cada vez más precario. Sus habilidades, que antes eran altamente valoradas, ahora parecían perder relevancia ante la crisis económica y las políticas gubernamentales desastrosas de los peronchos."
    },
    {
        name:"5.",
        description:"Así, el programador que una vez soñó con un futuro próspero y exitoso, se encontraba sumido en la pobreza y la incertidumbre. Sin embargo, no se dio por vencido. Siguió actualizándose y adaptándose a las nuevas demandas del mercado, esperando que algún día las circunstancias cambien y pueda retomar su camino hacia la prosperidad."
    },
    {
        name:"6.",
        description:"Obviamente esto no fue generado por IA... no para nada..."
    }

]

// render html

var html = "";
historia.forEach(e=>{
    html +="<div class='child'><div class='content'><p>"+e.name+"</p><p>"+e.description+"</p></div></div>"
})
timeline.innerHTML = html

// animacion timeline
// var _items = document.querySelectorAll(".child")
// _items.forEach(element=>{
//     if(element.offsetTop < 300)
//         element.classList.add('_show')
// })

// window.addEventListener("scroll",e=>{
//     var scroll = document.documentElement.scrollTop
//     var items = document.querySelectorAll(".child")
//     items.forEach(elem=>{
//         if(elem.offsetTop - window.innerHeight/2 < scroll){
//             elem.classList.remove('_hide')
//             elem.classList.add('_show')
//         }
//         else{
//             elem.classList.remove('_show')
//             elem.classList.add('_hide')
//         }
//     })
// })

// **********************************