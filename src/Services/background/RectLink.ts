import {
    LINK_FONT,
    LINK_FONT_HOVER,
    PIXEL_RATIO,
    randomDec,
    randomInt,
} from './definitions'

interface RectLinkArgs {
    title: string
    href: string
    strokeStyle: string
    context: CanvasRenderingContext2D
}

class RectLink {
    private x: number

    private y: number

    private linkWidth: number

    private linkHeight: number

    private title: string

    private href: string

    private context: CanvasRenderingContext2D

    private vel_y: number

    private vel_x: number

    private mouseX: number = 0

    private mouseY: number = 0

    private isPaused: boolean = false

    private strokeStyle: string

    constructor(args: RectLinkArgs) {
        this.title = args.title
        this.href = args.href
        this.strokeStyle = args.strokeStyle
        const { context } = args

        // compute link rect
        context.font = LINK_FONT
        this.linkWidth = context.measureText(this.title).width
        this.linkHeight = parseInt(context.font, 10)

        // setup movement
        this.x = randomInt(0, context.canvas.width - this.linkWidth)
        this.y = randomInt(0, context.canvas.height - this.linkHeight)
        this.vel_y = 1
        this.vel_x = 1
        this.vel_y = randomDec(0.25 * PIXEL_RATIO, 0.65 * PIXEL_RATIO)
        this.vel_x = randomDec(0.5 * PIXEL_RATIO, 0.65 * PIXEL_RATIO)
        if (randomInt(0, 1)) this.vel_x = -this.vel_x
        if (randomInt(0, 1)) this.vel_y = -this.vel_y

        this.context = context
    }

    update() {
        this.collisionBoundaries()
        this.collisionMouse()
        this.draw()

        if (this.isPaused) return
        this.move()
    }

    collisionBoundaries() {
        const { width } = this.context.canvas
        const { height } = this.context.canvas

        if (this.right() > width || this.left() < 0) {
            this.invertVelX()
        }

        if (this.bottom() > height || this.top() < 0) {
            this.invertVelY()
        }
    }

    collisionMouse() {
        if (this.isPointInPath()) this.isPaused = true
        else this.isPaused = false
    }

    isPointInPath() {
        const { context, x, y, linkHeight, linkWidth } = this

        context.beginPath()
        context.moveTo(x, y)
        context.lineTo(x + linkWidth, y)
        context.lineTo(x + linkWidth, y + linkHeight)
        context.lineTo(x, y + linkHeight)
        context.lineTo(x, y)
        context.closePath()

        return context.isPointInPath(this.mouseX, this.mouseY)
    }

    updateMouse(mouseX: number, mouseY: number) {
        this.mouseX = mouseX
        this.mouseY = mouseY
    }

    move() {
        this.x += this.vel_x
        this.y += this.vel_y
    }

    draw() {
        this.setRect()
        const { x, y, linkWidth, linkHeight, title, context } = this

        // Clear previous frame text
        context.clearRect(x, y, linkWidth, linkHeight + context.lineWidth)

        // Draw the text link
        context.fillText(title, x + linkWidth / 2, y + linkHeight / 2)

        // Underline the link
        context.beginPath()
        context.moveTo(x, y + linkHeight)
        context.lineTo(x + linkWidth, y + linkHeight)
        context.strokeStyle = this.strokeStyle
        context.stroke()
    }

    setTextParams(font: string) {
        const { context } = this
        context.lineWidth = this.isPaused ? 6 : 4
        context.textBaseline = 'top'
        context.textAlign = 'center'
        context.textBaseline = 'middle'
        context.globalAlpha = 0.9
        context.font = font
    }

    setRect() {
        this.setTextParams(this.isPaused ? LINK_FONT_HOVER : LINK_FONT)
        this.linkWidth = this.context.measureText(this.title).width
        this.linkHeight = parseInt(this.context.font, 10)
    }

    getHref() {
        return this.href
    }

    invertVelX() {
        this.vel_x = -this.vel_x
    }

    invertVelY() {
        this.vel_y = -this.vel_y
    }

    top() {
        return this.y
    }

    bottom() {
        return this.y + this.linkHeight
    }

    left() {
        return this.x
    }

    right() {
        return this.x + this.linkWidth
    }
}

export default RectLink
