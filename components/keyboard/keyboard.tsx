import { cn } from "@/lib/utils";
import { KeyboardProps } from "../../interface/wordle-props";
import { DeleteIcon, CornerDownLeftIcon } from 'lucide-react';
// import { cn } from "@/lib/utils";

const Keyboard = () => {

    const keys = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L", "?"],
        ["Backspace", "Z", "X", "C", "V", "B", "N", "M", "Enter"],
    ]
    return (
        <div>
            {
                keys.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex">
                        {
                            row.map((key, keyIndex) => (
                                <div key={keyIndex} className={
                                    cn(key === "Backspace" || key === "Enter" ? "w-16" : "w-10 text-xl",
                                        "h-10 border border-gray-300 m-1 flex justify-center items-center")
                                    }>
                                    {key === "Backspace" ? <DeleteIcon />  :
                                        key === "Enter" ? <CornerDownLeftIcon /> :
                                            key}
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    );
}
export default Keyboard;