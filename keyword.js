const keywords = [
  '예술',
  '스포츠',
  '독서',
  '수집',
  '회화',
  '공예',
  '문화',
  '감상',
  '그림',
  '동호회',
  '관찰',
  '게임',
  '음악',
  '춤',
  '만들기',
  '재테크',
  '스터디',
  '악기',
  '글쓰기',
  '서예',
  '자격증',
  '인테리어',
  '패션',
  '사진',
]

// 랜덤하게 선택되는 키워드
const chosenkwd = keywords[Math.floor(Math.random() * keywords.length)]

const keywd = document.getElementById('keyword')
keywd.innerText = `${chosenkwd}`
