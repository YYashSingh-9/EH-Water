import { QueryClient } from "@tanstack/react-query";
export const queryClient = new QueryClient();
// FETCH TEMPLATE FUNCTION _____
export const fetchFunction = async (type, cookie, additional) => {
  // let url = `http://127.0.0.1:3000/api/v3/${type}`;
  let url = `https://ehbackend.onrender.com/api/v3/${type}`;

  additional ? (url += `/${additional}`) : "";
  if (!cookie) {
    const doc = await fetch(url);
    const doc2 = await doc.json();
    return doc2;
  }
  if (cookie) {
    const doc = await fetch(url, {
      // credentials: "include",
      // withCredentials: true,
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
  // let url = `http://127.0.0.1:3000/api/v3/${type}`;
  let url = `https://ehbackend.onrender.com/api/v3/${type}`;
  additional ? (url += `/${additional}`) : "";
  let sending_data = data_to_send ? JSON.stringify(data_to_send) : "";
  const doc = await fetch(url, {
    // credentials: "include",
    // withCredentials: true,
    method: methodtype,
    headers: {
      Authorization: `Bearer ${cookie}`,
      "Content-type": "application/json",
      Accept: "application/json",
      // "Access-Control-Allow-Origin": "http://localhost:3000",
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
  if (intent.length > 10) {
    docToSend = { ...doc2 };

    const returned_val =
      docToSend.name &&
      (await dataSendRequest("user", "updateMe", "PATCH", docToSend, intent));

    const returned_val_PW =
      docToSend.password &&
      (await dataSendRequest(
        "user",
        "update-password",
        "PATCH",
        docToSend,
        intent
      ));

    const finalVal = returned_val ? returned_val : returned_val_PW;

    return finalVal;
  }
};
export const LogoutHandler = async (cookie) => {
  const doc = await dataSendRequest("user", "logout", "POST", "", cookie);
  console.log(doc);
  return doc;
};
export const postIssue = async ({ request }) => {
  const documents = await request.formData();
  const doc2 = Object.fromEntries(documents);
  const intent = documents.get("intent");
  const doc = await dataSendRequest("issues", "", "POST", doc2, intent);
  console.log(doc);
  return doc;
};
export const GetAllIssue = async () => {
  const doc = await fetchFunction("issues", "", "");
  console.log(doc);
  return doc;
};
export const postSolution = async (data, cookie) => {
  const doc = await dataSendRequest("reviews", "", "POST", data, cookie);
  console.log(doc);
  return doc;
};
export const getIssueSolutions = async (Id) => {
  const doc = await fetchFunction("reviews", "", Id);
  return doc;
};

export const getAllUserPosts = async (cookie) => {
  const doc = await fetchFunction("user", cookie, "getMyposts");
  console.log(doc);
  return doc;
};
