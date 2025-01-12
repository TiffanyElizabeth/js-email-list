/*
Descrizione
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Doc Axios: https://axios-http.com/
Bonus
Abbellire con CSS o Bootstrap
Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)
*/

const emailListElm = document.getElementById("email-list");

for(let i = 1; i < 11; i++) {
axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
  .then(function (response) {
    const email = response.data.response;
    emailListElm.innerHTML += `<li>${email}</li>`
  })
}  