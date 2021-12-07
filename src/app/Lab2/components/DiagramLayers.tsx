import IDiagramLayers from "types/IDiagramLayers";

function DiagramLayers({ diagrams }: IDiagramLayers) {
  return (
    <div
      style={{
        position: "relative",
        width: "90%",
        height: "70%",
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
            maxHeight: "115%",
            maxWidth: "115%",
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
