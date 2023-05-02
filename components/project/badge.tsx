export const Badge = (props: any) => {
  const stack = props.item;
  return (
    <span className="mr-4 inline-flex text-gray-700 bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded-lg text-base font-bold">
      {stack}
    </span>
  );
};
