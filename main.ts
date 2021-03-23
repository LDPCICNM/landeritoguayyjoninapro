let Tiempo = 0
input.onButtonPressed(Button.A, function () {
    Tiempo = randint(5, 15)
    basic.showIcon(IconNames.Chessboard)
    while (Tiempo > 0) {
        Tiempo += -1
        basic.pause(1000)
    }
    basic.showIcon(IconNames.Skull)
})
basic.forever(function () {
	
})
