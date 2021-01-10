import BaiduMap from "../maps/baiduMap";
import GoogleMap from "../maps/googleMap";
import { renderMap } from "../renders/renderMap";

test('test_renderMap', async(done) =>{
    try {
        const googleMapInstance = new GoogleMap();
        const baiduMapInstance = new BaiduMap();
        renderMap(googleMapInstance);
        renderMap(baiduMapInstance);
    } catch (error) {
        console.warn('error', error);
    } finally {
        done();
    }
});