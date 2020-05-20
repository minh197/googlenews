let newsList =[]
let pageNumber=1;
const apiKey = "a7be96f9d0f54cb895dd865d8500fe04"
const loadNews = async() =>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
    let data =  await fetch(url)
    let result =  await data.json();
    let resultList = result.articles
    newsList=newsList.concat(resultList)
    console.log("length of news",newsList.length)
    render(newsList)
   
}


const render = (list) =>{
     
     let newsHtml = newsList.map(item =>{
        console.log(item.publishedAt)
     return `<div id="news">
     <div id="contentsArea">
        <div style="font-size: 25px;"id="title">${item.title}</div>
        
        <div id="source">${item.source.name}</div>
       
        <div class="row-mb5" style="font-size: 12px;">${moment(item.publishedAt).startOf('hour').fromNow()}</div>
        
        


        
     </div>

     <div id="imgArea">
         <img style="display: inline-block; height: 150px; "src="${item.urlToImage}"/>

     </div>
     
     
  </div>
  
  `
     }).join('')
  
  

  document.getElementById("news").innerHTML = newsHtml
  document.getElementById("number-news").innerHTML=newsList.length

}

 const showDataMore = async() => {
     pageNumber++;
     alert("You click")
   let urlMore = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&page=${pageNumber}`;
   let dataMore = await fetch(urlMore);
   let resultMore = await dataMore.json();
  
   let resultList = resultMore.articles
    newsList=newsList.concat(resultList)
    render(newsList)

 }

loadNews()

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }