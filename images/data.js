let postEntertainmentData=()=>{
    let auther=document.getElementById("name").value;
    let title=document.getElementById("title").value;
    let description=document.getElementById("description").value;
    let link=document.getElementById("link").value;
    let url=document.getElementById("url").value;
    let date=document.getElementById("date").value;
    let content=document.getElementById("content").value;
    console.log(auther,title,description,link,url,date,content);
    let body = {
        author: auther,
        title: title,
        description: description,
        url: link,
        urlToImage: url,
        publishedAt: date,
        content: content
    }
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


let postTechnologyData=()=>{
    let auther=document.getElementById("name").value;
    let title=document.getElementById("title").value;
    let description=document.getElementById("description").value;
    let link=document.getElementById("link").value;
    let url =document.getElementById("url").value;
    let date=document.getElementById("date").value;
    let content=document.getElementById("content").value;
    let body = {
        author: auther,
        title: title,
        description: description,
        url: link,
        urlToImage: url,
        publishedAt: date,
        content: content
    }

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


let postSportsData=()=>{
    let auther=document.getElementById("name").value;
    let title=document.getElementById("title").value;
    let description=document.getElementById("description").value;
    let link=document.getElementById("link").value;
    let url =document.getElementById("url").value;
    let date=document.getElementById("date").value;
    let content=document.getElementById("content").value;
    console.log(auther,title,description,link,url,date,content);
    var body = {
        author: auther,
        title: title,
        description: description,
        url: link,
        urlToImage: url,
        publishedAt: date,
        content: content
    }
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
    });}


let postBusinessData=()=>{
    let auther=document.getElementById("name").value;
    let title=document.getElementById("title").value;
    let description=document.getElementById("description").value;
    let link=document.getElementById("link").value;
    let url =document.getElementById("url").value;
    let date=document.getElementById("date").value;
    let content=document.getElementById("content").value;
    let body = {
        author: auther,
        title: title,
        description: description,
        url: link,
        urlToImage: url,
        publishedAt: date,
        content: content
    }
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


let postGeneralData=()=>{
    let auther=document.getElementById("name").value;
    let title=document.getElementById("title").value;
    let description=document.getElementById("description").value;
    let link=document.getElementById("link").value;
    let url =document.getElementById("url").value;
    let date=document.getElementById("date").value;
    let content=document.getElementById("content").value;
    let body = {
        author: auther,
        title: title,
        description: description,
        url: link,
        urlToImage: url,
        publishedAt: date,
        content: content
    }
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

