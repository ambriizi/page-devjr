document.addEventListener('DOMContentLoaded', () => {

    const WHATSAPP_NUMBER = '5515976039817';

    document.querySelectorAll('[data-wa-msg]').forEach(link => {
        const message = link.getAttribute('data-wa-msg');
        link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    });

    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('is-open');
            navToggle.classList.toggle('is-open', isOpen);
            navToggle.setAttribute('aria-expanded', String(isOpen));
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('is-open');
                navToggle.classList.remove('is-open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    const waveName = document.getElementById('waveName');

    if (waveName) {
        const text = waveName.textContent.trim();
        waveName.textContent = '';
        waveName.setAttribute('aria-label', text);

        [...text].forEach((char, index) => {
            const span = document.createElement('span');
            span.className = 'letter' + (char === ' ' ? ' is-space' : '');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.animationDelay = `${index * 0.08}s`;
            span.setAttribute('aria-hidden', 'true');
            waveName.appendChild(span);
        });
    }

    const revealTargets = document.querySelectorAll('.element-hidden');

    if ('IntersectionObserver' in window && revealTargets.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('element-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        revealTargets.forEach(el => observer.observe(el));
    } else {
        revealTargets.forEach(el => el.classList.add('element-visible'));
    }

    const canvas = document.getElementById('gameCanvas');
    const gamePlaceholder = document.getElementById('gamePlaceholder');
    const scoreEl = document.getElementById('score');
    const highScoreEl = document.getElementById('highScore');
    const startGameBtn = document.getElementById('startGameBtn');
    const gameResult = document.getElementById('gameResult');
    const btnLeft = document.getElementById('btnLeft');
    const btnRight = document.getElementById('btnRight');

    if (canvas) {
        const ctx = canvas.getContext('2d');
        const LANES = 3;
        const laneWidth = canvas.width / LANES;

        const player = {
            lane: 1,
            width: 46,
            height: 74,
            y: canvas.height - 100
        };

        const HIGH_SCORE_KEY = 'carlosambrizi_race_highscore';
        let highScore = Number(localStorage.getItem(HIGH_SCORE_KEY)) || 0;
        highScoreEl.textContent = String(highScore);

        let obstacles = [];
        let score = 0;
        let speed = 3.2;
        let frame = 0;
        let roadOffset = 0;
        let gameActive = false;
        let rafId = null;

        function laneX(lane) {
            return lane * laneWidth + laneWidth / 2;
        }

        function movePlayer(direction) {
            if (!gameActive) return;
            player.lane = Math.min(LANES - 1, Math.max(0, player.lane + direction));
        }

        function spawnObstacle() {
            const lane = Math.floor(Math.random() * LANES);
            obstacles.push({ lane, y: -90, width: 46, height: 68, passed: false });
        }

        function drawCar(x, y, width, height, bodyColor, glow) {
            ctx.save();
            if (glow) {
                ctx.shadowColor = bodyColor;
                ctx.shadowBlur = 14;
            }
            ctx.fillStyle = bodyColor;
            const r = 10;
            ctx.beginPath();
            ctx.moveTo(x - width / 2 + r, y);
            ctx.arcTo(x + width / 2, y, x + width / 2, y + r, r);
            ctx.arcTo(x + width / 2, y + height, x + width / 2 - r, y + height, r);
            ctx.arcTo(x - width / 2, y + height, x - width / 2, y + height - r, r);
            ctx.arcTo(x - width / 2, y, x + width / 2, y, r);
            ctx.closePath();
            ctx.fill();
            ctx.restore();

            ctx.fillStyle = 'rgba(11, 15, 25, 0.55)';
            ctx.fillRect(x - width / 2 + 8, y + height * 0.28, width - 16, height * 0.32);
        }

        function drawRoad() {
            ctx.fillStyle = '#161E2E';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.strokeStyle = 'rgba(148, 163, 184, 0.35)';
            ctx.lineWidth = 2;
            for (let lane = 1; lane < LANES; lane++) {
                const x = lane * laneWidth;
                ctx.setLineDash([16, 18]);
                ctx.lineDashOffset = -roadOffset;
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();
            }
            ctx.setLineDash([]);
        }

        function resetGame() {
            obstacles = [];
            score = 0;
            speed = 3.2;
            frame = 0;
            roadOffset = 0;
            player.lane = 1;
        }

        function endGame(crashed) {
            gameActive = false;
            cancelAnimationFrame(rafId);

            if (score > highScore) {
                highScore = score;
                localStorage.setItem(HIGH_SCORE_KEY, String(highScore));
                highScoreEl.textContent = String(highScore);
            }

            startGameBtn.disabled = false;
            startGameBtn.textContent = 'Jogar de novo';
            gameResult.textContent = crashed
                ? `Você bateu! Pontuação: ${score}.`
                : `Fim de jogo! Pontuação: ${score}.`;
        }

        function loop() {
            if (!gameActive) return;

            frame += 1;
            roadOffset = (roadOffset + speed) % 34;
            speed += 0.0025;

            if (frame % Math.max(28, Math.floor(60 - speed * 4)) === 0) {
                spawnObstacle();
            }

            drawRoad();

            const playerX = laneX(player.lane);
            let crashed = false;

            obstacles.forEach(obstacle => {
                obstacle.y += speed;

                if (!obstacle.passed && obstacle.y > player.y + player.height) {
                    obstacle.passed = true;
                    score += 1;
                    scoreEl.textContent = String(score);
                }

                const obstacleX = laneX(obstacle.lane);
                drawCar(obstacleX, obstacle.y, obstacle.width, obstacle.height, '#f87171', false);

                const sameLane = obstacle.lane === player.lane;
                const overlapY = obstacle.y < player.y + player.height && obstacle.y + obstacle.height > player.y;
                if (sameLane && overlapY) {
                    crashed = true;
                }
            });

            obstacles = obstacles.filter(o => o.y < canvas.height + 100);

            drawCar(playerX, player.y, player.width, player.height, '#38bdf8', true);

            if (crashed) {
                endGame(true);
                return;
            }

            rafId = requestAnimationFrame(loop);
        }

        function startGame() {
            if (gameActive) return;

            gameActive = true;
            resetGame();
            scoreEl.textContent = '0';
            gameResult.textContent = '';
            if (gamePlaceholder) gamePlaceholder.style.display = 'none';
            startGameBtn.disabled = true;
            startGameBtn.textContent = 'Jogando...';

            rafId = requestAnimationFrame(loop);
        }

        drawRoad();

        if (startGameBtn) startGameBtn.addEventListener('click', startGame);
        if (btnLeft) btnLeft.addEventListener('click', () => movePlayer(-1));
        if (btnRight) btnRight.addEventListener('click', () => movePlayer(1));

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') movePlayer(-1);
            if (e.key === 'ArrowRight') movePlayer(1);
        });
    }

});