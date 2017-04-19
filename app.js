window.onload = function() {

let canvas = document.querySelector('#canvas')
let ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

ctx.strokeStyle = '#BADA55'
ctx.lineJoin = 'round'
ctx.lineCap = 'round'

let isDrawing = false
let lastX = 0
let lastY = 0

function draw(e) {
  if (!isDrawing) {
    return //this stops the function from running when they are not moused down
  }
  console.log(e);
  ctx.beginPath()
  ctx.moveTo(lastX, lastY)
  ctx.lineTo(e.offsetX, e.offsetY)
  ctx.stroke()
}

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mousedown', () => isDrawing = true)
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)

}
