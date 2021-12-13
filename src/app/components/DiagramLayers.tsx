import IDiagramLayers from "types/IDiagramLayers";

function DiagramLayers({ diagrams, scale = 100, height = 70 }: IDiagramLayers) {
  return (
    <div
      style={{
        position: "relative",
        width: "90%",
        height: height + "%",
        background: "white",
        borderRadius: "50px",
        border: "solid #bababa 2px",
        overflow: "hidden",
      }}
    >
      {diagrams.map((diagram) => (
        <img
          alt={diagram.type.toString()}
          key={diagram.type}
          src={diagram.imageUrl}
          style={{
            position: "absolute",
            maxHeight: scale + "%",
            maxWidth: scale + "%",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none"
          }}
        />
      ))}
    </div>
  );
}

export default DiagramLayers;
