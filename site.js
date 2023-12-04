// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

document.addEventListener('DOMContentLoaded', function () {
    // Get all the size buttons
    var sizeButtons = document.querySelectorAll('.size-buttons button');

    // Add click event listener to each button
    sizeButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Toggle 'active' class for the clicked button
            button.classList.toggle('active');
        });
    });
});