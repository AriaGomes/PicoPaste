export const Card = (props: any) => {
  return (
    <div
      {...props}
      className={`${props.className} max-h-[85vh] overflow-y-auto break-all rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800`}
    >
      {props.children}
    </div>
  );
};
