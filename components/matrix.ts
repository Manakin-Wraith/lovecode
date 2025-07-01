class Symbol {
  private x: number;
  private y: number;
  private fontSize: number;
  private canvasHeight: number;
  public text: string = '';

  constructor(x: number, y: number, fontSize: number, canvasHeight: number) {
    this.x = x;
    this.y = y;
    this.fontSize = fontSize;
    this.canvasHeight = canvasHeight;
  }

  public draw(context: CanvasRenderingContext2D) {
    const chars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.text = chars.charAt(Math.floor(Math.random() * chars.length));
    context.fillStyle = '#00FF41';
    context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
    if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.98) {
      this.y = 0;
    } else {
      this.y += 1;
    }
  }
}

class Effect {
  private canvasWidth: number;
  private canvasHeight: number;
  private fontSize = 16;
  private columns: number;
  private symbols: Symbol[] = [];

  constructor(canvasWidth: number, canvasHeight: number) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.columns = this.canvasWidth / this.fontSize;
    this.#initialize();
  }

  #initialize() {
    for (let i = 0; i < this.columns; i++) {
      this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);
    }
  }

  public resize(width: number, height: number) {
    this.canvasWidth = width;
    this.canvasHeight = height;
    this.columns = this.canvasWidth / this.fontSize;
    this.symbols = [];
    this.#initialize();
  }

  public draw(context: CanvasRenderingContext2D) {
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.textAlign = 'center';
    context.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
    context.font = this.fontSize + 'px monospace';
    this.symbols.forEach(symbol => symbol.draw(context));
  }
}

export class MatrixRain {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    private effect: Effect;
    private animationFrameId: number | null = null;
    private lastTime = 0;
    private fps = 15;
    private nextFrame = 1000 / this.fps;
    private timer = 0;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        const ctx = canvas.getContext('2d');
        if (!ctx) throw new Error("Could not get 2D context");
        this.context = ctx;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.effect = new Effect(this.canvas.width, this.canvas.height);

        window.addEventListener('resize', () => {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            this.effect.resize(this.canvas.width, this.canvas.height);
        });
    }

    private animate = (timeStamp: number) => {
        const deltaTime = timeStamp - this.lastTime;
        this.lastTime = timeStamp;

        if (this.timer > this.nextFrame) {
            this.effect.draw(this.context);
            this.timer = 0;
        } else {
            this.timer += deltaTime;
        }

        this.animationFrameId = requestAnimationFrame(this.animate);
    }

    public start = () => {
        if (this.animationFrameId) return; // Already running
        this.animationFrameId = requestAnimationFrame(this.animate);
    }

    public stop = () => {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
            // Optionally clear the canvas
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }
}
