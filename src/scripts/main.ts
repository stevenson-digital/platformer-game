import { Player } from './player'

const init = () => {
  const canvas = document.querySelector<HTMLCanvasElement>('canvas')
  const canvasContext = canvas?.getContext('2d')

  if (!canvas || !canvasContext) return

  // TODO: Investigate why setting via CSS doesn't work
  // TODO: Consider resize event
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const gravity = 0.5

  const player = new Player({ canvas, canvasContext, gravity })
  player.update()

  const animate = () => {
    requestAnimationFrame(animate)
    canvasContext.clearRect(0, 0, canvas.width, canvas.height)
    player.update()
  }

  animate()
}

init()
