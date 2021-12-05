const loginForm = document.getElementById("login-form")
const loginInput = loginForm.querySelector("input")
const greeting = document.querySelector("#greeting")

const HIDDEN = "hidden"
const USERNAME_KEY = "username"

function onLoginSubmit(event){
  event.preventDefault()  // 기본동장 막기(submit)
  loginForm.classList.add(HIDDEN) // form이 사라지도록  classname추가
  const username = loginInput.value // 사용자 이름 저장
  localStorage.setItem("username",username)
  greeting.innerText = `Hello ${username}`
  greeting.classList.remove(HIDDEN)
}

loginForm.addEventListener("submit",onLoginSubmit)

const savedUsername = localStorage.getItem(USERNAME_KEY)

if(savedUsername === null){ // 저장된 유저이름이 없다
  // login 띄움
  loginForm.classList.remove(HIDDEN)
  loginForm.addEventListener("submit",onLoginSubmit)
}else{
  greeting.innerText = `Hello ${savedUsername}`
  greeting.classList.remove(HIDDEN)
}