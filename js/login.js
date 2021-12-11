const greeting = document.querySelector('#greeting') // 인사말
const bucketlistInput = document.querySelector('#bucket-form') // 버킷리스트 입력 창
const keyw = document.getElementById('keyw') // 키워드 보여주는 태그
//
const loginForm = document.getElementById('login') // 로그인 폼
const joinForm = document.getElementById('join') // 회원가입 폼
const lid_check = document.querySelector('#ID') // 로그인 id 입력 div
const check_id = lid_check.querySelector('input')
const lpw_check = document.querySelector('#PW') // 로그인 pw 입력 div
const check_pw = lpw_check.querySelector('input')
const loginButton = document.querySelector('.loginButton') // 로그인 버튼

const HIDDEN = 'hidden'

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
    location.reload()
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
  keyw.classList.remove(HIDDEN)
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
  keyw.classList.add(HIDDEN)
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
  keyw.classList.remove(HIDDEN)
  bucketlistInput.classList.remove(HIDDEN)
}

loginButton.addEventListener('submit', CheckValue) // 로그인 버튼 클릭시 함수 호출
