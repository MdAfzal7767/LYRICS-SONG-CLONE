const LYRICS_START_TIME = 17.0;

const bhajanLyrics = [
    { time: 17.0, text: "Beqarar Yeh Dil Tera" },
    { time: 19.0, text: "Paagal Hai Samjhe Na" },
    { time: 22.0, text: "Beruhki To Bahana Hai" },
    { time: 26.0, text: "Yeh Baat Kahi Uljhe Na" },
    { time: 29.5, text: "Ishq Mein Raahi Manzil Ko" },
    { time: 33.5, text: "Na Pata Hai Na Khota Hai" },
    { time: 37.0, text: "Mann Chahton Ka Anjaam Toh" },
    { time: 40.5, text: "Bas Yahi Hota Hain" },
    { time: 43.0, text: "Muskura Ke Na Dekhiye" },
    { time: 45.5, text: "Aisa Na Ho Dil Sambhle Na" },
    { time: 49.0, text: "Beruhki Toh Bahana Hai" },
    { time: 53.5, text: "Baat Kahin Uljhe Na" },
    { time: 56.0, text: "Bekarar Yeh Dil Tera" },
    { time: 58.5, text: "Paagal Hai Samjhe Na" },
    { time: 64.0, text: "....... 🎵🎵🎵......." },
    { time: 70.0, text: "Kyun Mohabbat Par" },
    { time: 73.5, text: "Yaqeen Nahi Tumko" },
    { time: 76.0, text: "Kya Lagti Nahi" },
    { time: 79.5, text: "Haseen Main Tumko" },
    { time: 83.0, text: "Parvaah Zamane Ki" },
    { time: 87.5, text: "Kyun Kar Rahe Ho" },
    { time: 90.0, text: "Kya Dikhti Hai" },
    { time: 91.5, text: "Mujhme Kami Tumko" },
    { time: 97.0, text: "Bekarar Yeh Dil Tera Hai" },
    { time: 100.0, text: "Paagal Hai Samjhe Na" },
    { time: 103.0, text: "....... 🎵🎵🎵......." },
    { time: 116.0, text: "Tu Jidhar Jaye" },
    { time: 119.5, text: "Dekhe Nazar Tujhko" },
    { time: 122.0, text: "Roz Chhup Chhup Kar" },
    { time: 125.5, text: "Main Dhoondta Tujhko" },
    { time: 128.0, text: "Khud Se Ijazat Kyun" },
    { time: 131.5, text: "Main Chahta Hoon" },
    { time: 135.0, text: "Jaane Khuda Se Main" },
    { time: 139.5, text: "Kya Mangta Hoon" },
    { time: 143.0, text: "Ishq Mein Aashiqon Ka" },
    { time: 146.5, text: "Bas Yahi Kaam Hota Hai" },
    { time: 150.0, text: "Muskurahat Par Yeh" },
    { time: 152.5, text: "Kissa Tamaam Hota Hai" },
    { time: 156.0, text: "Muskura Ke Na Dekhiye" },
    { time: 159.5, text: "Aisa Na Ho Dil Sambhale Na" },
    { time: 163.0, text: "Berukhi Toh Bahana Hai" },
    { time: 166.5, text: "Baat Kahin Uljhe Na" },
    { time: 170.0, text: "Bekarar Hai Dil" },
    { time: 173.0, text: "Tera pagal hai" },
    { time: 175.0, text: "Samjhe Na" },
    { time: 176.0, text: " LIKE " },
    { time: 179.0, text: " FOLLOW " },
    { time: 182.0, text: ".......🎵....... " },
    { time: 184.0, text: "....... 🎵🎵....... " },
    { time: 186.0, text: "....... 🎵🎵🎵....... " },
    { time: 188.0, text: " CREATE BY :- MD AFZAL " },
];

let currentLyricIndex = -1;
let homeScreen, playerScreen, lyricsContainer, status, bgMusic, playBtn, scrollHint;
let isPlaying = false;


  // BURADA GIRNE WALA SYSTEM
        let canvas, ctx, particles = [];
        let animationId = null;

        function initCanvas() {
            canvas = document.getElementById('starsCanvas');
            if (!canvas) return;
            ctx = canvas.getContext('2d');
            resizeCanvas();
            createParticles();
        }

        function resizeCanvas() {
            if (!canvas) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        function createParticles() {
            particles = [];
            const particleCount = 200;
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height - canvas.height,
                    size: Math.random() * 2.5 + 0.5,
                    speedX: Math.random() * 0.4 - 0.2,
                    speedY: Math.random() * 1.5 + 0.8,
                    opacity: Math.random() * 0.6 + 0.4,
                    rotation: Math.random() * 360
                });
            }
        }

        function animateParticles() {
            if (!ctx || !canvas) return;
            
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(p => {
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(p.rotation * Math.PI / 180);
                
                ctx.beginPath();
                ctx.arc(0, 0, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 220, 150, ${p.opacity})`;
                ctx.fill();
                
                ctx.shadowBlur = 10;
                ctx.shadowColor = `rgba(255, 200, 100, ${p.opacity * 0.8})`;
                ctx.fill();
                
                ctx.restore();

                p.x += p.speedX;
                p.y += p.speedY;
                p.rotation += 1;

                if (p.y > canvas.height + 10) {
                    p.y = -10;
                    p.x = Math.random() * canvas.width;
                }
                if (p.x > canvas.width + 10) p.x = -10;
                if (p.x < -10) p.x = canvas.width + 10;
            });

            animationId = requestAnimationFrame(animateParticles);
        }

        window.addEventListener('resize', () => {
            resizeCanvas();
        });

        // POPUP FUNCTIONS
        function showLetter() {
            const popup = document.getElementById('letterPopup');
            popup.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            
            setTimeout(() => {
                initCanvas();
                if (animationId) cancelAnimationFrame(animationId);
                animateParticles();
            }, 50);
        }

        function closeLetter() {
            document.getElementById('letterPopup').style.display = 'none';
            document.body.style.overflow = 'auto';
            if (animationId) {
                cancelAnimationFrame(animationId);
                animationId = null;
            }
        }

        window.addEventListener('DOMContentLoaded', () => {
            initCanvas();
        });


document.addEventListener('DOMContentLoaded', function() {
    homeScreen = document.getElementById('homeScreen');
    playerScreen = document.getElementById('playerScreen');
    lyricsContainer = document.getElementById('lyricsContainer');
    status = document.getElementById('status');
    bgMusic = document.getElementById('bgMusic');
    playBtn = document.getElementById('playBtn');
    scrollHint = document.getElementById('scrollHint');
    bgMusic.volume = 0.8;
    createStars();
});

function createStars() {
    const starsDiv = document.getElementById('stars');
    if (!starsDiv) return;
    for(let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 6 + 's';
        starsDiv.appendChild(star);
    }
}

function startPlayer() {
    bgMusic.play().then(function() {
        homeScreen.classList.add('hide');
        playerScreen.classList.add('show');
        loadLyricsWithTiming();
        isPlaying = true;
        updateStatus(0);
    }).catch(e => {
        status.textContent = 'love.mp3 file same folder me rakho';
        alert('love.mp3 nahi mil rahi! Same folder me rakho');
    });
}

function loadLyricsWithTiming() {
    lyricsContainer.innerHTML = '';
    bhajanLyrics.forEach((item, index) => {
        const lineDiv = document.createElement('div');
        lineDiv.className = 'lyric-line';
        lineDiv.id = 'line-' + index;
        lineDiv.textContent = item.text;
        lyricsContainer.appendChild(lineDiv);
    });
}

function updateStatus(currentTime) {
    if (currentTime < LYRICS_START_TIME) {
        const waitLeft = LYRICS_START_TIME - currentTime;
        status.textContent = `Abhi: ${formatTime(currentTime)} | Lyrics: ${formatTime(LYRICS_START_TIME)} me | Wait: ${waitLeft.toFixed(1)}s`;
    } else {
        status.textContent = `Abhi: ${formatTime(currentTime)} | Line: ${currentLyricIndex + 1}/${bhajanLyrics.length}`;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    bgMusic.addEventListener('timeupdate', function() {
        if (!isPlaying) return;
        const currentTime = bgMusic.currentTime;
        updateStatus(currentTime);

        if (currentTime < LYRICS_START_TIME) return;

        for (let i = bhajanLyrics.length - 1; i >= 0; i--) {
            if (currentTime >= bhajanLyrics[i].time) {
                if (currentLyricIndex!== i) {
                    if (currentLyricIndex >= 0) {
                        const oldLine = document.getElementById('line-' + currentLyricIndex);
                        if(oldLine) oldLine.classList.remove('active');
                    }
                    const newLine = document.getElementById('line-' + i);
                    if(newLine) {
                        newLine.classList.add('active');
                        newLine.scrollIntoView({ behavior: 'auto', block: 'center' });
                    }
                    currentLyricIndex = i;
                }
                break;
            }
        }
    });
});

function togglePlayPause() {
    if (isPlaying) {
        isPlaying = false;
        bgMusic.pause();
        playBtn.textContent = '▶ PLAY';
        scrollHint.classList.add('show');
    } else {
        isPlaying = true;
        bgMusic.play();
        playBtn.textContent = '⏸ PAUSE';
        scrollHint.classList.remove('show');
    }
}

function backToHome() {
    isPlaying = false;
    bgMusic.pause();
    bgMusic.currentTime = 0;
    currentLyricIndex = -1;
    playerScreen.classList.remove('show');
    homeScreen.classList.remove('hide');
    lyricsContainer.innerHTML = '';
    status.textContent = 'Abhi: 0:00 | Lyrics: 0:17 me | Wait: 17.0s';
}

bgMusic.onended = function() {
    status.textContent = 'Completed!';
    setTimeout(backToHome, 3700);
};

function formatTime(sec) {
    const min = Math.floor(sec / 60);
    const secLeft = Math.floor(sec % 60);
    return min + ':' + (secLeft < 10? '0' : '') + secLeft;
}


function openModal(type) {
    document.getElementById(type + 'Modal').classList.add('show');
}
function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('show');
}
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('show');
    }
}


function openCreditPopup() {
    document.getElementById('credit-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCreditPopup() {
    document.getElementById('credit-modal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.body.style.overflow = 'auto';
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.style.display = 'none';
        });
        document.body.style.overflow = 'auto';
    }
});

document.getElementById('afzalBtn').onclick = function() {
    window.open('afzal.html', 'AfzalPage', 'width=600,height=500');
};




