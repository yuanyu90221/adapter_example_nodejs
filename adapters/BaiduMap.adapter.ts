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