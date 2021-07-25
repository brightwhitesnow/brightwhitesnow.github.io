window.onload = init

async function init() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user && user.emailVerified){
            let email = user.email
            loadConversations(email)
        }
        else
            console.log("bbbb");
    })
}

let signOut = ()=>{
    firebase.auth().signOut().then(function() {
        window.open('./signin.html','_self')
      }, function(error) {
        alert('Sign Out Error', error);
      });
}





let loadConversations = async ()=>{
    let currentEmail = email

    let result = await firebase.firestore()
    .collection('chat')
    // .where('users','array-contains',currentEmail)
    .get()

    let Conversations = getDataFromDocs(result.docs)
    console.log(Conversations);
}



let getDataFromDoc = (doc)=>{
    let data = doc.data()
    data.id = doc.id
    return data

}

let getDataFromDocs = (docs)=>{
   let result =[]
   for(let doc of docs){
       let data = getDataFromDoc(doc)
       result.push(data)
    }
   return result
}


