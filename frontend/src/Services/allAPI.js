import { commonAPI } from "./commonAPI";
import { server_url } from "./server_url";

// Auth
export const registerAPI = async (userData) => commonAPI("POST", `${server_url}/api/auth/register`, userData);
export const loginAPI = async (userData) => commonAPI("POST", `${server_url}/api/auth/login`, userData);

// Books
export const getAllBooksAPI = async () => commonAPI("GET", `${server_url}/api/books`);
export const getBookByIdAPI = async (id) => commonAPI("GET", `${server_url}/api/books/${id}`);
export const addBookAPI = async (bookData, headers) => commonAPI("POST", `${server_url}/api/books/add`, bookData, headers);

// Reviews
export const addReviewAPI = async (bookId, reviewData, headers) =>
  commonAPI("POST", `${server_url}/api/books/${bookId}/reviews`, reviewData, headers);
