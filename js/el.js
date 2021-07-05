class Element {
  constructor(img, dx, dy, d, sx, sy, s, id) {
    //dla quad tree
    this.x = sx;
    this.y = sy;
    this.width = s;
    this.height = s;

    //dla elementu
    this.img = img;
    this.dx = dx;
    this.dy = dy;
    this.d = d;
    this.sx = sx;
    this.sy = sy;
    this.s = s;
    this.id = id;
    this.path = new Path2D(); // tworzenie sciezki
    this.path.rect(this.sx, this.sy, this.s, this.s) //sciezki predefiniowanej, by nie robic jej za kazdym mousemove

  }

  draw() {

    ctx.drawImage(this.img, this.dx, this.dy, this.d, this.d, this.sx, this.sy, this.s, this.s)
  }

  listenClick(e) {
    // if (e.x >= this.sx &&
    //   e.y >= this.sy &&
    //   e.x < this.sx + this.s &&
    //   e.y < this.sy + this.s) {
    //this.updateElement();
    let wpisHistory = {
      event: 'change',
      what: [],
      ids: []
    };
    for (let elem of zaznaczony) {

      // ctx.drawImage(this.img, this.dx, this.dy, this.d, this.d, elem.x, elem.y, this.s, this.s)
      let co = {
        targetId: elem.id,
        targetDx: this.dx,
        targetDy: this.dy,
        prevDx: kolor[elem.id].dx,
        prevDy: kolor[elem.id].dy,
        fromId: this.id
      }
      let zazn = {
        id: elem.id
      }

      wpisHistory.what.push(co)
      wpisHistory.ids.push(zazn)
      zwroc(elem.id, this.dx, this.dy)
    }

    historia.length = currHistIndex;
    historia.push(wpisHistory)
    currHistIndex++
    //console.log(historia)

    //}
  }

  listenHover() {

    // ctx.beginPath();
    // ctx.rect(this.sx, this.sy, this.s, this.s)

    ctx.strokeStyle = "white";
    ctx.stroke(this.path)

  }
  listenBlackout() {

    // ctx.beginPath();
    // ctx.rect(this.sx, this.sy, this.s, this.s)

    ctx.strokeStyle = '#111111';
    ctx.stroke(this.path)

  }


  updateElement(ass) {
    ctx.globalAlpha = ass ? '1' : '0';
    ctx.drawImage(this.img, this.dx, this.dy, this.d, this.d, this.sx, this.sy, this.s, this.s)

  }


}