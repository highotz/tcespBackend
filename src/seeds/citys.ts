import { v4 as uuid } from "uuid";
import createConnection from "../database";

export async function createCity() {
  const connection = await createConnection("localhost");
  const id = uuid();
  const id2 = uuid();

  await connection.query(
    `INSERT INTO CITYS(id, name, site, created_at, updated_at, deleted_at) 
    VALUES('${id}', 'São José dos Campos', 'https://servicos2.sjc.sp.gov.br/servicos/portal_da_transparencia.aspx', 'now()', 'now()', null);
    INSERT INTO CITYS(id, name, site, created_at, updated_at, deleted_at) 
    VALUES('${id2}', 'Campos do Jordão', 'http://camposdojordao.sp.gov.br/transparencia/', 'now()', 'now()', null);
    `
  );

  await connection.close();
}

createCity().then(() => console.log("Citys created!"));
