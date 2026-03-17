window.addEventListener('load', () => {
    // 1. إعادة بناء الخلفية النيون (أوضح وأقوى)
    const bgContainer = document.querySelector('.bg-lins');
    if (bgContainer) {
        bgContainer.innerHTML = ''; 
        bgContainer.style.cssText = "position:fixed; top:0; left:0; width:100%; height:100%; z-index:-1; display:flex; justify-content:space-around; background:#0a0a0a;";
        for (let i = 0; i < 12; i++) {
            const span = document.createElement('span');
            span.style.cssText = `
                width: 2px; height: 100%; 
                background: linear-gradient(to bottom, transparent, #00ffff, transparent);
                opacity: 0.1; /* زيادة الوضوح */
                animation: neonMove 5s infinite alternate ease-in-out;
                animation-delay: ${i * 0.4}s;
            `;
            bgContainer.appendChild(span);
        }
    }

    // 2. إضافة الأنيميشن للهيد (Animation Keyframes)
    const styleSheet = document.createElement('style');
    styleSheet.innerHTML = `
        @keyframes neonMove { from { transform: translateX(-20px); opacity: 0.2; } to { transform: translateX(20px); opacity: 0.5; } }
        @keyframes floatPerson { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        .links.active { left: 0 !important; display: flex !important; }
        section { height: auto !important; min-height: auto !important; position: relative !important; overflow: visible !important; }
    `;
    document.head.appendChild(styleSheet);

    // 3. المحرك الرئيسي لتصحيح المسافات (The Spacing Engine)
    function applyFinalFix() {
        const isMobile = window.innerWidth <= 1024;
        
        // ضبط قسم الـ About بالكامل لمنع التداخل (الصورة اللي بعتها)
        const aboutContent = document.querySelector('.about-content');
        const heading = document.querySelector('.heading');
        const description = document.querySelector('.description');
        const skillsList = document.querySelector('.skills-list');
        const downloadBtn = document.querySelector('.About-0 .btn');
        const servicesSection = document.querySelector('.services');

        if (aboutContent) {
            aboutContent.style.cssText = `
                display: flex !important; flex-direction: column !important;
                align-items: center !important; text-align: center !important;
                width: 90%; margin: 0 auto;
                gap: 25px !important; /* مسافة إجبارية بين العناصر */
                padding: ${isMobile ? '40px 0' : '100px 0'};
            `;
        }

        // تصغير العنوان "SUMMARY" في الموبايل وتكبيره في الكمبيوتر
        if (heading) {
            heading.style.cssText = `
                font-size: ${isMobile ? '28px' : '55px'} !important;
                margin-bottom: 10px !important; color: #fff; font-weight: 700;
            `;
        }

        if (description) {
            description.style.cssText = `
                font-size: ${isMobile ? '16px' : '18px'} !important;
                line-height: 1.8 !important; color: #ccc;
                max-width: 800px; margin: 0 !important; padding: 0 10px;
            `;
        }

        // ضبط قائمة المهارات (تظهر تحت بعض بانتظام)
        if (skillsList) {
            const ul = skillsList.querySelector('ul');
            ul.style.cssText = `display: flex !important; flex-direction: column !important; align-items: center !important; gap: 12px !important; padding: 0 !important; margin: 10px 0 !important;`;
            ul.querySelectorAll('li').forEach(li => {
                li.style.cssText = `background: rgba(0,255,255,0.05); border: 1px solid #00ffff; padding: 12px 40px; border-radius: 5px; color: #fff; width: 220px; text-align: center;`;
            });
        }

        // زرار الـ CV (أهم جزء لمنع تداخل كلمة "My Expertise")
        if (downloadBtn) {
            downloadBtn.style.cssText = `
                display: inline-block !important; padding: 15px 45px !important;
                background: #00ffff !important; color: #000 !important;
                font-weight: 700; border-radius: 50px; text-decoration: none;
                box-shadow: 0 0 20px #00ffff;
                margin-top: 20px !important;
                margin-bottom: ${isMobile ? '100px' : '40px'} !important; /* مسافة أمان ضخمة للموبايل */
                transition: 0.3s;
            `;
        }

        // ضبط السكشن اللي بعده (Services / My Expertise)
        if (servicesSection) {
            servicesSection.style.cssText = `
                padding-top: ${isMobile ? '100px' : '100px'} !important;
                margin-top: 0 !important; display: block !important; clear: both !important;
            `;
            const servicesTitle = servicesSection.querySelector('h2');
            if (servicesTitle) servicesTitle.style.cssText = `font-size: ${isMobile ? '35px' : '45px'} !important; color: #00ffff; text-align: center; margin-bottom: 50px !important;`;
        }

        // ضبط صورة الـ Hero (الدايرة المثالية)
        const imgWrap = document.querySelector('.img-0');
        const personImg = document.querySelector('.person');
        if (imgWrap && personImg) {
            const size = isMobile ? '260px' : '420px';
            imgWrap.style.cssText = `width: ${size}; height: ${size}; margin: ${isMobile ? '0 auto 40px' : '0'}; display: flex; justify-content: center; align-items: center;`;
            personImg.style.cssText = `width: 100%; height: 100%; border-radius: 50%; object-fit: cover; border: 5px solid #00ffff; box-shadow: 0 0 30px #00ffff; animation: floatPerson 4s infinite ease-in-out;`;
        }
    }

    // 4. منيو الموبايل
    window.open_colos_menu = () => {
        const links = document.querySelector('#links');
        links.classList.toggle('active');
        if (links.classList.contains('active')) {
            links.style.cssText = `position: fixed; top: 0; left: 0; width: 100%; height: 100vh; background: #0a0a0a; display: flex; flex-direction: column; justify-content: center; align-items: center; z-index: 2000; transition: 0.3s;`;
        } else {
            links.style.left = '-100%';
        }
    };

    applyFinalFix();
    window.addEventListener('resize', applyFinalFix);
});