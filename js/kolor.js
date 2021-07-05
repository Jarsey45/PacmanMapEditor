class Kolor {
  constructor(img, dx, dy, d, sx, sy, s, id) {
    //dla quad tree
    this.x = sx;
    this.y = sy;
    this.width = s;
    this.height = s;

    //dla elementu
    this.img = img;
    this.dx = dx; //1488
    this.dy = dy; //0
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
    let obj = {
      id: this.id
    }

    let co;


    if (ctrl) {


      zaznaczony.push(obj)
      currentId = this.id

      //console.log(zaznaczony)
      co = {
        event: 'select',
        what: zaznaczony
      }


    } else {

      zaznaczony = [];
      zaznaczony = [obj];
      currentId = this.id

      co = {
        event: 'select',
        what: zaznaczony
      }
    }
    historia.length = currHistIndex;
    historia.push(co);
    currHistIndex++
    //console.log(historia)

    //console.table(zaznaczony)
    // }
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

  //porownanie dzialania /\quadtree \/ normalny


  // listenHover(e) {
  //   // ctx.beginPath();
  //   // ctx.rect(this.sx, this.sy, this.s, this.s)

  //   ctx.strokeStyle = ctx.isPointInPath(this.path, e.x, e.y) ? "white" : '#111111';
  //   ctx.stroke(this.path)


  // }

  updateElement(dx, dy) {

    this.dx = dx; //1488
    this.dy = dy; //0

    ctx.globalAlpha = 1;
    this.draw();

    if (isAuto && zaznaczony.length < 2 && !document.getElementById('menu') &&
      !cofanie) {
      if (currentId == 575) {
        currentId = 0;
        zaznaczony[0].id = currentId;
      } else {
        currentId++;
        zaznaczony[0].id = currentId;
      }
    }

  }

  highlight() {
    ctx.globalAlpha = 1;

    ctx.strokeStyle = "#ff0000";

    ctx.stroke(this.path)
  }
}