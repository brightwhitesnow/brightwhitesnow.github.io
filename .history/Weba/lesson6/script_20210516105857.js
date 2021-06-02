let data = [
    {
        img: "https://th.bing.com/th/id/OIP.J713t6KgpMa6j5dXb9AiXQHaHa?pid=ImgDet&rs=1",
        name: "Banana",
        des: "Lorem ipsum"
    },
    {
        img: "https://th.bing.com/th/id/OIP.J713t6KgpMa6j5dXb9AiXQHaHa?pid=ImgDet&rs=1",
        name: "Banana",
        des: "Lorem ipsum"
    },
    {
        img: "https://th.bing.com/th/id/OIP.J713t6KgpMa6j5dXb9AiXQHaHa?pid=ImgDet&rs=1",
        name: "Banana",
        des: "Lorem ipsum"
    },
    {
        img: "https://th.bing.com/th/id/OIP.J713t6KgpMa6j5dXb9AiXQHaHa?pid=ImgDet&rs=1",
        name: "Banana",
        des: "Lorem ipsum"
    },
    {
        img: "https://th.bing.com/th/id/OIP.J713t6KgpMa6j5dXb9AiXQHaHa?pid=ImgDet&rs=1",
        name: "Banana",
        des: "Lorem ipsum"
    },
    {
        img: "https://th.bing.com/th/id/OIP.J713t6KgpMa6j5dXb9AiXQHaHa?pid=ImgDet&rs=1",
        name: "Banana",
        des: "Lorem ipsum"
    },
    {
        img: "https://th.bing.com/th/id/OIP.J713t6KgpMa6j5dXb9AiXQHaHa?pid=ImgDet&rs=1",
        name: "Banana",
        des: "Lorem ipsum"
    },
    {
        img: "https://th.bing.com/th/id/OIP.J713t6KgpMa6j5dXb9AiXQHaHa?pid=ImgDet&rs=1",
        name: "Banana",
        des: "Lorem ipsum"
    },
    {
        img: "https://th.bing.com/th/id/OIP.J713t6KgpMa6j5dXb9AiXQHaHa?pid=ImgDet&rs=1",
        name: "Banana",
        des: "Lorem ipsum"
    },
   
]

let card = document.querySelector("#card")
for(let i = 0; i <data.length;i++){
    let html = `<div class="card" style="width: 23%;">
    <img src="${data[]1}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`
  card.innerHTML += html
}