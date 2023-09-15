import { jest } from '@jest/globals';

global.jest = jest;
/**
 * fix: `matchMedia` not present, legacy browsers require a polyfill
 */
global.matchMedia =
  global.matchMedia ||
  // eslint-disable-next-line func-names
  function () {
    return {
      matches: false,
      addListener: jest.fn(),
      removeListener: jest.fn()
    };
  };

// Mock implementation of localStorage
const localStorageMock = (() => {
  let store = {};

  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => {
      store[key] = String(value);
    },
    removeItem: (key) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    }
  };
})();

// Assign the mock implementation to the global localStorage object
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});
