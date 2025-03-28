var featureElements = [
    document.querySelector('.feature-1'),
    document.querySelector('.feature-2'),
    document.querySelector('.feature-3'),
    document.querySelector('.feature-4')
]; // Select all four feature elements

var isEvenVisible = true; // Track the current visibility state

setInterval(function () {
    featureElements.forEach(function (element, index) {
        if (isEvenVisible) {
            // Show odd (1, 3), hide even (2, 4)
            element.style.opacity = (index % 2 === 0) ? '1' : '0';
        } else {
            // Show even (2, 4), hide odd (1, 3)
            element.style.opacity = (index % 2 !== 0) ? '1' : '0';
        }
        element.style.transition = 'opacity 1s ease-in-out'; // Smooth fade transition
    });

    isEvenVisible = !isEvenVisible; // Toggle state for next iteration

}, 2000);
