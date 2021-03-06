const quiz = [
  {
    question: 'ゲーム史上、最も売れたゲーム機はどれ？',
    answers: [ 'スーパーファミコン', 'PlayStation 2', 'ニンテンドーDS', 'Xbox 360'],
    correct: 'ニンテンドーDS'
  }, {
    question: '現在のAppleのCEOは次のうちどれ？', 
    answers: ['ジェフ・ベゾス', 'スティービー・ワンダー', 'ティム・クック', 'スティーブ・ジョブズ'],
    correct: 'ティム・クック'
  }, {
    question: 'Appleの現在の時価総額は次のうちどれ？', 
    answers: ['4000億円', '8000億円', '3兆円', '400兆円'],
    correct: '3兆円'
  }, {
    question: 'カンボジアの首都は次のうちどれ？',
    answers: ['プノンペン', 'フノンヘン', 'ブノンベン', 'プノンベン'],
    correct: 'プノンペン',
  }
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;
const $button = document.getElementsByTagName('button')
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
    }
}
setupQuiz(); 

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  } else { 
  window.alert('不正解！');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    //問題数がまだあればこちらを実行
    setupQuiz(); 
  }else{
    //問題数がもうなければこちらを実行
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
  }
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
