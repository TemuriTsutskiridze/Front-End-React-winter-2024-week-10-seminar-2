import { useTheme } from "../contexts/ThemeContext";

export default function Container() {
  const { theme, toggleTheme } = useTheme();
  console.log(theme);
  return (
    <div>
      {/* <h1 className={`${theme === "light" ? "text-red-700" : "text-white"} `}>
        Title
      </h1> */}
      <h1 className="text-red-700 dark:text-white bg-yellow-500 dark:bg-purple-500 ">
        Title
      </h1>

      <button onClick={toggleTheme} className="mt-1">
        Toggle Theme
      </button>
    </div>
  );
}
