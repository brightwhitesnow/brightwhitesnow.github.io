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
        img: "https://th.bing.com/th/id/R5b0581463a572b1f6f3ae96bf0de6efc?rik=caoD9rVQoXa9Pw&riu=http%3a%2f%2fdreamicus.com%2fdata%2fapple%2fapple-04.jpg&ehk=h8ODUMKKdB%2bZGpBr2z9TYP%2bWVyepKbxUMRaq%2bAjiX%2bg%3d&risl=&pid=ImgRaw",
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
    <img src="${data[i].img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${data[i].name}</h5>
      <p class="card-text">${data[i].des}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`
  card.innerHTML += html
}