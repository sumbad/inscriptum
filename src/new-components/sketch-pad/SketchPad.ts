type Point = {
  x: number;
  y: number;
  lineWidth: number;
  color: string;
  globalCompositeOperation: string;
};

interface SketchPadOptions {
  backgroundColor: string;
}

type DeviceType = 'pen' | 'stylus' | 'mouse' | 'touch' | 'direct';

window.requestIdleCallback =
  window.requestIdleCallback ||
  function (cb: Function) {
    setTimeout(cb, 1);
  };

export class SketchPad {
  context: CanvasRenderingContext2D;
  isMousedown = false;

  points: Point[] = [];
  strokeHistory: Point[][] = [];

  private _defaultOptions: SketchPadOptions = {
    backgroundColor: 'rgba(0,0,0,0)',
  };
  private _options: SketchPadOptions;
  private lineWidth = 0;

  // strokeStyle
  penColor = 'black';

  penSize = 1;

  get isEmpty() {
    return this.strokeHistory.length === 0;
  }

  constructor(public canvas: HTMLCanvasElement, options?: Partial<SketchPadOptions>) {
    this.context = canvas.getContext('2d')!; // TODO: validation for null
    this._options = {
      ...this._defaultOptions,
      ...options,
    };

    this.context.fillStyle = this._options.backgroundColor;
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

    const isOntouchstartSupport = 'ontouchstart' in document;
    const isIOS = /Macintosh/.test(navigator.userAgent) && isOntouchstartSupport;

    // The "Scribble" feature of iOS intercepts point events. So that we can lose some of them when tapping rapidly.
    // Use touch events for iOS platforms to prevent it. See https://developer.applevent.com/forums/thread/664108 for more information.
    if (window.PointerEvent != null && !isIOS) {
      this._handlePointerEvents();
    } else {
      this._handleMouseEvents();
      if (isOntouchstartSupport) {
        this._handleTouchEvents();
      }
    }
  }

  /**
   * Restore data from history
   */
  restore(strokeHistory = this.strokeHistory) {
    for (const stroke of strokeHistory) {
      this.context.beginPath();

      let strokePath: Point[] = [];
      stroke.map((point: Point) => {
        strokePath.push(point);
        this._draw(strokePath);
      });
    }
  }

  clear(): void {
    this.context.fillStyle = this._options.backgroundColor;
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  reset(): void {
    this.lineWidth = 0;
    this.isMousedown = false;

    this.points = [];
    this.strokeHistory = [];
  }

  toDataURL(type = 'image/png', encoderOptions?: number): string {
    return this.canvas.toDataURL(type, encoderOptions);
  }

  public async fromDataURL(
    dataUrl: string,
    options: {
      ratio?: number;
      width?: number;
      height?: number;
      xOffset?: number;
      yOffset?: number;
    } = {}
  ): Promise<void> {
    this._options = {
      ...this._options,
      backgroundColor: this._defaultOptions.backgroundColor,
    };

    this.clear();

    await new Promise<void>((resolve, reject) => {
      const image = new Image();
      const ratio = options.ratio || window.devicePixelRatio || 1;
      const width = options.width || this.canvas.width / ratio;
      const height = options.height || this.canvas.height / ratio;
      const xOffset = options.xOffset || 0;
      const yOffset = options.yOffset || 0;

      image.onload = (): void => {
        this.context.drawImage(image, xOffset, yOffset, width, height);
        resolve();
      };
      image.onerror = (error): void => {
        reject(error);
      };
      image.crossOrigin = 'anonymous';
      image.src = dataUrl;
    });
  }

  /**
   * Remove the previous stroke from history and repaint the entire canvas based on history
   */
  undoDraw(context: CanvasRenderingContext2D) {
    this.strokeHistory.pop();
    context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.strokeHistory.map((stroke) => {
      // TODO: think we can remove this block
      if (this.strokeHistory.length === 0) {
        return;
      }

      context.beginPath();

      let strokePath: Point[] = [];
      stroke.map((point: Point) => {
        strokePath.push(point);
        this._draw(strokePath);
      });
    });
  }

  private _startDraw(e: TouchEvent | MouseEvent | PointerEvent) {
    const event = this._prepareEvent(e);

    if (event == null) {
      return;
    }

    e.preventDefault();

    this.isMousedown = true;

    this.lineWidth = Math.log(event.pressure * this.penSize + 1) * 8;
    this.context.lineWidth = this.lineWidth; // pressure * 50;

    this._addPoint(event.drawEvent, this.lineWidth);

    this._draw(this.points);
  }

  private _continueDraw(e: TouchEvent | MouseEvent | PointerEvent) {
    if (!this.isMousedown) {
      return;
    }

    const event = this._prepareEvent(e);

    if (event == null) {
      return;
    }

    // TODO: analyze next code
    // smoothen line width
    let lineWidth = Math.log(event.pressure * this.penSize + 1) * 8;
    lineWidth = lineWidth + this.lineWidth * 0.5;
    this.lineWidth = lineWidth;

    this._addPoint(event.drawEvent, lineWidth);

    this._draw(this.points);

    // DEBUG:
    // requestIdleCallback(() => {
    //   if (event.pressure === 0.24) {
    //     // $force.textContent = 'force = ' + pressure;
    //     console.log('force (pressure) = ' + event.pressure);
    //     console.log('lineWidth = ' + lineWidth);

    //     const touch = 'touches' in e ? e.touches[0] : null;
    //     if (touch != null) {
    //       // $touches.innerHTML = `
    //       console.log(`
    //       touchType = ${touch['touchType']} (${event.deviceType}) ${touch['touchType'] === 'direct' ? '👆' : '✍️'} <br/>
    //       radiusX = ${touch.radiusX} <br/>
    //       radiusY = ${touch.radiusY} <br/>
    //       rotationAngle = ${touch.rotationAngle} <br/>
    //       altitudeAngle = ${touch['altitudeAngle']} <br/>
    //       azimuthAngle = ${touch['azimuthAngle']} <br/>
    //     `);
    //     }
    //   }
    // });
  }

  private _stopDraw() {
    this.isMousedown = false;

    requestIdleCallback(() => {
      this.strokeHistory.push([...this.points]);
      this.points = [];
    });

    this.lineWidth = 0;
  }

  /**
   * This function takes in an array of points and draws them onto the canvas.
   * @param strokePath - array of points to draw on the canvas
   */
  private _draw(strokePath: Point[]) {
    this.context.lineCap = 'round';
    this.context.lineJoin = 'round';

    const l = strokePath.length - 1;
    const point0 = strokePath[l - 1];
    const point1 = strokePath[l];

    this.context.strokeStyle = point1.color;
    this.context.globalCompositeOperation = point1.globalCompositeOperation;

    if (strokePath.length >= 3) {
      const xc = (point1.x + point0.x) / 2;
      const yc = (point1.y + point0.y) / 2;
      this.context.lineWidth = point0.lineWidth;
      this.context.quadraticCurveTo(point0.x, point0.y, xc, yc);
      this.context.stroke();
      this.context.beginPath();
      this.context.moveTo(xc, yc);
    } else {
      this.context.lineWidth = point1.lineWidth;
      this.context.beginPath();
      this.context.moveTo(point1.x, point1.y);
      this.context.stroke();
    }
  }

  private _prepareEvent(event: TouchEvent | MouseEvent | PointerEvent) {
    let pressure = 0;
    let drawEvent: PointerEvent | MouseEvent | Touch;
    let deviceType: DeviceType = 'mouse';

    if ('touches' in event) {
      if (event.touches.length === 1) {
        event.preventDefault();

        const touch = event.touches[0];
        pressure = touch.force;
        deviceType = touch['touchType'];
        drawEvent = touch;
      } else {
        return null;
      }
    } else {
      if ('pressure' in event) {
        pressure = event.pressure / 2.5;
        deviceType = event.pointerType as DeviceType;
      }
      drawEvent = event;
    }

    if (['direct', 'mouse', undefined].includes(deviceType) && pressure === 0) {
      pressure = this.penSize / 5;
    }

    return {
      pressure,
      drawEvent,
      deviceType,
    };
  }

  private _addPoint(event: PointerEvent | MouseEvent | Touch, lineWidth: number) {
    const canvasRect = this.canvas.getBoundingClientRect();

    const x = event.clientX - canvasRect.left;
    const y = event.clientY - canvasRect.top;

    this.points.push({
      x,
      y,
      lineWidth,
      color: this.penColor,
      globalCompositeOperation: this.context.globalCompositeOperation,
    });
  }

  private _handlePointerEvents(): void {
    this.canvas.addEventListener('pointerdown', this._startDraw.bind(this));
    this.canvas.addEventListener('pointermove', this._continueDraw.bind(this));
    document.addEventListener('pointerup', this._stopDraw.bind(this));
  }

  private _handleMouseEvents(): void {
    this.canvas.addEventListener('mousedown', this._startDraw.bind(this));
    this.canvas.addEventListener('mousemove', this._continueDraw.bind(this));
    document.addEventListener('mouseup', this._stopDraw.bind(this));
  }

  private _handleTouchEvents(): void {
    this.canvas.addEventListener('touchstart', this._startDraw.bind(this));
    this.canvas.addEventListener('touchmove', this._continueDraw.bind(this));
    this.canvas.addEventListener('touchend', this._stopDraw.bind(this));
  }
}
