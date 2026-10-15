
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
    
    document.body.classList.toggle('dark-theme');
});
// جلب عناصر الصورة والزر من الصفحة
const profileImage = document.getElementById('profileImage');
const switchPhotoBtn = document.getElementById('switchPhotoBtn');

// مسارات الصور بالامتدادات الصحيحة
const image1 = 'assets/profile.jpg';
const image2 = 'assets/casual.jpeg';

// متغير لتتبع الصورة الحالية
let isImage1 = true;

if (switchPhotoBtn && profileImage) {
    switchPhotoBtn.addEventListener('click', () => {
        // تأثير اختفاء تدريجي بسيط (Fade out)
        profileImage.style.opacity = '0';
        
        setTimeout(() => {
            if (isImage1) {
                profileImage.src = image2;
                profileImage.alt = 'Rania Alassouli - Casual Photo';
            } else {
                profileImage.src = image1;
                profileImage.alt = 'Rania Alassouli - Profile Photo';
            }
            
            // إظهار الصورة بسلاسة (Fade in)
            profileImage.style.opacity = '1';
            isImage1 = !isImage1; // عكس الحالة للتبديل في المرة القادمة
        }, 200);
    });
}