# adapter_pattern example nodejs

This repository is a example of  adapter pattern with nodejs

## introduction 

Adapter is a structural design pattern that allows objects with incompatible interfaces to collaborate.

## example
Assume GoogleMap and BaiduMap both have show function to render their map content at begin

GoogleMap.ts
```javascript===
import { Map } from "../interfaces/map.interface";

export default class GoogleMap implements Map {
    show() {
        console.log('開始宣染Google地圖');
    }
}
```

BaiduMap,ts
```javascript===
import { Map } from "../interfaces/map.interface";

export default class BaiduMap implements Map {
    show() {
        console.log('開始宣染百度地圖');
    }
}
```
renderMap.ts
```javascript===
import { Map } from "../interfaces/map.interface"

export  const renderMap  = (map: Map) => {
    map.show()
}
```

But after 1 month later, BaiduMap change it's render function to display


BaiduMap,ts
```javascript===
export default class BaiduMap {
    display() {
        console.log('開始宣染百度地圖');
    }
}
```

In this case, In order not to affect GoogleMap , allow origin GoogleMap and new BaiduMap work,

We will use a Adapter to allow the client could use old interface as well

BaiduMap.adapter.ts
```javascript===
import { Map } from "../interfaces/map.interface";
import BaiduMap from "../maps/baiduMap";
export default  class BaiduMapAdapter implements Map {
    private baiduMap: BaiduMap;
    constructor(baiduMap: BaiduMap) {
        this.baiduMap = baiduMap;
    }
    show() {
        return this.baiduMap.display();
    }
}
```