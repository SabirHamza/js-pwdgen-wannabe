//CHIEDI IL NOME
let username = prompt('Qual è il tuo nome?')

//CHIEDI IL COGNOME
let usersecondname = prompt('Qual è il tuo cognome?')

//CHIEDI IL COLORE PREFERITO
let preferitcolor = prompt('Qual è il tuo colore preferito?')

//PROVE CONSOLE LOG
console.log(username);
console.log(usersecondname);
console.log(preferitcolor);

let password =  `${username}${usersecondname}${preferitcolor}23`

//PROVE CONSOLE LOG
console.log(password);

//INSERISCO LA PASSWORD NEL DOCUMENTO HTML
document.getElementById('pass_word').innerHTML = password

