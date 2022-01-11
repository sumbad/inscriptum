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

type InputType = 'pen' | 'stylus' | 'mouse' | 'touch' | 'direct';

window.requestIdleCallback =
  window.requestIdleCallback ||
  function (cb: Function) {
    setTimeout(cb, 1);
  };

export class SketchPad {
  context: CanvasRenderingContext2D;
  isMousedown = false;
  inputType: InputType;
  points: Point[] = [];
  strokeHistory: Point[][] = [];

  penEl: HTMLDivElement;

  private _defaultOptions: SketchPadOptions = {
    backgroundColor: 'rgba(0,0,0,0)',
  };
  private _options: SketchPadOptions;
  private lineWidth = 0;

  // strokeStyle
  private _penColor = 'black';
  set penColor(value: string) {
    this._penColor = value;

    if (this.penEl != null) {
      this.penEl.style.backgroundColor = this._penColor;
    }
  }

  private _penSize = 1;
  set penSize(value: number) {
    this._penSize = value;

    if (this.penEl != null) {
      const size = Math.floor(this._penSize);
      this.penEl.style.width = `${size}px`;
      this.penEl.style.height = `${size}px`;
    }
  }

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

    this.canvas.addEventListener('mouseout', this._mouseout);

    const size = Math.floor(this._penSize);

    this.penEl = document.createElement('div');
    this.penEl.style.width = `${size}px`;
    this.penEl.style.height = `${size}px`;
    this.penEl.style.border = '1px solid gray';
    this.penEl.style.borderRadius = '50%';
    this.penEl.style.position = 'absolute';
    this.penEl.style.pointerEvents = 'none';
    this.penEl.style.backgroundColor = this._penColor;
    this.penEl.style.left = `${-100}px`;
    this.penEl.style.top = `${-100}px`;

    canvas.after(this.penEl);
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

  setMode(mode: 'erase' | 'pencil') {
    switch (mode) {
      case 'erase':
        this.context.globalCompositeOperation = 'destination-out';
        this.penEl.style.backgroundColor = this._defaultOptions.backgroundColor;
        this.canvas.style.cursor = 'none';
        break;
      case 'pencil':
        this.context.globalCompositeOperation = 'source-over';
        this.penEl.style.backgroundColor = this._penColor;
        this.canvas.style.cursor = 'crosshair';
        break;
      default:
        break;
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
  undoDraw() {
    this.strokeHistory.pop();
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.strokeHistory.map((stroke) => {

      this.context.beginPath();

      let strokePath: Point[] = [];
      stroke.map((point: Point) => {
        strokePath.push(point);
        this._draw(strokePath);
      });
    });
  }

  private _mouseout = () => {
    this.penEl.style.left = `${-100}px`;
    this.penEl.style.top = `${-100}px`;
  };

  private _startDraw = (e: TouchEvent | MouseEvent | PointerEvent) => {
    const event = this._prepareEvent(e);

    if (event == null) {
      return;
    }

    e.preventDefault();

    this.isMousedown = true;

    this.lineWidth = Math.log(event.pressure * this._penSize + 1) * 8;
    this.context.lineWidth = this.lineWidth; // pressure * 50;

    this.points.push(this._createPoint(event.drawEvent, this.lineWidth));

    this._draw(this.points);
  };

  private _continueDraw = (e: TouchEvent | MouseEvent | PointerEvent) => {
    const event = this._prepareEvent(e);

    if (event == null) {
      return;
    }

    // TODO: analyze next code
    // smoothen line width
    let lineWidth = Math.log(event.pressure * this._penSize + 1) * 8;
    lineWidth = lineWidth + this.lineWidth * 0.5;
    this.lineWidth = lineWidth;

    const point = this._createPoint(event.drawEvent, lineWidth);

    this.penEl.style.left = `${point.x - this._penSize / 2 - 1}px`;
    this.penEl.style.top = `${point.y - this._penSize / 2 - 1}px`;

    if (!this.isMousedown) {
      return;
    }

    this.points.push(point);

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
  };

  private _stopDraw = () => {
    this.isMousedown = false;
    this.lineWidth = 0;

    requestIdleCallback(() => {
      if (this.points.length > 0) {
        this.strokeHistory.push([...this.points]);
        this.points = [];
      }
    });
  };

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
    let inputType: InputType = 'mouse';

    if ('touches' in event) {
      if (event.touches.length === 1) {
        event.preventDefault();

        const touch = event.touches[0];
        pressure = touch.force;
        inputType = touch['touchType'];
        drawEvent = touch;
      } else {
        return null;
      }
    } else {
      if ('pressure' in event) {
        pressure = event.pressure / 2.5;
        inputType = event.pointerType as InputType;
      }
      drawEvent = event;
    }

    if (['direct', 'mouse', undefined].includes(inputType) && pressure === 0) {
      pressure = this._penSize / 5;
    }

    // prevent using mouse or direct input type if the last one was pen or stylus
    if (this.inputType != null && !['pen', 'stylus'].includes(inputType)) {
      if (this.inputType != inputType) {
        return;
      }
    } else {
      this.inputType = inputType;
    }

    return {
      pressure,
      drawEvent,
      inputType,
    };
  }

  private _createPoint(event: PointerEvent | MouseEvent | Touch, lineWidth: number) {
    const canvasRect = this.canvas.getBoundingClientRect();

    const x = event.clientX - canvasRect.left;
    const y = event.clientY - canvasRect.top;

    return {
      x,
      y,
      lineWidth,
      color: this._penColor,
      globalCompositeOperation: this.context.globalCompositeOperation,
    };
  }

  private _handlePointerEvents(): void {
    this.canvas.addEventListener('pointerdown', this._startDraw);
    this.canvas.addEventListener('pointermove', this._continueDraw);
    document.addEventListener('pointerup', this._stopDraw);
  }

  private _handleMouseEvents(): void {
    this.canvas.addEventListener('mousedown', this._startDraw);
    this.canvas.addEventListener('mousemove', this._continueDraw);
    document.addEventListener('mouseup', this._stopDraw);
  }

  private _handleTouchEvents(): void {
    this.canvas.addEventListener('touchstart', this._startDraw);
    this.canvas.addEventListener('touchmove', this._continueDraw);
    this.canvas.addEventListener('touchend', this._stopDraw);
  }

  destroy() {
    this.canvas.removeEventListener('mouseout', this._mouseout);

    this.canvas.removeEventListener('pointerdown', this._startDraw);
    this.canvas.removeEventListener('pointermove', this._continueDraw);
    document.removeEventListener('pointerup', this._stopDraw);
    this.canvas.removeEventListener('mousedown', this._startDraw);
    this.canvas.removeEventListener('mousemove', this._continueDraw);
    document.removeEventListener('mouseup', this._stopDraw);
    this.canvas.removeEventListener('touchstart', this._startDraw);
    this.canvas.removeEventListener('touchmove', this._continueDraw);
    this.canvas.removeEventListener('touchend', this._stopDraw);
  }
}
