export const DefaultToggle = (props: any) => {
  return (
    <label className="relative inline-flex cursor-pointer items-center">
      <input
        id={props.id}
        type="checkbox"
        className="peer sr-only"
        onChange={props.onChange}
        disabled={props.disabled}
        checked={props.checked}
        readOnly
      />
      <div
        className={`peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white dark:border-gray-600 dark:bg-gray-700 ${
          props.toggled ? "" : "after:bg-gray-300 after:border-gray-300"
        }`}
      ></div>
      <span className={`ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 ${props.toggled ? '' : "dark:text-gray-600 text-gray-300"}`}>
        {props.children}
      </span>
    </label>
  );
};
