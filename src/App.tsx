import "./styles/global.scss";

import "./styles/sidebar.scss";
import "./styles/content.scss";
import { SideBar } from "./components/SideBar";
import { Content } from "./components/Content";
import AppProvider from "./context/AppContext";

export interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

export interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function App() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <AppProvider>
        <SideBar />
        <Content />
      </AppProvider>
    </div>
  );
}
