const loginForm = document.getElementById("login-form") // 로그인 폼
const loginInput = loginForm.querySelector("input") // 로그인 입력 창
const greeting = document.querySelector("#greeting")  // 인사말
const bucketlistInput = document.querySelector("#bucket-form")  // 버킷리스트 입력 창

//
const lid_check = document.querySelector("#ID") // 로그인 id 입력 div
const check_id = document.querySelector("input")
const lpw_check = document.querySelector("#PW") // 로그인 pw 입력 div
const check_pw = document.querySelector("input")
const loginButton = document.querySelector(".loginButton") // 로그인 버튼

function CheckValue(){
  const ID = check_id.value;  // id
  const PASSWORD = check_pw.value;  // pw
  if(localStorage.getItem(ID) == PASSWORD){ // localstorage에 입력한 id와 pw가 일치하는 경우
    alert("SUCCESS")
  }else{
    alert("WRONG ID or PASSWORD")
  }
}

loginButton.addEventListener("click", CheckValue) // 로그인 버튼 클릭시 함수 호출
//
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
  bucketlistInput.classList.remove(HIDDEN)
}