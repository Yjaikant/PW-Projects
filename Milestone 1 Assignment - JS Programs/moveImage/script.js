const movingImage = document.getElementById('movableImage');
let axisX = 0;
let axisY = 0;
let move =  5// Adjust this value to control the movement speed

// Function to move the image based on arrow key input
function moveImage(event) {
    switch (event.key) {
        case 'ArrowUp':
            axisY -= move;
            break;
        case 'ArrowDown':
            axisY += move;
            break;
        case 'ArrowLeft':
            axisX -= move;
            break;
        case 'ArrowRight':
            axisX += move;
            break;
        default:
            return; // Ignore other keys
    }
    
    // Update the image's position
    movingImage.style.top = axisY + 'px';
    movingImage.style.left = axisX + 'px';
}

// Add an event listener to the document to listen for keydown events
document.addEventListener('keydown', moveImage);
