function nextStep() {
    const steps = document.querySelectorAll('.form-step');
    let currentStep = Array.from(steps).findIndex(step => step.style.display !== 'none');
    steps[currentStep].style.display = 'none';
    if (currentStep < steps.length - 1) {
        steps[currentStep + 1].style.display = 'block';
    }
}

function selectImage(imageSrc) {
    document.querySelectorAll('.image-selection img').forEach(img => img.classList.remove('selected'));
    const selectedImage = document.querySelector(`.image-selection img[src="${imageSrc}"]`);
    if (selectedImage) {
        selectedImage.classList.add('selected');
    }
}

function selectImageFromFile(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            console.log("Uploaded image:", e.target.result);
        };
        reader.readAsDataURL(file);
    }
}

document.getElementById('welcomeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = 'index.html';
});