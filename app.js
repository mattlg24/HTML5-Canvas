window.onload = function() {

    let canvas = document.querySelector('#canvas')
    let ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    ctx.strokeStyle = '#BADA55'
    ctx.lineJoin = 'round'
    ctx.lineCap = 'round'
    ctx.lineWidth = 50

    let isDrawing = false
    let lastX = 0
    let lastY = 0
    let hue = 0

    function draw(e) {
        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
        if (!isDrawing) {
            return //this stops the function from running when they are not moused down
        }
        // console.log(e);
        ctx.beginPath()
        //start from
        ctx.moveTo(lastX, lastY)
        //go to
        ctx.lineTo(e.offsetX, e.offsetY)
        ctx.stroke()
        lastX = e.offsetX
        lastY = e.offsetY
        hue++;
        if (hue >= 360) {
            hue = 0
        }
    }

    canvas.addEventListener('mousedown', (e) => {
        isDrawing = true
        lastX = e.offsetX
        lastY = e.offsetY
    })

    canvas.addEventListener('mousemove', draw)
    canvas.addEventListener('mouseup', () => isDrawing = false)
    canvas.addEventListener('mouseout', () => isDrawing = false)

}
