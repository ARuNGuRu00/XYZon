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

function aniBot(){
  document.getElementById('chatarea').style.display='none';
  document.getElementById('bot').style.display='block';
}

let setvalue=0;

function chat_bot(){
  document.getElementById('bot').style.display='none';
  document.getElementById('chatarea').style.display='flex';
  if (setvalue === 0){
    setTimeout(bot_chats, 400); 
    setvalue = 1;
  }
}

/* const newDiv = document.createElement("div");
newDiv.innerText = "Hello, World!";
document.body.appendChild(newDiv);*/

function bot_chats(){
  auto_chat('Hi there!!!');
  auto_chat('what are you looking for ??');
  auto_chat('may I help you ...')
}

function bottom_focus(){
  var contentDiv = document.getElementById("chat-main");
  contentDiv.scrollTop = contentDiv.scrollHeight;
}


function user_chat(){
  let con = document.getElementById('search').value;
  let hc = document.createElement('div');
  hc.className="human-chats";
  hc.innerHTML=`<div class='px-3 py-2 chat2 mx-2  rounded-start-pill'>${con}</div>`;
  document.getElementById('chat-win').appendChild(hc);
  document.getElementById('search_form').reset();
  bottom_focus();
}

function auto_chat(chat='Hello there, what can i do for you??'){
  let hc = document.createElement('div');
  hc.className="bot-chats";
  hc.innerHTML=`<div class=' px-3 py-2 chat mx-2  rounded-end-pill'>${chat}</div>`;
  document.getElementById('chat-win').appendChild(hc);
  bottom_focus();
}

