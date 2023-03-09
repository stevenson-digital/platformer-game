import { Player } from './player'

const initGame = () => {
  const canvas = document.querySelector<HTMLCanvasElement>('canvas')
  const canvasContext = canvas?.getContext('2d')

  if (!canvas || !canvasContext) return

  // TODO: Investigate why setting via CSS doesn't work
  // TODO: Consider resize event
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const gravity = 1
  const player = new Player({ canvas, canvasContext, gravity })
  const keys = {
    right: {
      pressed: false,
    },
    left: {
      pressed: false,
    },
  }

  player.update()

  const animate = () => {
    requestAnimationFrame(animate)
    canvasContext.clearRect(0, 0, canvas.width, canvas.height)
    player.update()

    if (keys.right.pressed) {
      player.velocity.x = 5
    } else if (keys.left.pressed) {
      player.velocity.x = -5
    } else {
      player.velocity.x = 0
    }
  }

  animate()

  addEventListener('keydown', ({ key }) => {
    switch (key) {
      case 'ArrowUp':
        player.velocity.y -= 20
        break
      case 'ArrowLeft':
        keys.left.pressed = true
        break
      case 'ArrowRight':
        keys.right.pressed = true
        break
    }
  })

  addEventListener('keyup', ({ key }) => {
    switch (key) {
      case 'ArrowLeft':
        keys.left.pressed = false
        break
      case 'ArrowRight':
        console.log('right up')

        keys.right.pressed = false
        break
    }
  })
}

initGame()
