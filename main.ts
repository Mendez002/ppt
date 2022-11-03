function Resultado () {
    if (Valor == Azar) {
        basic.showString("EMPATE")
    } else if (Valor == 1 && Azar == 3) {
        basic.showString("GANASTE")
    } else if (Valor == 2 && Azar == 1) {
        basic.showString("GANASTE")
    } else if (Valor == 3 && Azar == 2) {
        basic.showString("GANASTE")
    } else {
        basic.showString("PERDISTE")
    }
}
input.onButtonPressed(Button.A, function () {
    Valor += 1
    if (Valor > 3) {
        Valor = 1
    }
    if (Valor == 1) {
        basic.showIcon(IconNames.Target)
    } else if (Valor == 2) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.Target)
        basic.showIcon(IconNames.Square)
        basic.showIcon(IconNames.Scissors)
    }
    Azar = randint(1, 3)
    basic.showNumber(Azar)
    if (Azar == 1) {
        basic.showIcon(IconNames.Target)
    } else if (Azar == 2) {
        basic.showIcon(IconNames.Square)
    } else if (Azar == 3) {
        basic.showIcon(IconNames.Scissors)
    }
    basic.clearScreen()
    Resultado()
})
let Azar = 0
let Valor = 0
Valor = 0
