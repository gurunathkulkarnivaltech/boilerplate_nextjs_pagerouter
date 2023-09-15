// To set a value in Session storage
export const setSessionStorage = (key: string, value: any) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

// To get a value from Session storage
export const getSessionStorage = (key: string) => {
  let retrievedData;
  if (sessionStorage && sessionStorage.getItem(key)) {
    try {
      retrievedData = JSON.parse(sessionStorage.getItem(key) as string);
    } catch {
      retrievedData = sessionStorage.getItem(key);
    }
  }
  return retrievedData;
};

// To Remove Particular Session Storage Data
export const deleteSessionStorage = (key: any) => {
  if (sessionStorage && sessionStorage.getItem(key)) {
    sessionStorage.removeItem(key);
  }
};

// To set a value in local storage
export const setLocalStorage = (key: any, value: any) => {
  if (typeof window === "undefined") {
    return;
  }
  if (typeof value === "string") {
    if (value) {
      localStorage.setItem(key, value);
    }
  } else {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

// To get a value from local storage
export const getLocalStorage = (key: any) => {
  let retrievedData: any;
  if (
    typeof window !== "undefined" &&
    localStorage &&
    localStorage.getItem(key)
  ) {
    retrievedData = localStorage.getItem(key);
    if (typeof retrievedData === "string") {
      return retrievedData;
    }
    return JSON.parse(retrievedData);
  }
  return retrievedData;
};

// To Remove Particular Local Storage Data
export const deleteLocalStorage = (key: any) => {
  if (localStorage && localStorage.getItem(key)) {
    localStorage.removeItem(key);
  }
};
