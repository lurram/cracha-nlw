//// let = pode ser alterada
//// const = não pode ser alterada
//const user = {
//  name: 'Lurram Santos',
//  phone: 123456789,
//  accept: true
// }
////alert(user.name)
const linksSocialMedia = {
  github: 'lurram',
  youtube: 'UCqrTIaE9iQpybNF5Q6ILlSA',
  facebook: 'lurramsantos',
  instagram: '_lurramsantos',
  twitter: '_lurram'
}

function changeSocialMediaLinks() {
  //document.getElementById('userName').textContent = 'Marcos'
  //userName.textContent = 'Roger'
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()

//Arrow Function

//unction nomedafuncao(argumentos){
// //code
//
//
///Funcao anonima
//rgumento => {
//
//
