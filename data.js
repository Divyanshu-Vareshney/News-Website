var value;
const Category=()=>{
var x = document.getElementById("category");
value = x.value;
console.log(value);
}
var name=document.getElementById("name").value;
var auther=document.getElementById("auther").value;
var title=document.getElementById("title").value;
var description=document.getElementById("description").value;
var link=document.getElementById("link").value;
var url =document.getElementById("url").value;
var date=document.getElementById("date").value;
var content=document.getElementById("content").value;
var form=document.getElementById("formid");
var body = {
    author: auther,
    title: title,
    description: description,
    url: link,
    urlToImage: url,
    publishedAt: date,
    content: content
}

if(value==1){
    postEntertainmentData();
}
else if(value==2){
    postTechnologyData();
}

else if(value==3){
    postSportsData();
}
else if(value==4){
    postBusinessData();
}
else if(value==5){
    postGeneralData();
}


var postEntertainmentData=()=>{
    axios({
        method: 'post',
        url: 'http://localhost:3000/entertainment',
        data: body
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}


var postTechnologyData=()=>{
    axios({
        method: 'post',
        url: 'http://localhost:3000/technology',
        data: body
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}


var postSportsData=()=>{
    axios({
        method: 'post',
        url: 'http://localhost:3000/sports',
        data: body
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}


var postBusinessData=()=>{
    axios({
        method: 'post',
        url: 'http://localhost:3000/business',
        data: body
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}


var postGeneralData=()=>{
    axios({
        method: 'post',
        url: 'http://localhost:3000/general',
        data: body
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}