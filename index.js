let x=0, y=0;
let spacing = 10;
let style = 0;
let maxStyle = 10;

function setup() {
    createCanvas(400, 400)
    background(0)
    button = createButton('change style');
    button.position(width + 30, 0)
}
function draw() {
    frameRate(25)
    fill(255)
    stroke(255)
    strokeWeight(2)

    // if (x >= width) {
    //     y += spacing;
    //     x = 0;
    // }

        if (style === 0) {
            for (let i = 0; i < width / spacing; i++) {
                let off = spacing * i
                if (random(1) < 0.5) {
                    line(x + off, y, x + spacing + off, y + spacing);
                } else {
                    line(x+off, y + spacing, x + spacing+off, y);                    
                }
            }
        } else if (style === 1) {
            for (let i = 0; i < width / spacing; i++) {
                let off = spacing * i
                if (random(1) < 0.5) {
                    line(x+off, y + spacing / 2, x + spacing+off, y + spacing / 2)
                } else {
                    line(x+off + spacing / 2, y, x + spacing / 2+off, y + spacing);
                }
            }
            
        } else if (style === 2) {
            for (let i = 0; i < width / spacing; i++) {
                let off = spacing * i
                if (random(1) < 0.5) {
                    rect(x+off, y, spacing/2, spacing/2)
                } else {
                    rect(x+spacing/2+off, y+spacing/2, spacing/2, spacing/2)
                }
            }
            
        } else if (style === 3) {
            for (let i = 0; i < width / spacing; i++) {
                let off = spacing * i
                if (random(1) < 0.5) {
                    point(x+off,y)
                } else {
                    
                }
            }
        }else if (style === 4) {
            for (let i = 0; i < width / spacing; i++) {
                let off = spacing * i
                if (random(1) < 0.5) {
                    line(x + off, y, x + spacing / 2 + off, y + spacing)
                    line(x+off+spacing/2, y + spacing, x + spacing+off, y)
                } else {
                    line(x + off, y+spacing, x + spacing / 2 + off, y)
                    line(x+off+spacing/2, y , x + spacing+off, y+spacing)
                }
            }
        } else if (style === 5) {
            for (let i = 0; i < width / spacing; i++) {
                let off = spacing * i
                if (random(1) < 0.5) {
                    point(x + off, y)
                } else {
                    line(x + off, y, x + off, y + spacing)
                }
            }
        
        }else if (style === 6) {
            for (let i = 0; i < width / spacing; i++) {
                let off = spacing * i
                if (random(1) < 0.5) {
                    point(x+off+spacing/2,y+spacing/2)
                } else {
                    line(x + off, y+spacing/2, x+ off+spacing, y+spacing/2)
                }
            }
        }else if (style === 7) {
            for (let i = 0; i < width / spacing; i++) {
                let off = spacing * i
                if (random(1) < 0.1) {
                    line(x + off, y, x + spacing + off, y + spacing);
                } else {
                    line(x+off, y + spacing, x + spacing+off, y);                    
                }
            }
        }
        else if (style === 8) {
                for (let i = 0; i < width / spacing; i++) {
                    let off = spacing * i
                    if (random(1) < 0.1) {
                        line(x+off, y + spacing, x + spacing+off, y);                    
                    } else {
                        line(x + off, y, x + spacing + off, y + spacing);
                    }
                }
            }else if (style === 9) {
                for (let i = 0; i < width / spacing; i++) {
                    let off = spacing * i
                    stroke(color(random(255),random(255),random(255)))
                    if (random(1) < 0.5) {
                        
                        point(x+off+spacing/2,y+spacing/2)           
                    } else {
                        line(x + off, y+spacing/2, x+ off+spacing, y+spacing/2)
                    }
                }
            }
    y+=spacing;
    button.mousePressed(handleStyle1)
}
    


function handleStyle1() {
    background(0)
    x = 0;
    y = 0;
    style++;
    if (style >= maxStyle) {
        style=0
    }
}