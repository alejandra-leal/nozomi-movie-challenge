import { render, renderHook, RenderOptions } from "@testing-library/react";
import { AppContext, initialState } from "context/store";
import { IAppContext } from "models/app-context";
import { ReactElement, JSXElementConstructor } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export const getContextProviderWrapper =
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

const renderOverride = (
  ui: ReactElement,
  contextData: IAppContext = initialState,
  dispatchMock = jest.fn(),
  options?: Omit<RenderOptions, "wrapper">
) => {
  const component = render(ui, {
    wrapper: getContextProviderWrapper(contextData, dispatchMock),
    ...options,
  });

  return { component };
};

const renderHookOverride = (
  callback: (param1: any, param2?:any) => any,
  contextData: IAppContext = initialState,
  dispatchMock = jest.fn(),
  options?: any
) => {
  return renderHook(callback, {
    ...options,
    wrapper: getContextProviderWrapper(contextData, dispatchMock),
  });
};

export * from "@testing-library/react";
export { renderOverride as render, renderHookOverride as renderHook };
