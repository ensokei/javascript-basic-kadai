//定数ボタン
const btn=document.getElementById('btn')
//定数テキスト
const text=document.getElementById('text')
//クリック処理
btn.addEventListener('click',()=>{
    text.textContent='ボタンをクリックしました';
})