export const DefaultButton = (props: any) => {
  let theme = localStorage.getItem("theme");
  return (
    <button
      type="button"
      className="mb-2 max-h-12 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:ring-gray-300   dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
