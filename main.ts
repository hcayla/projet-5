input.onButtonPressed(Button.A, function () {
    music.playSoundEffect(music.createSoundEffect(
    WaveShape.Sine,
    5000,
    0,
    255,
    0,
    500,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), SoundExpressionPlayMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    music.playSoundEffect(music.createSoundEffect(
    WaveShape.Square,
    5000,
    2738,
    255,
    197,
    500,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), SoundExpressionPlayMode.UntilDone)
})
basic.forever(function () {
	
})
