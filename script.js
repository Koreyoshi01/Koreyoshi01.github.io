// 轮播图功能
const carousel = document.querySelector('.carousel-container');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const images = document.querySelectorAll('.carousel-container img');

let currentIndex = 0;

function showImage(index) {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

// 自动轮播
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}, 5000);

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
