input.onButtonPressed(Button.A, function () {
    if (troca == 0) {
        num1 += 1
        basic.showNumber(num1)
    }
    if (troca == 1) {
        num2 += 1
        basic.showNumber(num2)
    }
})
input.onButtonPressed(Button.AB, function () {
    operador += 1
    if (operador == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
        basic.pause(100)
        basic.clearScreen()
    } else {
        if (operador == 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                `)
            basic.pause(100)
            basic.clearScreen()
        } else {
            if (operador == 3) {
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
                basic.pause(100)
                basic.clearScreen()
            } else {
                if (operador == 4) {
                    basic.showLeds(`
                        . . # . .
                        . . . . .
                        # # # # #
                        . . . . .
                        . . # . .
                        `)
                    basic.pause(100)
                    basic.clearScreen()
                } else {
                    operador += 1
                    basic.showLeds(`
                        . . # . .
                        . . # . .
                        # # # # #
                        . . # . .
                        . . # . .
                        `)
                    basic.pause(100)
                    basic.clearScreen()
                }
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    troca += 1
    if (troca == 2) {
        if (operador == 1) {
            basic.showNumber(num1 + num2)
        } else {
            if (operador == 2) {
                basic.showNumber(num1 - num2)
            } else {
                if (operador == 3) {
                    basic.showNumber(num1 * num2)
                } else {
                    if (operador == 4) {
                        basic.showNumber(num1 / num2)
                    } else {
                        basic.showNumber(num1 + num2)
                    }
                }
            }
        }
    }
})
let troca = 0
let num2 = 0
let num1 = 0
let operador = 0
operador = 1
num1 = 0
num2 = 0
troca = 0
