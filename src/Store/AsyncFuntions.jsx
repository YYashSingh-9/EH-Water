import { QueryClient } from "@tanstack/react-query";
export const queryClient = new QueryClient();
// FETCH TEMPLATE FUNCTION _____
export const fetchFunction = async (type, cookie, additional) => {
  let url = `http://127.0.0.1:3000/api/v3/${type}`;
  additional ? (url += `/${additional}`) : "";
  if (!cookie) {
    const doc = await fetch(url);
    const doc2 = await doc.json();
    return doc2;
  }
  if (cookie) {
    const doc = await fetch(url, {
      credentials: "include",
      withCredentials: true,
      method: "GET",
      headers: {
        Authorization: `Bearer ${cookie}`,
        "Content-type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        cookie: `jwt=${cookie}`,
      },
      redirect: "follow",
    });
    const doc2 = await doc.json();

    return doc2;
  }
};
export const dataSendRequest = async (
  type,
  additional,
  methodtype,
  data_to_send,
  cookie
) => {
  let url = `http://127.0.0.1:3000/api/v3/${type}`;
  additional ? (url += `/${additional}`) : "";
  let sending_data = data_to_send ? JSON.stringify(data_to_send) : "";
  const doc = await fetch(url, {
    credentials: "include",
    withCredentials: true,
    method: methodtype,
    headers: {
      Authorization: `Bearer ${cookie}`,
      "Content-type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
      cookie: `jwt=${cookie}`,
    },
    body: sending_data,
    redirect: "follow",
  });
  const doc2 = await doc.json();

  return doc2;
};

export const userRequestsHandler = async ({ request }) => {
  const documents = await request.formData();
  const doc2 = Object.fromEntries(documents);
  const intent = documents.get("intent");
  let docToSend;
  if (intent === "login") {
    docToSend = {
      email: doc2.email,
      password: doc2.password,
    };
    const doc = await dataSendRequest("user", "login", "POST", docToSend);
    return doc;
  }
  if (intent === "signup") {
    console.log(doc2);
    docToSend = {
      name: doc2.name,
      email: doc2.email,
      password: doc2.password,
      passwordConfirm: doc2.confirmpassword,
    };
    const doc = await dataSendRequest("user", "signup", "POST", docToSend);
    return doc;
  }
};
export const LogoutHandler = (cookie) => {
  const doc = dataSendRequest("user", "logout", "POST", "", cookie);
  return doc;
};
