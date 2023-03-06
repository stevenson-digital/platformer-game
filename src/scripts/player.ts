interface Coordinates {
  x: number
  y: number
}

interface PlayerProps {
  canvas: HTMLCanvasElement
  canvasContext: CanvasRenderingContext2D
  gravity: number
}

export class Player {
  position: Coordinates
  velocity: Coordinates
  width: number
  height: number
  canvas: HTMLCanvasElement
  canvasContext: CanvasRenderingContext2D
  gravity: number

  constructor({ canvas, canvasContext, gravity }: PlayerProps) {
    this.canvas = canvas
    this.canvasContext = canvasContext

    this.gravity = gravity

    this.position = {
      x: 100,
      y: 100,
    }

    this.velocity = {
      x: 0,
      y: 1,
    }

    this.width = 30
    this.height = 30
  }

  draw() {
    this.canvasContext.fillStyle = 'red'
    this.canvasContext.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height
    )
  }

  update() {
    this.draw()

    this.position.y += this.velocity.y

    const bottomOfPlayer = this.position.y + this.height

    // Stop player at bottom of canvas
    if (bottomOfPlayer + this.velocity.y <= this.canvas.height) {
      this.velocity.y += this.gravity
    } else {
      this.velocity.y = 0
    }
  }
}
