const dominios= document.getElementById('dominios');

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extensions = ['.com', '.net']

let domain = '';
for(let i=0; i<pronoun.length; i++){
    for(let j=0; j<adj.length; j++){
        for(let k=0; k<noun.length; k++){
            for(let m=0; m<extensions.length; m++){
                domain = pronoun[i]+adj[j]+noun[k]+extensions[m]
                
                dominios.innerHTML+=`<p>${domain}</p>`
                console.log(domain)
            }
        }
    }
}