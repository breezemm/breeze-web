import Cookies from "js-cookie";

export interface StorageLike {
  getItem(key: string): string | null;

  setItem(key: string, value: string): void;

  removeItem(key: string): void;
}

export const creatCookieStorage = (prefix: string): StorageLike => {
  return {
    getItem(key: string) {
      return Cookies.get(`${prefix}:${key}`) as string | null;
    },
    setItem(key: string, value: string) {
      return Cookies.set(`${prefix}:${key}`, value);
    },
    removeItem(key: string) {
      return Cookies.remove(`${prefix}:${key}`);
    },
  };
};

export const createLocalStorage = (): StorageLike => {
  return {
    getItem(key: string) {
      const rawValue = localStorage.getItem(key);
      return rawValue ? JSON.parse(rawValue) : null;
    },
    setItem(key: string, value: string) {
      return localStorage.setItem(key, JSON.stringify(value));
    },
    removeItem(key: string) {
      return localStorage.removeItem(key);
    },
  };
};

export interface TokenStorage {
  getToken(): string | null;

  setToken(token: string): void;

  clearToken(): void;
}

export const createTokenStorage = (
  storage: StorageLike,
  key: string,
): TokenStorage => {
  return {
    getToken() {
      return storage.getItem(key);
    },
    setToken(token: string) {
      storage.setItem(key, token);
    },
    clearToken() {
      storage.removeItem(key);
    },
  };
};

export const tokenStorage = createTokenStorage(
  creatCookieStorage("breeze"),
  "token",
);
