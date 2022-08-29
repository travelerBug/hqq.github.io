# Graphics

---

[官方文档](https://docs.cocos.com/creator/3.5/manual/zh/ui-system/components/editor/graphics.html)

### 快速入门

- 绘画简单来说就是绘制线条和绘制填充，对应的就是stroke 方法和fill方法
- 绘制线条：
- 1. 设置线条的宽度，系统默认是0
  2. 首尾相连需要调用close方法

- 常见应用场景：
  1. 绘制多边形
  2. 绘制线条，曲线，点
  3. 比如跟随鼠标画线/画圆 做小游戏

### 1.1 绘制矩形

* 注意：矩形的起点是从左下角开始的

```ts
this.graphics.clear()
this.graphics.rect(-400, -480, PICE_RADIUS * 2, PICE_RADIUS * 2)
this.graphics.rect(-320, -480, PICE_RADIUS * 2, PICE_RADIUS * 2)
this.graphics.fill()
```



### 1.2.绘制圆/绘制点

```ts
this.graphics.clear() 
this.graphics.fillColor.fromHEX("#ff0000")
 this.graphics.circle(-400, -480, 5)
 this.graphics.circle(-320, -480, 5)
 this.graphics.fill()
```

### 1.3.绘制线

```ts
this.graphics.clear()       
this.graphics.lineWidth = 3
this.graphics.strokeColor = Color.GREEN
this.graphics.moveTo(200, 100)
this.graphics.lineTo(400, 300)
this.graphics.lineTo(400, 500)
this.graphics.close()
this.graphics.stroke();
```

### 1.4.绘制多边形边框

```ts
this.graphics.clear()       
this.graphics.moveTo(0, 0);
this.graphics.lineTo(100, 0)
this.graphics.lineTo(100, 100)
this.graphics.lineTo(50, 150)
this.graphics.lineTo(0, 100)
this.graphics.close()
this.graphics.stroke()
```

### 1.4.绘制多边形填充

```ts
this.graphics.clear()       
this.graphics.fillColor.fromHEX("#02ff39")
this.graphics.moveTo(-300, 0);
this.graphics.lineTo(-200, 0)
this.graphics.lineTo(-200, 100)
this.graphics.lineTo(-250, 150)
this.graphics.lineTo(-300, 100)
this.graphics.fill()
```

