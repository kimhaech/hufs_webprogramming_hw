// const loginForm = document.getElementById("login-form") // 로그인 폼
// const loginInput = loginForm.querySelector("input") // 로그인 입력 창
const greeting = document.querySelector('#greeting') // 인사말
const bucketlistInput = document.querySelector('#bucket-form') // 버킷리스트 입력 창

//
const loginForm = document.getElementById('login') // 로그인 폼
const joinForm = document.getElementById('join') // 회원가입 폼
const lid_check = document.querySelector('#ID') // 로그인 id 입력 div
const check_id = lid_check.querySelector('input')
const lpw_check = document.querySelector('#PW') // 로그인 pw 입력 div
const check_pw = lpw_check.querySelector('input')
const loginButton = document.querySelector('.loginButton') // 로그인 버튼

const HIDDEN = 'hidden'
// const USERNAME_KEY = 'username'

function CheckValue(event) {
  event.preventDefault()
  const ID = check_id.value // id
  const PASSWORD = check_pw.value // pw
  if (localStorage.getItem(ID) == PASSWORD) {
    // localstorage에 입력한 id와 pw가 일치하는 경우
    alert('SUCCESS')
    hide(ID)
    location.reload()
  } else {
    alert('WRONG ID or PASSWORD')
  }
}

function hide(ID) {
  // 로그인 성공시 인사말 띄우기
  loginForm.classList.add(HIDDEN) // 로그인 폼이 사라지도록
  joinForm.classList.add(HIDDEN) // 회원가입 폼이 사라지도록
  greeting.innerText = `Hello ${ID}`
  const button = document.createElement('button')
  button.innerText = 'logout' /// 로그아웃 버튼
  button.addEventListener('click', logout) // 클릭시 로그아웃 함수 호출
  greeting.appendChild(button) // 인사말 옆 버튼 추가
  greeting.classList.remove(HIDDEN)
  localStorage.setItem('onlogin', `${ID}`)
  bucketlistInput.classList.remove(HIDDEN)
  // logcalStorage.getItem(`login${ID}`) = 'true' // 로그인 상태
}

function logout() {
  // 로그아웃 함수
  localStorage.removeItem('onlogin')
  loginForm.classList.remove(HIDDEN)
  joinForm.classList.remove(HIDDEN)
  greeting.classList.add(HIDDEN)
  bucketlistInput.classList.add(HIDDEN)
  location.reload()
}

// 새로고침 해도 로그인 상태 유지
if (localStorage.getItem('onlogin') !== null) {
  loginForm.classList.add(HIDDEN) // 로그인 폼이 사라지도록
  joinForm.classList.add(HIDDEN) // 회원가입 폼이 사라지도록
  greeting.innerText = `Hello ${localStorage.getItem('onlogin')}`
  const button = document.createElement('button')
  button.innerText = 'logout' /// 로그아웃 버튼
  button.addEventListener('click', logout) // 클릭시 로그아웃 함수 호출
  greeting.appendChild(button) // 인사말 옆 버튼 추가
  greeting.classList.remove(HIDDEN)
  bucketlistInput.classList.remove(HIDDEN)
}

// function logout() {}

loginButton.addEventListener('submit', CheckValue) // 로그인 버튼 클릭시 함수 호출
//

// function onLoginSubmit(event){
//   event.preventDefault()  // 기본동장 막기(submit)
//   loginForm.classList.add(HIDDEN) // form이 사라지도록  classname추가
//   const username = loginInput.value // 사용자 이름 저장
//   localStorage.setItem("username",username)
//   greeting.innerText = `Hello ${username}`
//   greeting.classList.remove(HIDDEN)
// }

// loginForm.addEventListener("submit",onLoginSubmit)

// const savedUsername = localStorage.getItem(USERNAME_KEY)

// if(savedUsername === null){ // 저장된 유저이름이 없다
//   // login 띄움
//   loginForm.classList.remove(HIDDEN)
//   loginForm.addEventListener("submit",onLoginSubmit)
//   }else{
//   greeting.innerText = `Hello ${savedUsername}`
//   greeting.classList.remove(HIDDEN)
//   bucketlistInput.classList.remove(HIDDEN)
// }
