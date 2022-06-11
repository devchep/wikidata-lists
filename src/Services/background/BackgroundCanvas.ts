import RectLink from './RectLink'
import {
    BackgroundCanvasArgs,
    BACKGROUND_LINKS,
    PIXEL_RATIO,
} from './definitions'

class BackgroundCanvas {
    private canvas: HTMLCanvasElement

    private context: CanvasRenderingContext2D

    private links: RectLink[] = []

    constructor(args: BackgroundCanvasArgs) {
        const { canvasElement } = args
        const context = canvasElement.getContext(
            '2d'
        ) as CanvasRenderingContext2D

        this.canvas = canvasElement
        this.context = context

        this.animate()
        this.generateLinks()
        this.canvas.addEventListener('mousemove', (e: MouseEvent) =>
            this.handleMouseMove.call(this, e)
        )
    }

    generateLinks() {
        for (let i = 0; i < BACKGROUND_LINKS.length; i += 1) {
            this.initLink(
                BACKGROUND_LINKS[i].title,
                BACKGROUND_LINKS[i].href,
                BACKGROUND_LINKS[i].strokeStyle
            )
        }
    }

    initLink(title: string, href: string, strokeStyle: string) {
        const link = new RectLink({
            title,
            href,
            strokeStyle,
            context: this.context,
        })
        this.links.push(link)
    }

    resizeCanvasToDisplaySize() {
        const { canvas } = this

        const rect = canvas.getBoundingClientRect()

        const needResize =
            canvas.width !== rect.width || canvas.height !== rect.height

        if (needResize) {
            canvas.width = window.innerWidth * PIXEL_RATIO
            canvas.height = window.innerHeight * PIXEL_RATIO
        }
        return needResize
    }

    handleMouseMove(e: MouseEvent) {
        e.preventDefault()
        e.stopPropagation()
        const { links } = this

        const mouseX = e.offsetX * PIXEL_RATIO
        const mouseY = e.offsetY * PIXEL_RATIO

        links.forEach((link) => {
            link.updateMouse(mouseX, mouseY)
        })
    }

    handleLinkClick(e: MouseEvent) {
        e.preventDefault()
        e.stopPropagation()
        const { links } = this
        let href = null

        links.every((link) => {
            if (link.isPointInPath()) {
                href = link.getHref()
                return false
            }
            return true
        })

        return href
    }

    animate() {
        this.resizeCanvasToDisplaySize()
        this.updateLinks()
        requestAnimationFrame(() => this.animate())
    }

    updateLinks() {
        this.links.forEach((link) => {
            link.update()
        })
    }
}

export default BackgroundCanvas
