import IDiagram from "types/IDiagram";
import ICheckbox from "types/ICheckbox";
import IApiBestoption from "types/IApiBestOption";
import IFrameResult from "types/IFrameResult";

const API_DOMAIN = "https://localhost:5001/api/v1";

export const getProperties = async (scope: number): Promise<ICheckbox[]> => {
  try {
    const response = await fetch(`${API_DOMAIN}/variant${scope}/getProperties`);

    if (response.status !== 200) return [];

    return (await response.json()).map(({ id, description }: any) => ({
      id,
      description,
    }));
  } catch (error) {
    alert("API is not available");
    console.log(error);
    return [];
  }
};

export const getTypes = async (scope: number): Promise<ICheckbox[]> => {
  try {
    const response = await fetch(`${API_DOMAIN}/variant${scope}/getTypes`);

    if (response.status !== 200) return [];

    return (await response.json()).map(({ id, description }: any) => ({
      id,
      description,
    }));
  } catch (error) {
    alert("API is not available");
    console.log(error);
    return [];
  }
};

export const calculateBestOption = async (
  scope: number,
  keys: number[]
): Promise<IApiBestoption> => {
  const _default = { id: 0, name: "" };

  try {
    const response = await fetch(
      `${API_DOMAIN}/variant${scope}/calculateBestOptions?${keys
        .map((key) => `properties=${key}`)
        .join("&")}`
    );
    if (response.status !== 200) return _default;

    const json = await response.json();

    return json?.[0] || {};
  } catch (error) {
    alert("API is not available");
    console.log(error);
    return _default;
  }
};

export const getDiagramImage = (scope: number, type: number): IDiagram => ({
  type,
  imageUrl: `${API_DOMAIN}/variant${scope}/getDiagram?type=${type}`,
});

export const getTask3Diagram = (scope: number): IDiagram => ({
  type: scope,
  imageUrl: `${API_DOMAIN}/variant${scope}/getTask3Diagram`,
});

export const getTask3DiagramByOption = (
  scope: number,
  keys: number[]
): IDiagram => ({
  type: scope,
  imageUrl: `${API_DOMAIN}/variant${scope}/getTask3DiagramByOption?${keys
    .map((key) => `properties=${key}`)
    .join("&")}`,
});

export const getTask3DiagramNames = async (
  scope: number,
  keys: number[]
): Promise<IFrameResult[]> => {
  try {
    const response = await fetch(
      `${API_DOMAIN}/variant${scope}/getTask3DiagramNames?${keys
        .map((key) => `properties=${key}`)
        .join("&")}`
    );

    if (response.status !== 200) return [];

    return (await response.json()).map(({ name, option }: any) => ({
      option,
      name,
    }));
  } catch (error) {
    alert("API is not available");
    console.log(error);
    return [];
  }
};

export const getTask3DiagramExactOption = (
  scope: number,
  option: number
): IDiagram => ({
  type: scope,
  imageUrl: `${API_DOMAIN}/variant${scope}/getTask3DiagramExactOption?option=${option}`,
});

export const getTask3DiagramLog = async (
  scope: number,
  option: number
): Promise<string> => {
  const _default = "Лог не знайдено";

  try {
    const response = await fetch(
      `${API_DOMAIN}/variant${scope}/getTask3DiagramLog?option=${option}`
    );
    if (response.status !== 200) return _default;

    const json = await response.json();

    console.log(json);

    return json?.logOutput || _default
  } catch (error) {
    alert("API is not available");
    console.log(error);
    return _default;
  }
};