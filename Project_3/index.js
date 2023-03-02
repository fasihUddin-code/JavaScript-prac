console.log('indexJs file');

//News API Key

//initialize news api parameters
let apiKey = "5c6e1f177e01494cabe989fc1bd2805a";
let source = "bbc-news";

//Grap the news container
let newsAccordion = document.getElementById('newsAccordion');

//Intantiate an xhr object
const xhr = new XMLHttpRequest();

//Open the object
//Create an Ajax GET Request
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

//What to do when response is ready
xhr.onload = function () {
    if (xhr.status == 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach((element,index) => {


            //console.log(element,index);
            let news = `
            <div class="card newsCard">
                <div class="card-header" id="heading${index}">
                    <h2 class="mb-0">
                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                            aria-expanded="true" aria-controls="collapse${index}">
                                <b> Breaking News ${index+1}: </b>     ${element["title"]}
                        </button>
                    </h2>
                </div>
            
                <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                    <div class="card-body" id ="newsDescription">${element["content"]} <a href=${element["url"]} target="_blank" >Read more here</a>  </div>
                </div>
            </div>`;
            newsHtml += news;

        });


        newsAccordion.innerHTML = newsHtml;

    }
    else {
        console.log('some error occured')
    }

    // Search button working
    // let searchBtn = document.getElementById('searchBtn');
    // searchBtn.addEventListener('click',searchBtnHandler);
    // function searchBtnHandler(){
    //     let seachTxt = document.getElementById('searchTxt');
    //     let inputVal = searchTxt.value.toLowerCase();
    //     console.log(`click event fired ${inputVal}`);
    //     let newsCard = document.getElementsByClassName('newsCard');
    //     Array.from(newsCard).forEach(function(element){
    //     let newsTxt = element.getElementsByTagName('button').innerText;
    //     let newsDescription = document.getElementById('newsDescription');
    //     if(newsTxt.includes(inputVal)){
    //         element.style.display = 'block';

    //     }
    //     else{
    //         element.style.display = 'none';

    //     }


    //     });
    // }

}

//send request
xhr.send();



