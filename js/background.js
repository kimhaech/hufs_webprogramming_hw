var selectedColor //선택한 컬러값 저장할 변수

window.onload = function () {
  init()
}

function init() {
  var colorChip = [
    '#f89b00',
    '#f7e600',
    '#7dbad5',
    '#e091a9',
    '#81c147',
    '#ffffff',
  ] //색상코드
  var tag = ''
  for (i = 0; i < colorChip.length; i++) {
    //colorBox 의 id명을 색상명으로 지정
    tag +=
      '<div id=' +
      colorChip[i] +
      " class='colorBox' onclick='colorSet(this)'></div>"
  }
  document.getElementById('colorList').innerHTML = tag

  var colorBoxList = document.getElementsByClassName('colorBox')
  for (i = 0; i < colorBoxList.length; i++) {
    colorBoxList[i].style.background = colorBoxList[i].id //id인 색상명을 colorBox의 배경색으로 지정
  }
}

// onclick event
function colorSet(colorPick) {
  document.querySelector('body').style.background = colorPick.id //배경색을 선택한 색상박스의 id 값으로 지정

  if (selectedColor != null) {
    document.getElementById(selectedColor).className = document
      .getElementById(selectedColor)
      .className.replace(' selected', '')
  }
  document.getElementById(colorPick.id).className += ' selected'
  selectedColor = colorPick.id
  localStorage.setItem('cur_color', `${selectedColor}`)
}

if (localStorage.getItem('cur_color') !== null) {
  document.querySelector('body').style.background =
    localStorage.getItem('cur_color') //배경색을 선택한 색상박스의 id 값으로 지정
}
