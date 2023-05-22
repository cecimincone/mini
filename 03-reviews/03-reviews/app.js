
//objeto 

// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
]


// traer referencias de dom que vamos a necesitar
//botones
const prevBtn = document.querySelector (".prev-Btn")
const nextBtn = document.querySelector (".next-Btn")
const randomBtn = document.querySelector (".random-Btn")

//elementos graficos
const img = document.getElementById("person-img");
const autor = document.getElementById("autor");
const job = document.getElementById("job");
const info = document.getElementById("info");

//necesitamos saber el reviuw que se está mostrando persona
let currentReview = 0
showReview(currentReview); 

//evento que se ejecuta al cargar la paginacuanto js en head
window.addEventListener()
showPerson();

//crear un funcion que muestre la review

function showPerson(reviewIndex){
//rellenamos clos elementos con los datos de la reviw
//del indece que pasemos como parametro
autor.item= reviews[reviewsIndex]
job.autor.innerHTML = item.job;
autor.innerHTML = item.text;
img.scr = item.name;
}

//mpostrar la review siguiente

nextBtn.addEventListener('click', function(){
  if(currentReview < reviews.length -1)
 currentReview++;
 showReview(currentReview)

})


prevBtn.addEventListener('click', function(){
  if(currentReview < reviews.length > 0 )
  currentReview--;
  showReview(currentReview)
 
 })
 
randomBtn.addEventListener('click', function(){
  currentReview = generarNumeroAleatorio(reviews.length);
  showReview(currentReview)
 

 
 })
 //funcion que devuelve el numero aleatorio dentro de un rango

 function generarNumeroAleatorio(rango){
  return Math.floor(Math.random() *rango)
 }

 

  