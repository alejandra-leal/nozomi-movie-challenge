import { render, renderHook, RenderOptions } from "@testing-library/react";
import { AppContext, initialState } from "data/store";
import { IAppContext } from "models/app-context";
import { ReactElement, JSXElementConstructor } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export const getProvidersWrapper =
  (
    contextData: IAppContext,
    dispatchMock: jest.Mock<any, any>
  ): JSXElementConstructor<{ children: ReactElement }> =>
  ({ children }) => {
    return (
      <AppContext.Provider
        value={{ state: contextData, dispatch: dispatchMock }}
      >
        <QueryClientProvider client={new QueryClient()}>
          {children}
        </QueryClientProvider>
      </AppContext.Provider>
    );
  };

const customRender = (
  ui: ReactElement,
  contextData: IAppContext = initialState,
  dispatchMock = jest.fn(),
  options?: Omit<RenderOptions, "wrapper">
) => {
  const component = render(ui, {
    wrapper: getProvidersWrapper(contextData, dispatchMock),
    ...options,
  });

  return { component };
};

const customRenderHook = (
  callback: (props: any) => any,
  contextData: IAppContext = initialState,
  dispatchMock = jest.fn(),
  options?: any
) => {
  return renderHook(callback, {
    ...options,
    wrapper: getProvidersWrapper(contextData, dispatchMock),
  });
};

export * from "@testing-library/react";
export { customRender as render, customRenderHook as renderHook };
