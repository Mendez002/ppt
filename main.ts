input.onButtonPressed(Button.A, function () {
    if (Valor == 1) {
        basic.showIcon(IconNames.Target)
    } else if (Valor == 2) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
    Valor += 1
    if (Valor > 3) {
        Valor = 1
    }
})
function J2 () {
    Azar = randint(1, 3)
    if (Azar == 1) {
        basic.showIcon(IconNames.Target)
    } else if (Azar == 2) {
        basic.showIcon(IconNames.Square)
    } else if (Azar == 3) {
        basic.showIcon(IconNames.Scissors)
    }
}
let Azar = 0
let Valor = 0
Valor = 1
