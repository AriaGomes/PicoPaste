export const Card = (props: any) => {
  return (
    <div className="break-all rounded-lg max-h-[85vh] overflow-y-auto border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
      {props.children}
    </div>
  );
};
