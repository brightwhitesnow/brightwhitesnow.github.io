let data = [
    {
        img: "https://www.thehonestcounter.com/wp-content/uploads/2017/12/avocado.jpg?x29720",
        name: "Avocado",
        des: "Lorem ipsum"
    },
    {
        img: "https://th.bing.com/th/id/R76407307c03978838d9ad467e94d0b4f?rik=Sd%2foEoQ1PWbsuw&pid=ImgRaw",
        name: "Blackberry",
        des: "Lorem ipsum"
    },
    {
        img: "https://th.bing.com/th/id/Rfd1d300166a7264eedafe79c6c147383?rik=Gvrj6tU3uG6kaw&pid=ImgRaw",
        name: "Blueberry",
        des: "Lorem ipsum"
    },
    {
        img: "https://th.bing.com/th/id/Rc36092de1fb13a74839fbf58c243d02d?rik=sYf5OSVISkRrjQ&riu=http%3a%2f%2fwww.freshpoint.com%2fwp-content%2fuploads%2fcommodity-cherry.jpg&ehk=LBnIAYjRkpypMUgmslW8xVQVHyXAofTGcXjl2W8ngSE%3d&risl=&pid=ImgRaw",
        name: "Cherry",
        des: "Lorem ipsum"
    },
    {
        img: "https://th.bing.com/th/id/Rcbff8ce1b7a5b2857107dff90181b2cf?rik=oV6%2fqjDRfs3tuw&pid=ImgRaw",
        name: "",
        des: "Lorem ipsum"
    },
    {
        img: "",
        name: "",
        des: "Lorem ipsum"
    },
    {
        img: "",
        name: "",
        des: "Lorem ipsum"
    },
    {
        img: "",
        name: "",
        des: "Lorem ipsum"
    },
    {
        img: "https://th.bing.com/th/id/R5b0581463a572b1f6f3ae96bf0de6efc?rik=caoD9rVQoXa9Pw&riu=http%3a%2f%2fdreamicus.com%2fdata%2fapple%2fapple-04.jpg&ehk=h8ODUMKKdB%2bZGpBr2z9TYP%2bWVyepKbxUMRaq%2bAjiX%2bg%3d&risl=&pid=ImgRaw",
        name: "Apple",
        des: "Apple is good!"
    },
    {
        img: "",
        name: "",
        des: "Lorem ipsum"
    },
    {
        img: "",
        name: "",
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