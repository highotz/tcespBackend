import { v4 as uuid } from "uuid";
import { hash } from "bcryptjs";

import createConnection from "../database";

export async function createAdmin() {
  const connection = await createConnection("localhost");

  const id = uuid();
  const password = await hash("admin", 8);

  await connection.query(
    `INSERT INTO USERS(id_tecesp, name, email, password, admin, created_at, updated_at, deleted_at) 
    VALUES('${id}', 'admin', 'admin@auditcenter.com.br', '${password}', true, 'now()', 'now()', null)`
  );

  await connection.close();
}

createAdmin().then(() => console.log("User admin created!"));