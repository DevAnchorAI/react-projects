import { useEffect, useRef, useState } from "react";
import { Viewer, Entity, PointGraphics, EntityDescription } from "resium";
import { Cartesian3, TextureUniform } from "cesium";
import * as Cesium from "cesium";
const position = Cartesian3.fromDegrees(-74.0707383, 40.7117244, 0);

function App() {

 const ref = useRef(null)
  const [camPosition, setCamPosition] =useState();
  const [ellipsoidPosition, setEllipsoidPosition] =useState();
  const [cameraPin,setCameraPin] = useState(false);
  const [locationPin,setLocationPin] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      
  
    let viewer;
    if(ref.current){
      viewer = ref.current.cesiumElement;
    }
    let cp;
    if(viewer){
      cp = viewer.scene.camera.positionWC;
    }

    if(viewer.scene.camera.positionWC){
      cp = viewer.scene.camera.positionWC;
      setCamPosition(cp);
      
    }
    let ep ;
    if (cp) {
      ep = viewer.scene.globe.ellipsoid.scaleToGeodeticSurface(cp);
      setEllipsoidPosition(ep);
      
    }
    let distance;
    if(cp && ep){
     distance = Cesium.Cartesian3.magnitude(Cesium.Cartesian3.subtract(cp, ep, new Cesium.Cartesian3()));
    }
   
    if(distance<2){
      setCameraPin(true);
      setLocationPin(false);
    }else{
      setLocationPin(true);
      setCameraPin(false);
    }
    console.log("cameraPosition, ellipsoidPosition, distance",cp,ep,distance )
  }, 1000);
  }, [camPosition,ellipsoidPosition]);

  return (
    <Viewer full ref={ref} >
      {cameraPin &&
        <Entity position={position} name="camera pin">
        <PointGraphics pixelSize={10} color={Cesium.Color.RED}/>
        <EntityDescription>
          <h1>Tokiyo</h1>
          <p>Camera Pin</p>
        </EntityDescription>
      </Entity>
     } 

{locationPin &&
        <Entity position={position} name="Locationb pin">
        <PointGraphics pixelSize={10} color={Cesium.Color.BLUE}/>
        <EntityDescription>
          <h1>Tokiyo</h1>
          <p>Location Pin</p>
        </EntityDescription>
      </Entity>
     } 
    </Viewer>
  );
}

export default App;