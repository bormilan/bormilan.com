import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
  useLocation,
  useRouteError,
  HashRouter,
  Routes,
} from "react-router-dom";
import { Typography, Box } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import Main from "./components/Main";
import Post from "./components/Post";

export class DetailedError extends Error {
  override name: "DetailedError" = "DetailedError";

  constructor(
    public innerError: ResponseError | null,
    public help?: React.ReactNode,
  ) {
    super();
  }
}

export class ResponseError extends Error {
  override name: "ResponseError" = "ResponseError";
  constructor(
    public response: Response,
    msg?: string,
  ) {
    super(msg);
  }
}

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  let content: React.ReactNode | null = null;
  let details: React.ReactNode | null = null;

  if (error instanceof DetailedError) {
    content = error.help;
    if (error.innerError) {
      const response = error.innerError.response;
      details = (
        <Typography
          textAlign="inherit"
          fontSize="1em"
          sx={{
            position: "absolute",
            bottom: 0,
            mb: 4,
            fontFamily: "monospace",
            color: "rgba(0, 0, 0, 0.2)",
          }}
        >
          {response.status} {response.statusText}
        </Typography>
      );
    }
  } else {
    content = (
      <Typography fontSize="1em"> An unknown error has occurred.</Typography>
    );
  }

  return (
    <Box
      id="x"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      fontSize="1.8em"
      height="100%"
    >
      <Box fontSize="8em" sx={{ lineHeight: 0, color: "rgba(0, 0, 0, 0.3)" }}>
        <ErrorIcon fontSize="inherit" />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{ textAlign: "center" }}
      >
        {content}
      </Box>
      {details}
    </Box>
  );
}

const router = (
  <HashRouter>
    <Routes>
      <Route path="*" element={<Navigate to="/main" replace />} />
      <Route element={<App />} errorElement={<ErrorPage />}>
        <Route path="main" element={<Main />} />
        <Route path="post/:name" element={<Post />} />
      </Route>
    </Routes>
    ,
  </HashRouter>
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(<React.StrictMode>{router}</React.StrictMode>);
