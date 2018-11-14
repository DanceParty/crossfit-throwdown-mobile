import { database } from "./firebase";

const normalizeDataIntoArray = objectOfObjects => {
  const arrayOfObjects = Object.keys(objectOfObjects).map(key => {
    return { id: key, ...objectOfObjects[key] };
  });
  return arrayOfObjects;
};

const splitByDivision = people => {
  const rx = people.filter(one => one.division === "RX");
  const scaled = people.filter(one => one.division === "Scaled");
  return { rx, scaled };
};

export async function fetchCompetitors() {
  const response = { data: null, error: null };
  try {
    const competitors = await database.ref("competitors").once("value");
    const men = normalizeDataIntoArray(competitors.val().men);
    const women = normalizeDataIntoArray(competitors.val().women);
    response.data = {
      men: {
        rx: splitByDivision(men).rx,
        scaled: splitByDivision(men).scaled
      },
      women: {
        rx: splitByDivision(women).rx,
        scaled: splitByDivision(women).scaled
      }
    };
  } catch (e) {
    response.error = e;
  }
  return response;
}

export async function fetchWorkouts() {
  const response = { data: null, error: null };
  try {
    const workoutsResponse = await database.ref("workouts").once("value");
    response.data = normalizeDataIntoArray(workoutsResponse.val());
  } catch (e) {
    response.error = e;
  }
  return response;
}

export async function fetchScores() {
  const response = { data: null, error: null };
  try {
    const scoresResponse = await database.ref("scores").once("value");
    response.data = normalizeDataIntoArray(scoresResponse.val());
  } catch (e) {
    response.error = e;
  }
  return response;
}
