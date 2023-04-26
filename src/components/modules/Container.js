export default function Container({ children }) {
  return (
    <div className={`bg-mainColor dark:bg-secColor text-secColor dark:text-textColor`}>
      <div className={`max-w-screen-xl m-auto md:px-8 pb-12 selection:bg-secColor selection:text-textColor dark:selection:bg-textColor dark:selection:text-secColor`}>{children}</div>
    </div>
  )
}