import IDiagram from "types/IDiagram";
import ICheckbox from "types/ICheckbox";

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
  type: number,
  keys: number[]
): Promise<string> => {
  try {
    const response = await fetch(
      `${API_DOMAIN}/variant${type}/calculateBestOptions?${keys
        .map((key) => `properties=${key}`)
        .join("&")}`
    );

    if (response.status !== 200) return "";

    const json = await response.json();

    return json.length ? json[0].name : "";
  } catch (error) {
    alert("API is not available");
    console.log(error);
    return "";
  }
};

export const getDiagramImage = (scope: number, type: number): IDiagram => ({
  type,
  imageUrl: `${API_DOMAIN}/variant${scope}/getDiagram?type=${type}`,
});
