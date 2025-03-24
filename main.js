const chatbotButton = document.getElementById("chatbot-button");
const chatbot = document.getElementById("chatbot");
const chatbotButtonImage = document.getElementById("chatbot-button-image");
const chatbotClose = document.getElementById("chatbot-close");

// Open and Close Chatbot
function chatbotCloseFunction() {
    chatbot.classList.toggle("chatbot-hide");
    if (!chatbot.classList.contains("chatbot-hide")) {
        chatbotButtonImage.setAttribute("src", "./images/icons/close.png");

        chatbotButtonImage.style = "margin-top: 0rem";
    } else {
        chatbotButtonImage.setAttribute("src", "./images/icons/logo-white.png");
        chatbotButtonImage.style = "margin-top: -0.5rem";
    }
}

chatbotButton.addEventListener("click", chatbotCloseFunction);
chatbotClose.addEventListener("click", chatbotCloseFunction);
