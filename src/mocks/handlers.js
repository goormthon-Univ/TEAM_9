import { http, HttpResponse } from "msw";
import diseaseData from "./data/disease.json";
import medicineData from "./data/medicine.json";

const diseaseMap = diseaseData.reduce((map, data) => {
  return map.set(data.disease_code, data);
}, new Map());
const medicineMap = medicineData.reduce((map, data) => {
  return map.set(data.disease_code, data);
}, new Map());
const notFoundError = new HttpResponse("404 not found", {
  status: 404,
  headers: { "Content-Type": "text/plain" },
});

function getSeason() {
  const month = new Date().getMonth();
  if ([0, 1, 11].includes(month)) return "winter";
  if (month < 5) return "spring";
  if (month < 8) return "summer";
  return "autumn";
}

function getSeasonDiseaseList(season) {
  const disease_list = diseaseData
    .filter((e) => e.disease_season === season)
    .map(({ disease_code, disease_name }) => ({
      disease_code,
      disease_name,
    }));
  return { season, disease_list };
}

function getDiseaseFromId(id) {
  const data = diseaseData.find(({ disease_code }) => disease_code === id);
  if (data === undefined) return null;
  if (medicineMap.has(id)) return { ...data, ...medicineMap.get(id) };
  return {
    ...data,
    medicine_name: null,
    medicine_comp: null,
  };
}

//msw (mock api를 작성하실 때는 /api/를 붙여서 작성해주세요)

export const handlers = [
  http.get("/api/disease", () => {
    const season = getSeason();
    return HttpResponse.json(getSeasonDiseaseList(season));
  }),
  http.get("/api/search/disease/:query", ({ params }) => {
    const { query } = params;
    const filtered = diseaseData
      .filter((e) => e.disease_name.includes(query))
      .map(({ disease_code, disease_name }) => ({
        disease_code,
        disease_name,
      }));

    return HttpResponse.json(filtered);
  }),
  http.get("/api/disease/:id", ({ params }) => {
    const { id } = params;

    if (["spring", "summer", "autumn", "winter"].includes(id)) {
      return HttpResponse.json(getSeasonDiseaseList(id));
    }
    const data = getDiseaseFromId(id);
    if (data === null) return notFoundError.clone();
    return HttpResponse.json(data);
  }),
  http.get("/api/medicine", () => {
    const season = getSeason();
    const medicine_list = medicineData
      .filter((e) => diseaseMap.get(e.disease_code)?.disease_season === season)
      .map((data) => ({
        ...data,
        disease_name: diseaseMap.get(data.disease_code).disease_name,
      }));
    return HttpResponse.json({ season, medicine_list });
  }),
  http.get("/api/search/medicine/:query", ({ params }) => {
    const { query } = params;
    const medicine_list = medicineData.filter((e) =>
      e.medicine_name.includes(query),
    );
    return HttpResponse.json(medicine_list);
  }),
  http.get("/api/medicine/:id", ({ params }) => {
    const { id } = params;
    const data = medicineData.find(({ disease_code }) => disease_code === id);
    if (data === undefined) return notFoundError.clone();
    if (diseaseMap.has(id))
      return HttpResponse.json({
        ...data,
        disease_name: diseaseMap.get(id).disease_name,
      });
    return HttpResponse.json({
      ...data,
      disease_name: null,
      disease_code: null,
    });
  }),
  http.get("/api/invalid", () => {
    return new HttpResponse("404 not found", {
      status: 404,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }),
];
