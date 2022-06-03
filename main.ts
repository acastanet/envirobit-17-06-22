let vert = 0
envirobit.setLEDs(envirobit.OnOff.Off)
basic.showIcon(IconNames.Asleep)
/**
 * Light  3000
 * 
 * Hum 100
 * 
 * Pression
 */
basic.forever(function () {
    vert = envirobit.getHumidity()
    vert = Math.map(vert, 0, 100, 0, 24)
    led.plotBarGraph(
    vert,
    24
    )
})
