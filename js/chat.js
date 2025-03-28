document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chat-box");
    const chatHeader = document.querySelector(".chat-header");
    
    chatHeader.addEventListener("click", function () {
        if (chatBox.style.display === "none" || chatBox.style.display === "") {
            chatBox.style.display = "block";
        } else {
            chatBox.style.display = "none";
        }
    });

    const chatInput = document.getElementById("chat-input");
    chatInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            let userMessage = chatInput.value;
            if (userMessage.trim() !== "") {
                let chatBody = document.querySelector(".chat-body");
                let newMessage = document.createElement("p");
                newMessage.textContent = "You: " + userMessage;
                chatBody.appendChild(newMessage);
                chatInput.value = "";
            }
        }
    });
});