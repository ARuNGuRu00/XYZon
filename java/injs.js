var home=0;
var program=0;
var about=0;
function activate(ele) {
    var x = document.getElementById(ele);
    console.log(x.style.display);
    if (x.style.display === 'none') {
      x.style.display = 'flex';
    } else {
      x.style.display = 'none';
    }
  }


function hchat(){
  alert('asd');
  let mdiv=document.createElement("div");
  let val=document.getElementById("search").value;
  mdiv.className="human-chats";
  mdiv.innerHTML=`<div class='chat'>${val}</div>`;
  document.querySelector('.chat-win').appendChild(mdiv);
}

function ani_bot(){
  document.getElementById('chatarea').style.display='none';
  document.getElementById('bot').style.display='block';
}

function chat_bot(){
  document.getElementById('bot').style.display='none';
  document.getElementById('chatarea').style.display='flex';
  
}