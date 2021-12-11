const bucketForm = document.getElementById('bucket-form')
const bucketInput = bucketForm.querySelector('input')
const bucketList = document.getElementById('bucket-list')

const BUCKET_KEY = 'lists'

let Lists = []
let cur_i = localStorage.getItem('onlogin')

function saveLists() {
  // local storage에 저장하는 함수
  localStorage.setItem(`${BUCKET_KEY}${cur_i}`, JSON.stringify(Lists))
}

function OnButton(event) {
  const button = event.target
  console.log('on button')
  button.innerText = '❌'
}

function LeaveButton(event) {
  const button = event.target
  console.log('leave button')
  button.innerText = ''
}

function deleteList(event) {
  // list 삭제 함수
  const li = event.target.parentElement
  li.remove()
  Lists = Lists.filter((toDo) => toDo.id !== parseInt(li.id))
  saveLists()
}

function paintbucketList(newList) {
  // 새로운 리스트를 추가한다.
  const li = document.createElement('li') // li 생성
  li.id = newList.id
  const span = document.createElement('span') // span 생성
  span.innerText = newList.text
  const button = document.createElement('button')
  button.innerText = ''
  button.addEventListener('mouseenter', OnButton)
  button.addEventListener('mouseleave', LeaveButton)
  button.addEventListener('click', deleteList)
  li.appendChild(span) // li에 span을 넣어준다. li 내 span 존재
  li.appendChild(button) // li에 버튼을 넣어준다.
  bucketList.appendChild(li)
}

function handlebucketSubmit(event) {
  event.preventDefault()
  console.log(bucketInput.value)
  const newList = bucketInput.value
  bucketInput.value = ''
  const newListobj = {
    text: newList,
    id: Date.now(),
  }
  Lists.push(newListobj)
  paintbucketList(newListobj)
  saveLists()
}

bucketForm.addEventListener('submit', handlebucketSubmit)

const savedLists = localStorage.getItem(`${BUCKET_KEY}${cur_i}`)

if (savedLists !== null) {
  const parsedLists = JSON.parse(savedLists)
  Lists = parsedLists
  parsedLists.forEach(paintbucketList)
}
