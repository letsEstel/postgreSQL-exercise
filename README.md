# Project Setup Instructions

To run this project, you need to configure the `.env` file.

---

## **Environment Variables**

Create a `.env` file in the root directory of your project and add the following:

```env
CONNECTION_STRING="postgresql://<role_name>:<role_password>@localhost:5432/top_users"
USER="<role_name>"
USER_PWD="<role_password>"

```

## **Explanation**

### **Environment Variables**

- **`CONNECTION_STRING`**: The PostgreSQL connection string.  
  It follows this format:  
  `postgresql://<role_name>:<role_password>@localhost:5432/top_users`

  - `<role_name>`: Your PostgreSQL username.
  - `<role_password>`: Your PostgreSQL password.
  - `localhost`: The host (use `localhost` for local development or replace with your database server IP/URL).
  - `5432`: The default PostgreSQL port.
  - `top_users`: The name of your PostgreSQL database.

---

- **`USER`**: The PostgreSQL username (same as `<role_name>` in the connection string).
- **`USER_PWD`**: The password for the PostgreSQL user (same as `<role_password>` in the connection string).
