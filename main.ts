input.onButtonPressed(Button.A, function () {
    T1 = input.runningTime()
    for (let index = 0; index < 10; index++) {
        while (true) {
            FZVoltage = pins.analogReadPin(AnalogReadWritePin.P2)
            if (FZVoltage >= 10) {
                Checker += 1
            } else {
                basic.pause(20)
                break;
            }
        }
    }
    T2 = input.runningTime()
    difference_time = T2 - T1
    Hertz = 1 / difference_time * 10000
    OLED12864_I2C.showNumber(
    20,
    0,
    Math.round(Hertz),
    1
    )
    OLED12864_I2C.showString(
    22,
    0,
    "HZ",
    1
    )
    OLED12864_I2C.showNumber(
    1,
    0,
    Math.round(voltage * 10) / 10,
    1
    )
    OLED12864_I2C.showString(
    4,
    0,
    "V",
    1
    )
    OLED12864_I2C.showNumber(
    1,
    3,
    Math.round(voltage * 10) / 10 * -1,
    1
    )
    OLED12864_I2C.showString(
    4,
    3,
    "V",
    1
    )
    basic.pause(350)
    OLED12864_I2C.vline(
    0,
    0,
    50,
    1
    )
    OLED12864_I2C.hline(
    0,
    15,
    60,
    1
    )
    for (let index2 = 0; index2 <= 15; index2++) {
        ange = index2 / 15 * 1.57
        OLED12864_I2C.pixel(index2, 15 - Math.sin(ange) * 15, 30)
    }
    index22 = 15
    while (index22 >= 0) {
        ange = index22 / 15 * 1.57
        OLED12864_I2C.pixel(index22 + 15, Math.sin(ange) * 15, 30)
        index22 += 0 - 1
    }
    index3 = 15
    while (index3 >= 0) {
        ange = index3 / 15 * 1.57
        OLED12864_I2C.pixel(index3 + 30, 15 + Math.sin(ange) * 15, 30)
        index3 += 0 - 1
    }
    for (let index4 = 0; index4 <= 15; index4++) {
        ange = index4 / 15 * 1.57
        OLED12864_I2C.pixel(index4 + 45, 30 - Math.sin(ange) * 15, 30)
    }
    basic.pause(1000)
    OLED12864_I2C.clear()
    Checker = 0
})
let input2 = 0
let real_value = 0
let actualvalue = 0
let ohmconverter = 0
let OhmsMeisure = 0
let index3 = 0
let voltage = 0
let Hertz = 0
let difference_time = 0
let T2 = 0
let Checker = 0
let FZVoltage = 0
let T1 = 0
let maxVolt = 0
radio.setGroup(1991)
OLED12864_I2C.init(60)
let ange: number;
let index22: number;
basic.forever(function () {
    OhmsMeisure = pins.analogReadPin(AnalogReadWritePin.P0)
    ohmconverter = 1023 * (3.3 / OhmsMeisure)
    actualvalue = -40 * ohmconverter / (33 - 10 * ohmconverter)
    real_value = actualvalue - 4
    radio.sendNumber(real_value)
    input2 = pins.analogReadPin(AnalogReadWritePin.P1)
    voltage = 4.9 * (input2 / 1023 * 3.3) * Math.sqrt(2)
})
