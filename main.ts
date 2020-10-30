input.onButtonPressed(Button.A, function () {
    Lock.push(0)
    led.plot(randint(0, 4), randint(0, 4))
})
// Input Check
input.onButtonPressed(Button.AB, function () {
    if (Code.length == Lock.length) {
        for (let index = 0; index <= 12; index++) {
            if (Code[index] == Lock[index]) {
            	
            } else {
                Reset()
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
                basic.pause(500)
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
                basic.clearScreen()
            }
        }
        Open = true
        Opened()
    } else {
        Reset()
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(500)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    Lock.push(1)
    led.plot(randint(0, 4), randint(0, 4))
})
function Opened () {
    basic.clearScreen()
    led.plot(0, 0)
    led.plot(0, 1)
    led.plot(0, 2)
    led.plot(0, 3)
    led.plot(0, 4)
    basic.pause(300)
    basic.clearScreen()
    led.plot(0, 0)
    led.plot(0, 1)
    led.plot(0, 2)
    led.plot(0, 3)
    led.plot(0, 4)
    led.plot(1, 0)
    led.plot(1, 1)
    led.plot(1, 2)
    led.plot(1, 3)
    led.plot(1, 4)
    basic.pause(300)
    basic.clearScreen()
    led.plot(0, 0)
    led.plot(0, 1)
    led.plot(0, 2)
    led.plot(0, 3)
    led.plot(0, 4)
    led.plot(1, 0)
    led.plot(1, 1)
    led.plot(1, 2)
    led.plot(1, 3)
    led.plot(1, 4)
    led.plot(2, 0)
    led.plot(2, 1)
    led.plot(2, 2)
    led.plot(2, 3)
    led.plot(2, 4)
    basic.pause(300)
    basic.clearScreen()
    led.plot(0, 0)
    led.plot(0, 1)
    led.plot(0, 2)
    led.plot(0, 3)
    led.plot(0, 4)
    led.plot(1, 0)
    led.plot(1, 1)
    led.plot(1, 2)
    led.plot(1, 3)
    led.plot(1, 4)
    led.plot(2, 0)
    led.plot(2, 1)
    led.plot(2, 2)
    led.plot(2, 3)
    led.plot(2, 4)
    led.plot(3, 0)
    led.plot(3, 1)
    led.plot(3, 2)
    led.plot(3, 3)
    led.plot(3, 4)
    basic.pause(300)
    basic.clearScreen()
    led.plot(0, 0)
    led.plot(0, 1)
    led.plot(0, 2)
    led.plot(0, 3)
    led.plot(0, 4)
    led.plot(1, 0)
    led.plot(1, 1)
    led.plot(1, 2)
    led.plot(1, 3)
    led.plot(1, 4)
    led.plot(2, 0)
    led.plot(2, 1)
    led.plot(2, 2)
    led.plot(2, 3)
    led.plot(2, 4)
    led.plot(3, 0)
    led.plot(3, 1)
    led.plot(3, 2)
    led.plot(3, 3)
    led.plot(3, 4)
    led.plot(4, 0)
    led.plot(4, 1)
    led.plot(4, 2)
    led.plot(4, 3)
    led.plot(4, 4)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(30)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.pause(30)
    basic.showLeds(`
        . . . . .
        . # . . .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(30)
    basic.showLeds(`
        . # . # .
        . # . . .
        # # # # #
        # # # # #
        . # # # .
        `)
    basic.pause(30)
    basic.showLeds(`
        . # # # .
        . # . . .
        # # # # #
        # # # # #
        # # # # #
        `)
    Ani = true
}
input.onGesture(Gesture.Shake, function () {
    Reset()
})
function Reset () {
    Ani = false
    Open = false
    Lock = []
    Code = [0, 1, 1, 0]
}
let Ani = false
let Open = false
let Code: number[] = []
let Lock: number[] = []
Reset()
basic.forever(function () {
    while (Open && Ani) {
        basic.showLeds(`
            . # # # .
            . # . . .
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(500)
        basic.clearScreen()
        basic.pause(500)
    }
})
