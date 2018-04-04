# table-merge-cell

* 实现合并相邻列单元格相同值合并，并且可控制前几行进行合并

## 使用方法

### 1.安装
```javascript
npm install table-merge-cell
```

### 2.引用
```javascript
import mergeCell from 'table-merge-cell'
```

### 3.调用
```javascript
mergeCell(dom, cellLine)
```

| 参数         | 说明   |  类型 |
| --------    | -----:  | :----:  |
| dom         | 必填，table标签上的class值 |   string    |
| cellLine    | 非必填，合并单元格作用到多少列   |   int   |