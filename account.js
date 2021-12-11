const miinput = document.querySelector('#mid') // 만들 ID를 입력하는 태그
const mid = miinput.querySelector('input') // ID 입력 창
const mpinput = document.querySelector('#mpw') // 만들 PW를 입려력하는 태그
const mpw = mpinput.querySelector('input') // PW 입력 창
const jbtn = document.querySelector('.joinButton') // 생성 버튼

// let Listsf = [] // bucket list를 위한 배열

// function saveLists(BUCKET_KEY) {
//   // local storage에 저장하는 함수
//   localStorage.setItem(`lists${BUCKET_KEY}`, JSON.stringify(Listsf)) // local storage에 아이디에 해당하는 리스트 저장
// }
function handleSubmitId(event) {
  let cur_id = mid.value // 입력한 ID
  let cur_pw = mpw.value // 입력한 PW
  // let cur_id_login = `login${cur_id}` // 입력한 ID의 로그인 유무
  localStorage.setItem(cur_id, cur_pw) // localStorage에 입력한 id,pw저장
  // saveLists(cur_id) // 리스트 저장을 위한 key값 전달
  // localStorage.setItem(cur_id_login, `login${cur_id}`) // 입력한 ID의 로그인 유무
}

jbtn.addEventListener('click', handleSubmitId) // 버튼 클릭 시 함수 호출
