import { db } from "../firebase/config-firebase";

export const loadData = async (uid) => {
  const response = await db.collection(`${uid}/nominas/nomina`).get();
  const data = [];

  response.forEach((nomina) => {
    const nominaData = nomina.data();

    data.push({
      id: nomina.id,
      ...nominaData,
    });
  });

  return data;
};
