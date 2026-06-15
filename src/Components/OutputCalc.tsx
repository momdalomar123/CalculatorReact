
import type { NumberString } from "../Types/NumberString";
export default function OutputCalc({
  previousNumber,
  nextNumber,
  operation,
  operationPressed,
  exponentialClick,
  squareRootPressed,
}: Partial<NumberString>) {
  console.log("previous:", operationPressed,operation);
  return (
    <div className="bg-white/30 backdrop-blur-2xl px-5 w-100 min-h-25 rounded-2xl  border  text-4xl text-white flex  flex-col justify-center items-end break-all max-[400px]:w-full select-none ">
      {operationPressed ? (
        operation ? (
             (
            <div className="text-2xl flex gap-2 items-center">
              <div>{previousNumber}</div>
              <div className="text-[20px]">{operation}</div>
            </div>
          )
        ) : (
          <div className="text-2xl">{previousNumber}</div>
        )
      ) : (
        ""
      )}
      <div className="flex">
        {exponentialClick ? (
          <div className="flex">
            <div> {previousNumber}</div>
            <div className=" text-[20px] flex justify-end">{nextNumber}</div>
          </div>
        ) : (
          squareRootPressed? (
          <div className="flex">
            <div className=" text-4xl">{operation}</div>
            <div> {previousNumber}</div>
          </div>
        ) :
        <div>{nextNumber}</div>
        )}
      </div>

   
    </div>
  );
}
