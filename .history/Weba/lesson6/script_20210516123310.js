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
        name: "Cantaloupe",
        des: "Lorem ipsum"
    },
    {
        img: "https://th.bing.com/th/id/Rd4b5f8037f9897677b44d10125887182?rik=Mo0xyOtEnGg6hA&riu=http%3a%2f%2fwww.plantgrower.org%2fuploads%2f6%2f5%2f5%2f4%2f65545169%2fsingle-cranberry-plantx750x750_orig.jpg&ehk=bACacpZvHuDAlY%2b3isbqAvBYd2qASoEjWZNPxJygMfE%3d&risl=&pid=ImgRaw",
        name: "Cranberry",
        des: "Lorem ipsum"
    },
    {
        img: "https://th.bing.com/th/id/R8f37f6d6ea2d0c4d13aaa5182d2cd4c9?rik=bY430IU5xzrxyw&pid=ImgRaw",
        name: "Cucumber",
        des: "Lorem ipsum"
    },
    {
        img: "https://th.bing.com/th/id/OIP.c-5Nd29OMNmPPll-02pa0wHaGd?pid=ImgDet&rs=1",
        name: "Guava",
        des: "Lorem ipsum"
    },
    {
        img: "https://th.bing.com/th/id/R5b0581463a572b1f6f3ae96bf0de6efc?rik=caoD9rVQoXa9Pw&riu=http%3a%2f%2fdreamicus.com%2fdata%2fapple%2fapple-04.jpg&ehk=h8ODUMKKdB%2bZGpBr2z9TYP%2bWVyepKbxUMRaq%2bAjiX%2bg%3d&risl=&pid=ImgRaw",
        name: "Apple",
        des: "Apple is good!"
    },
    {
        img: "https://th.bing.com/th/id/R460c6ed23709b3ccaa1004b05f562cd8?rik=Thg0%2fW2nmQtIcA&pid=ImgRaw",
        name: "Grapefruit",
        des: "Lorem ipsum"
    },
    {
        img: "https://th.bing.com/th/id/R9071e8ce6ae5799d0ea3d9e624d167fd?rik=mFwG8EAAuk1%2fSQ&pid=ImgRaw",
        name: "Grape",
        des: "Lorem ipsum"
    },
    {
        img: "https://th.bing.com/th/id/OIP.J713t6KgpMa6j5dXb9AiXQHaHa?pid=ImgDet&rs=1",
        name: "Banana",
        des: "Lorem ipsum"
    },
    {
        img: "https://th.bing.com/th/id/Rd034fbf1a8bb2b20109ed523f26aede8?rik=fw3RkaX3DiyReQ&riu=http%3a%2f%2flavite.ca%2fwp-content%2fuploads%2f2018%2f08%2fJackfruit05.jpg&ehk=7I8tZCBzArhFNf4qVE5Np8tlx%2fa%2bUdaFtPvcLvOwi84%3d&risl=&pid=ImgRaw",
        name: "Jackfurit",
        des: "Lorem ipsum"
    },
    {
        img: "https://static.onecms.io/wp-content/uploads/sites/35/2019/03/16190037/healthy-kiwi-recipes-ideas.jpg",
        name: "Kiwi",
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