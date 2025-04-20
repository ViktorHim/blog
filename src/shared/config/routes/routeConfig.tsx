import { MainPage } from "pages/Main";
import { AboutPage } from "pages/About";
import { NotFoundPage } from "pages/NotFound";
import { RouteProps } from "react-router-dom";

export enum RouteName {
  MAIN = "main",
  ABOUT = "about",
  NOT_FOUND = "not_found",
}

export const RoutePaths: Record<RouteName, string> = {
  [RouteName.MAIN]: "/",
  [RouteName.ABOUT]: "/about",
  [RouteName.NOT_FOUND]: "/not_found",
};

export const routeConfig: Record<RouteName, RouteProps> = {
  [RouteName.MAIN]: {
    path: RoutePaths[RouteName.MAIN],
    element: <MainPage />,
  },
  [RouteName.ABOUT]: {
    path: RoutePaths[RouteName.ABOUT],
    element: <AboutPage />,
  },
  [RouteName.NOT_FOUND]: {
    path: RoutePaths[RouteName.NOT_FOUND],
    element: <NotFoundPage />,
  },
};
