let ordenador = 0
let Eleccion = 0
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    ordenador = randint(1, 3)
    if (ordenador == 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
        control.waitMicros(4)
        basic.showIcon(IconNames.Asleep)
    } else if (ordenador == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        control.waitMicros(4)
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Scissors)
        control.waitMicros(4)
        basic.showIcon(IconNames.Happy)
    }
})
input.onGesture(Gesture.Shake, function () {
    Eleccion = randint(1, 3)
    if (Eleccion == 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
    } else if (Eleccion == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Scissors)
    ordenador = randint(1, 3)
    if (ordenador == 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
        control.waitMicros(4)
        basic.showIcon(IconNames.Sad)
    } else if (ordenador == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        control.waitMicros(4)
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Scissors)
        control.waitMicros(4)
        basic.showIcon(IconNames.Asleep)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    ordenador = randint(1, 3)
    if (ordenador == 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
        control.waitMicros(4)
        basic.showIcon(IconNames.Happy)
    } else if (ordenador == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        control.waitMicros(4)
        basic.showIcon(IconNames.Asleep)
    } else {
        basic.showIcon(IconNames.Scissors)
        control.waitMicros(4)
        basic.showIcon(IconNames.Sad)
    }
})
