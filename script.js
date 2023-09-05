const chatInput = document.querySelector(".chat-footer textarea");
const chatSendBtn = document.querySelector(".chat-footer button");
const chatbox = document.querySelector(".chatbox");

let userMessage;

const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = `<p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi;
}

const handleChat = () => {
    userMessage = chatInput.value.trim();
    console.log(userMessage);
    if(!userMessage) return;
    chatbox.appendChild(createChatLi(userMessage, "outgo"));
    setTimeout(() => {
        chatbox.appendChild(createChatLi(userMessage, "incom"));
    }, 600)

    
}
chatSendBtn.addEventListener("click", handleChat);