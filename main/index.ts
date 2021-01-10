import BaiduMapAdapter from "../adapters/BaiduMap.adapter";
import BaiduMap from "../maps/baiduMap";
import GoogleMap from "../maps/googleMap";
import { renderMap } from "../renders/renderMap";

try {
    const googleMapInstance = new GoogleMap();
    const baiduMapInstance = new BaiduMap();
    renderMap(googleMapInstance);
    renderMap(new BaiduMapAdapter(baiduMapInstance));
} catch (error) {
    console.warn('error', error);
} finally {
    console.log('finish');
}