// JavaScript Object for Random Color Button
const randomColorButton = {
    createButton: function (containerId) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error("Container not found");
            return;
        }

        // Create button
        const button = document.createElement("button");
        button.innerText = "Click Me!";
        button.style.padding = "10px 20px";
        button.style.fontSize = "16px";
        button.style.cursor = "pointer";

        // Add click event listener
        button.addEventListener("click", this.changeColor);

        // Append button to container
        container.appendChild(button);
    },

    changeColor: function () {
        // Generate random color
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        this.style.backgroundColor = randomColor;
    }
};

// Initialize button
randomColorButton.createButton("button-container");
