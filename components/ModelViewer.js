import { useEffect, useRef } from "react";

export default function ModelViewer({ src }) {
  const viewerRef = useRef(null);

  useEffect(() => {
    if (!viewerRef.current) return;

    import("@google/model-viewer").then(() => {
      console.log("Model Viewer loaded");
    });
  }, []);

  return (
    <model-viewer
      ref={viewerRef}
      src={src}
      alt="3D Model"
      auto-rotate
      camera-controls
      style={{ width: "100%", height: "400px" }}
    />
  );
}
