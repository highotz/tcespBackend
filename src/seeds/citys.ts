import { v4 as uuid } from "uuid";
import createConnection from "../database";

export async function createCity() {
  const connection = await createConnection("localhost");
  const id = uuid();
  const id2 = uuid();

  await connection.query(
    `INSERT INTO CITYS(id, name, site, created_at, updated_at, deleted_at) 
    VALUES('${id}', 'São Paulo', 'sp.com.br', 'now()', 'now()', null);
    INSERT INTO CITYS(id, name, site, created_at, updated_at, deleted_at) 
    VALUES('${id2}', 'Osasco', 'oz.com.br', 'now()', 'now()', null);
    `
  );

  await connection.close();
}

createCity().then(() => console.log("Citys created!"));
