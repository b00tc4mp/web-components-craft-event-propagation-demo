document.body.style.height = '100%'
document.body.style.margin = '0'
document.body.style.padding = '0'
document.body.style.boxSizing = 'border-box'

document.body.innerHTML = '<wall-element id="wall-1"></wall-element><wall-element id="wall-2"></wall-element>'

var wall1 = document.querySelector('#wall-1')

wall1.onControlSwitchClick = function(event) {
    if (event.target.id === 'switch-1') {
        alert('wall 1 switch 1 ' + event.target.on)
    } else if (event.target.id === 'switch-2') {
        alert('wall 1 switch 2 ' + event.target.on)
    }
}

var wall2 = document.querySelector('#wall-2')

wall2.onControlSwitchClick = function(event) {
    if (event.target.id === 'switch-1') {
        alert('wall 2 switch 1 ' + event.target.on)
    } else if (event.target.id === 'switch-2') {
        alert('wall 2 switch 2 ' + event.target.on)
    }
}