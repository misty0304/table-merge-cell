function MergeCell (dom, cellLine) {
  const tabs = document.getElementsByClassName(dom)
  // const length = tabs[0].rows[0].cells.length + 1;
  const length = cellLine ? cellLine + 1 : tabs[0].rows[0].cells.length + 1;
  for(let j = 0; j < tabs.length; j++){
    for(let m = 0; m < length; m++) {
      const tab = tabs[j]
      const maxCol = m// maxCol：合并单元格作用到多少列
      let val
      let count
      let start 
      for(let col = maxCol - 1; col >= 0; col--) {
        count = 1
        val = ''
        for(var i = 0; i < tab.rows.length; i++) {
          if(val === tab.rows[i].cells[col].innerHTML) {
            count++;
          } else {
            if (count > 1) {
              //合并
              start = i - count;
              tab.rows[start].cells[col].rowSpan = count;
              for(let k = start + 1; k < i; k++) {
                tab.rows[k].cells[col].style.display = 'none';
              }
              count = 1
            }
            val = tab.rows[i].cells[col].innerHTML;
          }
        }
        if(count > 1) {
          //合并，最后几行相同的情况下
          start = i - count;
          tab.rows[start].cells[col].rowSpan = count;
          for(let x = start + 1; x < i; x++) {
            tab.rows[x].cells[col].style.display = 'none';
          }
        }
      }
    }
  }
}

module.exports = function (dom, cellLine) {
  var mergeCell = new MergeCell(dom, cellLine)

  return mergeCell
}