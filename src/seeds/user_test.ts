import { v4 as uuid } from "uuid";
import { hash } from "bcryptjs";

import createConnection from "../database";

export async function createUserTest() {
  const connection = await createConnection("localhost");

  const id = uuid();
  const password = await hash("user", 8);

  await connection.query(
    `INSERT INTO USERS(id_tecesp, name, email, password, admin, created_at, updated_at, deleted_at) 
    VALUES('${id}', 'user_test', 'user_test@auditcenter.com.br', '${password}', false, 'now()', 'now()', null)`
  );

  await connection.close();
}

createUserTest().then(() => console.log("User test created!"));