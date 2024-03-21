// **********************************
// Time line

// array
const historia = [
    {
        name:"2018",
        description:"Having finished my studies at the Churchill Institute, I take and pass the First Certificate in English exam, achieving a B2 level of English."
    },
    {
        name:"2019",
        description:"I finish the secondry school getting the Electronics Technician degree"
    },
    {
        name:"2020",
        description:"Living the covid-19 pandemic, I started some courses of web development in Udemy, some basic concepts, html, css..."
    },
    {
        name:"2021",
        description:"I started my career as a systems analyst at the Rosario Polytechnic Higher Institute, passing all 1st year subjects"
    },
    {
        name:"2022",
        description:"I continue my studies at the faculty, some of the approved contents are: object oriented programming with Java, relational databases, SQL, statistics and probability."
    },
    {
        name:"2023",
        description:"Interested in other areas of the IT world, and taking advantage of the infinite quality content available on the Internet, I began courses such as the Python for Everyone Specialization (from the University of Michigan), Introduction to Statistics (Harvard University) and Data Science Specialization (IBM)."
    },
    {
        name:"2024",
        description:"After completing some of the courses, I changed my career to a degree in artificial intelligence at the National University of Rosario, to fully immerse myself in the world of data science."
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