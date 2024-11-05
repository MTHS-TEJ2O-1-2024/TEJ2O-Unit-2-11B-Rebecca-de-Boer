/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Sep 2020
 * This program ...
*/

let randomNumber: number = 0
let randomNumber1: number = 0
let randomNumber2: number = 0

// setup
basic.clearScreen()

// generating random numbers
input.onButtonPressed(Button.A, function () {
    randomNumber1 = randint(0, 99)
    basic.showNumber(randomNumber)
})

input.onButtonPressed(Button.B, function () {
    randomNumber2 = randint(0, 99)
    basic.showNumber(randomNumber)
})

// comparing
input.onGesture(Gesture.Shake, function () {
    if (randomNumber1 > randomNumber2) {
        basic.showString(randomNumber1.toString() + " > " + randomNumber2.toString())
    } else {
        basic.showString(randomNumber1.toString() + " < " + randomNumber2.toString())
    }
})