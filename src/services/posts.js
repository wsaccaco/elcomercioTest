const API="https://jsonplaceholder.typicode.com/users";



export let user=1;


let allPosts=[];
//console.log("post",allPosts);

export function po() {
    return allPosts;
}


function templatePost({name}, {title, body}){
    return `<div id="publication-container">
                <div class="publications">
                    <h1>${name}</h1>
                    <h2 class="items">${title}</h2>
                    <p>${body}</p>
                </div>
            </div>`;
    
}

export async function requestUser(){
    console.log("el user es",user);
   return fetch(`${API}/${user}`)
    .then((response)=>response.json())
    .then(async (users)=>{

           return await requestPost(users)
    })

    .catch(error=>{
        console.log("fallo la promesa: ",error);
    });
}

function requestPost(users){
    //segunda peticion al servidor para obtener publicaciones x usuario
    return fetch(`https://jsonplaceholder.typicode.com/users/${users.id}/posts`)
            .then(response=>response.json())
            .then(posts=>{
            allPosts = [...allPosts, ...posts]; //sprit 
            let htmlPosts=posts.map(pos=>(templatePost(users, pos))).join("");
            return htmlPosts; 
            
            
            });
}

/*let search=document.getElementById('input-search');
function buscadorInterno(){
    
}*/

