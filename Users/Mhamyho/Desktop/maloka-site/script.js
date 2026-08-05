/* ==========================================================================
   Happy Birthday Maloka! (11/8 - 11 August)
   Interactive Romantic Birthday Script & Particle Effects
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. ALL 14 BIRTHDAY PHOTOS & CAPTIONS ---
    const photos = [
        { name: "img1.jpeg", caption: "كل سنة وأنتي الضحكة اللي بتنور أيامي ❤️" },
        { name: "img2.jpeg", caption: "أجمل عيون وأطيب قلب في الكون كله 🌸" },
        { name: "img3.jpeg", caption: "11/8 اليوم اللي الدنيا اتزينت فيه بوجودك ✨" },
        { name: "img4.jpeg", caption: "أغلى ملك وأحلى حاجة حصلتلي في حياتي 🥰" },
        { name: "img5.jpeg", caption: "ربنا يحفظك ليا وما يحرمكش مني أبداً 💖" },
        { name: "img6.jpeg", caption: "ضحكتك تسوى الدنيا باللي فيها 🌹" },
        { name: "img7.jpeg", caption: "كل لحظة وجنبك عيد وفرحة ❤️" },
        { name: "img8.jpeg", caption: "صاحبة القلب الأبيض والروح الحلوة ✨" },
        { name: "img9.jpeg", caption: "مكانك في قلبي ثابت مابيتغيرش ملوكة 👑" },
        { name: "img10.jpeg", caption: "يا رب تكون سنة جديدة كلها خير وسعادة لقلبك 🌸" },
        { name: "img11.jpeg", caption: "كل الأيام معاكي بتفرق وتحلى 🥰" },
        { name: "img12.jpeg", caption: "أنتي السند والضحكة والأمان 💖" },
        { name: "img13.jpeg", caption: "يا رب يخليكي ليا وما تحرمني من وجودك 🌹" },
        { name: "img14.jpeg", caption: "بحبك أكتر من أي حاجة في الدنيا 😘" }
    ];

    // --- 2. AUDIO PLAYER LOGIC ---
    const audio = document.getElementById('romantic-audio');
    const musicToggleBtn = document.getElementById('music-toggle-btn');
    const musicIcon = document.getElementById('music-icon');
    const musicBars = document.getElementById('music-bars');
    let hasPlayedAudio = false;

    function playMusic() {
        if (audio) {
            audio.play().then(() => {
                hasPlayedAudio = true;
                if (musicIcon) musicIcon.className = 'fa-solid fa-pause';
                if (musicBars) musicBars.classList.remove('hidden');
            }).catch(err => {
                console.log("Autoplay gesture unlock waiting:", err);
            });
        }
    }

    function pauseMusic() {
        if (audio) {
            audio.pause();
            if (musicIcon) musicIcon.className = 'fa-solid fa-play';
            if (musicBars) musicBars.classList.add('hidden');
        }
    }

    if (musicToggleBtn) {
        musicToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (audio.paused) {
                playMusic();
            } else {
                pauseMusic();
            }
        });
    }

    // Touch / Click unlock audio for mobile
    const unlockAudio = () => {
        if (!hasPlayedAudio) playMusic();
    };
    document.addEventListener('touchstart', unlockAudio, { once: true });
    document.addEventListener('click', unlockAudio, { once: true });


    // --- 3. HERO START BUTTON & SCROLL ---
    const startBtn = document.getElementById('start-journey-btn');
    const journeyContent = document.getElementById('journey-content');

    if (startBtn) {
        startBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            playMusic();
            triggerConfetti();
            if (journeyContent) {
                journeyContent.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }


    // --- 4. LIVE COUNTDOWN TO AUGUST 11 (11/8) ---
    function updateCountdown() {
        const now = new Date();
        let targetYear = now.getFullYear();
        // Month 7 is August in JavaScript (0-indexed: Jan=0, ..., Aug=7)
        let bdayTarget = new Date(targetYear, 7, 11, 0, 0, 0); 
        
        // If date passed this year (after Aug 11 23:59), target next year
        if (now > new Date(targetYear, 7, 11, 23, 59, 59)) {
            bdayTarget = new Date(targetYear + 1, 7, 11, 0, 0, 0);
        }

        const diff = bdayTarget - now;

        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        // Check if today is August 11
        if (now.getMonth() === 7 && now.getDate() === 11) {
            if (daysEl) daysEl.textContent = "🎉";
            if (hoursEl) hoursEl.textContent = "🎂";
            if (minutesEl) minutesEl.textContent = "✨";
            if (secondsEl) secondsEl.textContent = "❤️";
        } else if (diff <= 0) {
            if (daysEl) daysEl.textContent = "🎉";
            if (hoursEl) hoursEl.textContent = "🎂";
            if (minutesEl) minutesEl.textContent = "✨";
            if (secondsEl) secondsEl.textContent = "❤️";
        } else {
            const d = Math.floor(diff / (1000 * 60 * 60 * 24));
            const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const m = Math.floor((diff / 1000 / 60) % 60);
            const s = Math.floor((diff / 1000) % 60);

            if (daysEl) daysEl.textContent = String(d).padStart(2, '0');
            if (hoursEl) hoursEl.textContent = String(h).padStart(2, '0');
            if (minutesEl) minutesEl.textContent = String(m).padStart(2, '0');
            if (secondsEl) secondsEl.textContent = String(s).padStart(2, '0');
        }
    }
    setInterval(updateCountdown, 1000);
    updateCountdown();


    // --- 5. INTERACTIVE BIRTHDAY CAKE & CANDLE BLOW ---
    const blowCandleBtn = document.getElementById('blow-candle-btn');
    const flamesContainer = document.getElementById('flames-container');
    const wishRevealedMsg = document.getElementById('wish-revealed-msg');

    if (blowCandleBtn) {
        blowCandleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (flamesContainer) {
                flamesContainer.style.transition = 'opacity 0.6s ease';
                flamesContainer.style.opacity = '0';
            }
            triggerConfetti();
            if (wishRevealedMsg) {
                wishRevealedMsg.classList.remove('hidden');
            }
            blowCandleBtn.style.display = 'none';
        });
    }


    // --- 6. INTERACTIVE GIFT BOX ---
    const giftBoxBtn = document.getElementById('gift-box-btn');
    const giftModal = document.getElementById('gift-modal');
    const closeGiftBtn = document.getElementById('close-gift-btn');
    const giftModalAckBtn = document.getElementById('gift-modal-ack-btn');

    if (giftBoxBtn && giftModal) {
        giftBoxBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            triggerConfetti();
            giftModal.classList.remove('hidden');
        });
    }

    const closeGiftModal = () => {
        if (giftModal) giftModal.classList.add('hidden');
    };

    if (closeGiftBtn) closeGiftBtn.addEventListener('click', closeGiftModal);
    if (giftModalAckBtn) giftModalAckBtn.addEventListener('click', closeGiftModal);


    // --- 7. POPULATE 11 REASONS WHY MALOKA IS SPECIAL ---
    const reasons = [
        "ضحكتك من القلب اللي بتنور حياتي ✨",
        "طيبة قلبك اللي ملهاش مثيل 🌸",
        "عينيكي أجمل مكان أهرب ليه في الدنيا ❤️",
        "إخلاصك وحنيتك اللي بيطمنوني دايماً 🥰",
        "وجودك جنبي بيخليني أقوى حد 💖",
        "دلعك وروحك الحلوة الخفيفة 🌹",
        "صاحبتي وحبيبتي وأختي وكل دنيتي 👑",
        "صبرك وتفهمك لقلبي مهما حصل ✨",
        "ذكائك وطريقتك الجميلة في كل حاجة 🌸",
        "مكانك في قلبي ثابت مابيتغيرش ملوكة ❤️",
        "أجدع وأرق وأغلى بنت في الكون كله 😘"
    ];

    const reasonsGrid = document.getElementById('reasons-grid');
    if (reasonsGrid) {
        reasons.forEach((reason, index) => {
            const card = document.createElement('div');
            card.className = 'reason-card';
            card.innerHTML = `
                <div class="reason-num">${index + 1}</div>
                <div class="reason-text">${reason}</div>
            `;
            card.addEventListener('click', () => {
                createHeartBurst(window.innerWidth / 2, window.innerHeight / 2);
            });
            reasonsGrid.appendChild(card);
        });
    }


    // --- 8. FEATURED CAROUSEL SLIDER & SWIPE ---
    let currentSlide = 0;
    const carouselBox = document.querySelector('.carousel-container');
    const carouselImg = document.getElementById('carousel-img');
    const carouselCaption = document.getElementById('carousel-caption');
    const carouselCounter = document.getElementById('carousel-counter');
    const prevBtn = document.getElementById('prev-slide-btn');
    const nextBtn = document.getElementById('next-slide-btn');

    function updateCarousel(index) {
        currentSlide = (index + photos.length) % photos.length;
        const photo = photos[currentSlide];
        if (carouselImg && carouselCaption && carouselCounter) {
            carouselImg.style.opacity = '0';
            setTimeout(() => {
                carouselImg.src = `images/${photo.name}`;
                carouselCaption.textContent = photo.caption;
                carouselCounter.textContent = `صورة ${currentSlide + 1} من ${photos.length}`;
                carouselImg.style.opacity = '1';
            }, 180);
        }
    }

    if (prevBtn) prevBtn.addEventListener('click', () => updateCarousel(currentSlide - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => updateCarousel(currentSlide + 1));

    // Touch Swipe for Mobile
    let touchStartX = 0;
    let touchEndX = 0;

    if (carouselBox) {
        carouselBox.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        carouselBox.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            if (touchStartX - touchEndX > 40) {
                updateCarousel(currentSlide + 1);
            } else if (touchEndX - touchStartX > 40) {
                updateCarousel(currentSlide - 1);
            }
        }, { passive: true });
    }

    // Auto advance every 4s
    setInterval(() => {
        updateCarousel(currentSlide + 1);
    }, 4000);


    // --- 9. RENDER POLAROID CARDS ---
    const galleryGrid = document.getElementById('photo-gallery');
    if (galleryGrid) {
        photos.forEach((photo) => {
            const card = document.createElement('div');
            card.className = 'polaroid-card';
            
            const tilt = (Math.random() * 8 - 4).toFixed(1);
            card.style.setProperty('--rotation', tilt);

            card.innerHTML = `
                <div class="polaroid-img-wrapper">
                    <img src="images/${photo.name}" alt="${photo.caption}" loading="lazy">
                </div>
                <div class="polaroid-caption">
                    <i class="fa-solid fa-heart"></i>
                    <span>${photo.caption}</span>
                </div>
            `;

            card.addEventListener('click', (e) => {
                e.stopPropagation();
                openLightbox(`images/${photo.name}`, photo.caption);
            });

            galleryGrid.appendChild(card);
        });
    }

    // Lightbox Logic
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeLightboxBtn = document.getElementById('close-lightbox-btn');

    function openLightbox(src, caption) {
        if (lightboxModal && lightboxImg && lightboxCaption) {
            lightboxImg.src = src;
            lightboxCaption.textContent = caption;
            lightboxModal.classList.remove('hidden');
        }
    }

    if (closeLightboxBtn && lightboxModal) {
        closeLightboxBtn.addEventListener('click', () => lightboxModal.classList.add('hidden'));
        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal) lightboxModal.classList.add('hidden');
        });
    }


    // --- 10. LOVE LETTER ENVELOPE MODAL ---
    const envelopeBtn = document.getElementById('envelope-btn');
    const letterModal = document.getElementById('letter-modal');
    const closeLetterBtn = document.getElementById('close-letter-btn');

    if (envelopeBtn && letterModal) {
        envelopeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            letterModal.classList.remove('hidden');
            triggerConfetti();
        });
    }

    if (closeLetterBtn && letterModal) {
        closeLetterBtn.addEventListener('click', () => letterModal.classList.add('hidden'));
        letterModal.addEventListener('click', (e) => {
            if (e.target === letterModal) letterModal.classList.add('hidden');
        });
    }


    // --- 11. CONFETTI & BURST EFFECTS ---
    function triggerConfetti() {
        if (window.confetti) {
            confetti({
                particleCount: 160,
                spread: 90,
                origin: { y: 0.6 },
                colors: ['#ff2a6d', '#ff758c', '#ffd700', '#ffffff', '#ff004f']
            });
        }
    }

    function createHeartBurst(x, y) {
        for (let i = 0; i < 6; i++) {
            const heart = document.createElement('div');
            heart.className = 'burst-heart';
            heart.innerHTML = '❤️';
            heart.style.position = 'fixed';
            heart.style.left = `${x}px`;
            heart.style.top = `${y}px`;
            heart.style.fontSize = `${Math.random() * 16 + 14}px`;
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '9999';

            const angle = (Math.PI * 2 / 6) * i;
            const velocity = Math.random() * 45 + 30;
            const destX = Math.cos(angle) * velocity;
            const destY = Math.sin(angle) * velocity;

            heart.style.transition = 'all 0.8s ease-out';
            document.body.appendChild(heart);

            requestAnimationFrame(() => {
                heart.style.transform = `translate(${destX}px, ${destY}px) scale(0)`;
                heart.style.opacity = '0';
            });

            setTimeout(() => heart.remove(), 850);
        }
    }


    // --- 12. CANVAS ANIMATION (FLOATING HEARTS & GOLD BALLOONS) ---
    const canvas = document.getElementById('bg-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        const particles = [];
        const particleCount = 30;

        class BdayParticle {
            constructor() { this.reset(); }
            reset() {
                this.x = Math.random() * width;
                this.y = height + Math.random() * 60;
                this.size = Math.random() * 12 + 6;
                this.speedY = Math.random() * 1.0 + 0.3;
                this.opacity = Math.random() * 0.6 + 0.25;
                this.color = ['#ff2a6d', '#ff758c', '#ffd700', '#ffffff'][Math.floor(Math.random() * 4)];
                this.isHeart = Math.random() > 0.3;
            }
            update() {
                this.y -= this.speedY;
                this.x += Math.sin(this.y * 0.01) * 0.4;
                if (this.y < -30) this.reset();
            }
            draw() {
                ctx.save();
                ctx.globalAlpha = this.opacity;
                ctx.fillStyle = this.color;

                if (this.isHeart) {
                    ctx.translate(this.x, this.y);
                    ctx.beginPath();
                    const h = this.size * 0.3;
                    ctx.moveTo(0, h);
                    ctx.bezierCurveTo(0, 0, -this.size / 2, 0, -this.size / 2, h);
                    ctx.bezierCurveTo(-this.size / 2, (this.size + h) / 2, 0, this.size, 0, this.size);
                    ctx.bezierCurveTo(0, this.size, this.size / 2, (this.size + h) / 2, this.size / 2, h);
                    ctx.bezierCurveTo(this.size / 2, 0, 0, 0, 0, h);
                    ctx.closePath();
                    ctx.fill();
                } else {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size * 0.6, 0, Math.PI * 2);
                    ctx.fill();
                }
                ctx.restore();
            }
        }

        for (let i = 0; i < particleCount; i++) particles.push(new BdayParticle());

        function animateParticles() {
            ctx.clearRect(0, 0, width, height);
            particles.forEach(p => { p.update(); p.draw(); });
            requestAnimationFrame(animateParticles);
        }
        animateParticles();
    }

});
