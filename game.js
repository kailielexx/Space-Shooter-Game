document.addEventListener('DOMContentLoaded', () => {
    const gameContainer = document.getElementById('gameContainer');
    let ship = createShip();

    function createShip() {
        let ship = document.createElement('div');
        ship.classList.add('ship');
        gameContainer.appendChild(ship);
        ship.style.left = (gameContainer.offsetWidth / 2) - 25 + 'px'; // Center the ship
        return ship;
    }

    function moveShip(event) {
        if (event.key === 'ArrowLeft' && ship.offsetLeft > 0) {
            ship.style.left = ship.offsetLeft - 10 + 'px';
        } else if (event.key === 'ArrowRight' && ship.offsetLeft < (gameContainer.offsetWidth - 50)) {
            ship.style.left = ship.offsetLeft + 10 + 'px';
        }
    }

    function shoot() {
        let bullet = document.createElement('div');
        bullet.classList.add('bullet');
        gameContainer.appendChild(bullet);
        bullet.style.left = ship.offsetLeft + 22.5 + 'px'; // Center bullet on ship
        bullet.style.bottom = '70px'; // Starting position

        let bulletInterval = setInterval(() => {
            if (bullet.offsetTop < 0) {
                clearInterval(bulletInterval);
                gameContainer.removeChild(bullet);
            } else {
                bullet.style.bottom = bullet.offsetTop + 10 + 'px';
            }
        }, 100);
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === ' ') {
            shoot();
        } else {
            moveShip(event);
        }
    });
});

