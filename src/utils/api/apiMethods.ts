import {
  GET_PROPS_TYPE,
  POST_PROPS_TYPE,
  PUT_PROPS_TYPE,
} from "./apiMethodsInterface";

export const get = ({ url, header = {} }: GET_PROPS_TYPE) => {
  return fetch(url, header)
    .then((response) => {
      if (response.status < 400) {
        return response.json();
      }
      return response.json();
    })
    .then(async (response) => {
      return response;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const post = async ({ url, obj, header = {} }: POST_PROPS_TYPE) => {
  return fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...header.headers,
    },
    body: JSON.stringify(obj),
  })
    .then((response) => {
      return response.json();
    })
    .then(async (data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const put = async ({ url, obj, header = {} }: PUT_PROPS_TYPE) => {
  return fetch(url, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...header.headers,
    },
    body: JSON.stringify(obj),
  })
    .then((response) => {
      return response.json();
    })
    .then(async (data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const deleteApiMethod = async ({
  url,
  obj,
  header = {},
}: POST_PROPS_TYPE) => {
  return fetch(url, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...header.headers,
    },
    body: JSON.stringify(obj),
  })
    .then((response) => {
      return response.json();
    })
    .then(async (data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
    });
};
