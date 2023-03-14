import { renderHook, waitFor } from "../utils/test-helper";
import { IUseMoviesResponse, useMovies } from "./useMovies";
import { initialState } from "context/store";
import { IMovieServiceResponse } from "models/movies-service-response";

describe("useMovies hook", () => {
  const dummyServiceResponse: IMovieServiceResponse = {
    page: 1,
    results: [
      {
        id: 1,
        title: "Title 1",
        overview: "Description",
        poster_path: "/img/path",
        release_date: "",
      },
    ],
    total_pages: 2,
    total_results: 2,
  };
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it("should fetch from movieService and return results", async () => {
    jest
      .spyOn(global, "fetch")
      .mockImplementation(
        jest.fn(() =>
          Promise.resolve({ json: () => Promise.resolve(dummyServiceResponse) })
        ) as jest.Mock
      );

    const expectedResult: IUseMoviesResponse = {
      error: {},
      hasNextPage: true,
      isError: false,
      isLoading: false,
      movieResults: [
        {
          id: 1,
          overview: "Description",
          poster_path: "/img/path",
          release_date: "",
          title: "Title 1",
        },
      ],
    };

    const { result } = renderHook(() => useMovies(""), initialState);

    expect(global.fetch).toBeCalled();
    await waitFor(() => {
      expect(result.current).toMatchObject(expectedResult);
    });
  });
  it("should call fetch for the second page if the end of the page is reached", async () => {
    const jsonMock1 = jest.fn(() =>
      Promise.resolve({ json: () => Promise.resolve(dummyServiceResponse) })
    ) as unknown as jest.Mock;
    const jsonMock2 = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ ...dummyServiceResponse, page: 2 }),
      })
    ) as unknown as jest.Mock;

    jest
      .spyOn(global, "fetch")
      .mockImplementationOnce(jsonMock1)
      .mockImplementationOnce(jsonMock2);

    const { rerender } = renderHook(
      (searchQuery: string, pageNum: number): IUseMoviesResponse =>
        useMovies(searchQuery, pageNum),
      initialState,
      jest.fn(),
      {
        initialProps: false,
      }
    );

    rerender(true);
    await waitFor(() => {
      expect(global.fetch).toBeCalledTimes(2);
    });
  });
  it("should return error when service call fails", async () => {
    const errorMessage = "error!";
    jest.spyOn(global, "fetch").mockImplementation(
      jest.fn(() => {
        throw new Error(errorMessage);
      }) as jest.Mock
    );

    const expectedResult: IUseMoviesResponse = {
      error: {
        message: errorMessage,
      },
      hasNextPage: false,
      isError: true,
      isLoading: false,
      movieResults: [],
    };

    const { result } = renderHook(() => useMovies(""), initialState);

    expect(global.fetch).toBeCalled();
    await waitFor(() => {
      expect(result.current).toMatchObject(expectedResult);
    });
  });
});
