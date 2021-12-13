import IDiagram from "./IDiagram";

export default interface IDiagramLayers {
    diagrams: IDiagram[];
    scale?: number;
    height?: number;
}