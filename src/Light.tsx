export type Props = {
/** some description*/
  variant?: "green" | "yellow" | "red";
};


const Light = ({ variant }: Props) => {
  return (
    <div
      style={{
        background: variant,
        borderRadius: "50%",
        width: 50,
        height: 50,
      }}
    ></div>
  );
};

export default Light;
