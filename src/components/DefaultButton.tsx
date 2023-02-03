export const DefaultButton = (props: any) => {
    let theme = localStorage.getItem("theme")
  return (
    <button
      type="button"
      className="mr-2 mb-2 rounded-lg hover:bg-gray-100 bg-white border border-gray-300 dark:bg-gray-800 px-5 py-2.5 text-sm font-medium dark:text-white   focus:ring-gray-300 dark:border-gray-700 dark:hover:bg-gray-700 text-gray-900"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
