import { fromEvent, map, Observable, pairwise, switchMap, takeUntil } from "rxjs";

export default function () {
  const canvas = document.getElementById('canvas')! as HTMLCanvasElement;
  const canvasContext = canvas.getContext('2d')!;
  canvasContext.lineWidth = 4;
  
  interface Points {
    x: number,
    y: number,
  }
  
  const { top, left } = canvas.getBoundingClientRect();
  function drawLine([_prev, _next]: Points[]) {
    const prev = { x: _prev.x - left, y: _prev.y - top };
    const next = { x: _next.x - left, y: _next.y - top };
    canvasContext.beginPath();
    canvasContext.moveTo(prev.x, prev.y);
    canvasContext.lineTo(next.x, next.y);
    canvasContext.stroke();
  }
  
  const mousedown$ = fromEvent<MouseEvent>(canvas, 'mousedown');
  const mouseup$ = fromEvent<MouseEvent>(canvas, 'mouseup');
  const mousemove$ = fromEvent<MouseEvent>(canvas, 'mousemove');
  const mouseleave$ = fromEvent<MouseEvent>(canvas, 'mouseleave');

  const points: Observable<Points[]> = mousemove$.pipe(
    map<MouseEvent, Points>((v: MouseEvent) => ({ x: v.clientX, y: v.clientY })),
    pairwise<Points>(), // group to array
  );
  
  mousedown$.pipe(
    switchMap(() => points.pipe(
      takeUntil(mouseup$),
      takeUntil(mouseleave$),
    )),
  ).subscribe({
    next: drawLine,
  })
}
