radio.setGroup(1)
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 200) {
        basic.clearScreen()
        led.plot(4, 2)
        radio.sendNumber(1)
    } else if (input.acceleration(Dimension.X) < -200) {
        basic.clearScreen()
        led.plot(0, 2)
        radio.sendNumber(2)
    } else if (input.acceleration(Dimension.Y) > 200) {
        basic.clearScreen()
        led.plot(2, 4)
        radio.sendNumber(3)
    } else if (input.acceleration(Dimension.Y) < -200) {
        basic.clearScreen()
        led.plot(2, 0)
        radio.sendNumber(4)
    } else {
        basic.clearScreen()
        led.plot(2, 2)
        radio.sendNumber(0)
    }
})
