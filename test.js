let rect = [
  [0, 0, 0, 0, 0],
  [0, 0, null, null, 0],
  [0, 0, null, 0, 0],
  [0, 0, null, 0, 0],
  [0, null, 0, 0, 0],
  [0, 0, 0, 0, 0],
]

let begin = { x: 2, y: 1 }
let end = { x: 2, y: 3 }
let closed = {}
let opened = {
  [begin.x + '_' + begin.y]: {
    ...begin,
    g: 1,
    h: H(end, begin),
    f: H(end, begin) + 1,
    parent: null
  }
}

function H(P, E) {
  return Math.abs(P.x - E.x) + Math.abs(P.y - E.y)
}

function canPass(map, pos) {
  if (map[pos.x] === undefined) {
    return false
  }
  let number = map[pos.x][pos.y]
  return number !== null && number !== undefined && number !== -1
}

while (true) {
  debugger
  // 判断openedList 是否为空
  let isOpenedEmpty = true
  for (let key in opened) {
    isOpenedEmpty = false
    break
  }
  // 为空退出
  if (isOpenedEmpty) {
    return
  }
  // 找到当前openedList中f值最小的节点
  let recordBestBlock = ''
  for (let key in opened) {
    if (!opened[recordBestBlock] || opened[recordBestBlock].h > opened[key].h) {
      recordBestBlock = key
    }
  }
  let bestBlock = opened[recordBestBlock]
  let { x, y } = bestBlock
  // 遍历四个方向
  let nextSteps = [
    { x, y: y - 1 },
    { x, y: y + 1 },
    { x: x - 1, y },
    { x: x + 1, y },
  ]
  nextSteps.forEach(item => {
    let index = item.x + '_' + item.y
    // console.log(rect[item.x][item.y], canPass(rect[item.x, item.y]))
    if (canPass(rect, item)) {
      if (!closed[index] && !opened[index]) {
        let g = bestBlock.g + 1
        let h = H(end, item)
        opened[index] = {
          ...item,
          g,
          h,
          f: h + g,
          parent: bestBlock,
        }
      } else if (opened[index]) {
        let currentOpened = opened[index]
        let g = bestBlock.g + 1
        if (g < currentOpened.g) {
          currentOpened.g = g
          currentOpened.f = currentOpened.h + g
          currentOpened.parent = bestBlock
        }
      }
    }
  })
  closed[recordBestBlock] = opened[recordBestBlock]
  delete opened[recordBestBlock]
  if (bestBlock.x === end.x && bestBlock.y === end.y) {
    // 遍历路径
    let prevBlock = bestBlock
    while (prevBlock) {
      console.log(prevBlock.x, prevBlock.y)
      prevBlock = prevBlock.parent
    }
    console.log('done')
    break;
  }
}