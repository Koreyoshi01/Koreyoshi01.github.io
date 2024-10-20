// 轮播图功能
const carousel = document.querySelector('.carousel-container');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const images = document.querySelectorAll('.carousel-container img');

let currentIndex = 0;

function showImage(index) {
    // 确保 index 在有效范围内
    index = (index + images.length) % images.length;
    carousel.style.transition = 'transform 0.5s ease-in-out';
    carousel.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
}

function nextImage() {
    showImage(currentIndex + 1);
}

function prevImage() {
    showImage(currentIndex - 1);
}

prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);

// 处理循环
carousel.addEventListener('transitionend', () => {
    if (currentIndex === images.length - 1) {
        carousel.style.transition = 'none';
        carousel.style.transform = 'translateX(0)';
        currentIndex = 0;
        setTimeout(() => {
            carousel.style.transition = 'transform 0.5s ease-in-out';
        }, 50);
    }
    if (currentIndex === -1) {
        carousel.style.transition = 'none';
        carousel.style.transform = `translateX(-${(images.length - 1) * 100}%)`;
        currentIndex = images.length - 1;
        setTimeout(() => {
            carousel.style.transition = 'transform 0.5s ease-in-out';
        }, 50);
    }
});

// 自动轮播
setInterval(nextImage, 5000);

// 留言板功能
const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            formStatus.innerHTML = "谢谢！您的留言已成功发送。";
            form.reset();
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    formStatus.innerHTML = data["errors"].map(error => error["message"]).join(", ");
                } else {
                    formStatus.innerHTML = "糟糕！提交表单时出现问题。请稍后再试。";
                }
            })
        }
    }).catch(error => {
        formStatus.innerHTML = "糟糕！提交表单时出现问题。请稍后再试。";
    });
});
