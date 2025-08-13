import { commonAPI } from "./commonAPI";
import { server_url } from "./server_url";

// Auth
export const registerAPI = async (userData) => commonAPI("POST", `${server_url}/api/users/register`, userData);
export const loginAPI = async (userData) => commonAPI("POST", `${server_url}/api/users/login`, userData);

// Books
export const getAllBooksAPI = async () => commonAPI("GET", `${server_url}/api/books`);
export const getBookByIdAPI = async (id) => commonAPI("GET", `${server_url}/api/books/${id}`);
export const addBookAPI = async (bookData, headers) => commonAPI("POST", `${server_url}/api/books`, bookData, headers);

// Reviews
export const addReviewAPI = async (bookId, reviewData, headers) =>
  commonAPI("POST", `${server_url}/api/books/${bookId}/review`, reviewData, headers);
