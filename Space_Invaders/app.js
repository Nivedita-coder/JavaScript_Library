document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll(".grid div");
    const resultDisplay = document.querySelector("#result");
    let width = 15;
    let currentShooterIndex = 202;
    let currentInvaderIndex = 0;
    let alienInvadersTakenDown = [];
    let result = 0;
    let direction = 1;
    let invaderId;

    const alienInvaders = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
        30, 31, 32, 33, 34, 35, 36, 37, 38, 39

    ];
    alienInvaders.forEach((invader) =>
        squares[currentInvaderIndex + invader].classList.add("invader")
    );
    squares[currentShooterIndex].classList.add("shooter");

    function moveShooter(e) {
        squares[currentShooterIndex].classList.remove("shooter");
        switch (e.keyCode) {
            case 37:
                if (currentShooterIndex % width !== 0) {
                    currentShooterIndex -= 1;
                }
                break;
            case 65:
                if (currentShooterIndex % width !== 0) {
                    currentShooterIndex -= 1;
                }
                break;
            case 39:
                if (currentShooterIndex % width < width - 1) {
                    currentShooterIndex += 1;
                }
                break;
            case 68:
                if (currentShooterIndex % width < width - 1) {
                    currentShooterIndex += 1;
                }
                break;
        }
        squares[currentShooterIndex].classList.add("shooter");
    }
    document.addEventListener("keydown", moveShooter);

    function moveInvader() {
        const leftEdge = alienInvaders[0] % width === 0
        const rightEdge = alienInvaders[alienInvaders.length - 1] % width === width - 1;

        if ((leftEdge && direction === -1) || (rightEdge && direction === 1)) {
            direction = width;
        }
        else if (direction === width) {
            if (leftEdge) direction = 1;
            else direction = -1;
        }
        for (let i = 0; i <= alienInvaders.length - 1; i++) {
            squares[alienInvaders[i]].classList.remove("invader")
        }
        for (let i = 0; i <= alienInvaders.length - 1; i++) {
            alienInvaders[i] += direction;
        }
        for (let i = 0; i <= alienInvaders.length - 1; i++) {
            if (!alienInvadersTakenDown.includes(i)) {
                squares[alienInvaders[i]].classList.add("invader")
            }
        }

        if (squares[currentShooterIndex].classList.contains("invader", "shooter")) {
            resultDisplay.textContent = "Game-Over"
            squares[currentShooterIndex].classList.add("boom")
            clearInterval(invaderId)
        }
        for (let i = 0; i <= alienInvaders.length - 1; i++) {
            if (alienInvaders[i] > (squares.length - (width - 1))) {
                resultDisplay.textContent = "Game-Over";
                clearInterval(invaderId)
            }
        }
        if (alienInvadersTakenDown.length === alienInvaders.length) {
            resultDisplay.textContent = "Winner"
            clearInterval(invaderId)
        }
    }
    invaderId = setInterval(moveInvader, 500)

    function shoot(e) {
        let laserId
        let currentLaserIndex = currentShooterIndex

        function moveLaser() {
            squares[currentLaserIndex].classList.remove("laser")
            currentLaserIndex -= width;
            squares[currentLaserIndex].classList.add('laser')
            if (squares[currentLaserIndex].classList.contains("invader")) {
                squares[currentLaserIndex].classList.remove('laser')
                squares[currentLaserIndex].classList.remove('invader')
                squares[currentLaserIndex].classList.add('boom')

                setTimeout(() => squares[currentLaserIndex].classList.remove('boom'), 250)
                clearInterval(laserId)

                const alienTakenDown = alienInvaders.indexOf(currentLaserIndex)
                alienInvadersTakenDown.push(alienTakenDown)
                result++
                resultDisplay.textContent = result
            }
            if (currentLaserIndex < width) {
                clearInterval(laserId)
                setTimeout(() => squares[currentLaserIndex].classList.remove('laser'), 100)
            }
        }
        // document.addEventListener("Keyup", e => {
        //     if (e.keyCode === 32) {
        //         laserId = setInterval(moveLaser, 100)
        //     }
        // })
        switch (e.keyCode) {
            case 32:
                laserId = setInterval(moveLaser, 100)
                break;
        }
    }
    document.addEventListener("keyup", shoot)






});
