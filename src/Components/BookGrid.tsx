import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Books {
  id: number;
  name: string;
}

interface FetchBooksResponse {
  count: number;

  results: Books[];
}

const BookGrid = () => {
  const [books, setBooks] = useState<Books[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchBooksResponse>("/games")
      .then((res) => setBooks(res.data.results))
      .catch((err) => setError(err.message));
  }, []);
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.name}</li>
        ))}
      </ul>
    </>
  );
};

export default BookGrid;
