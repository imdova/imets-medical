import { useState, KeyboardEvent } from "react";
import { Plus, X } from "lucide-react";
import IconButton from "../buttons/IconButton";
import CustomInput from "./CustomInput";

interface MultiTextInputProps {
  defaultValue?: string;
  placeholder?: string;
  onChange?: (items: string) => void;
}

const MultiTextInput = ({
  defaultValue = "",
  placeholder = "Type skills and press Enter",
  onChange,
}: MultiTextInputProps) => {
  const [items, setItems] = useState<string[]>(
    defaultValue.split(", ").filter((item) => item.trim() !== "")
  );
  const [inputValue, setInputValue] = useState<string>("");

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      addItems(inputValue);
    }
  };

  const addItems = (input: string) => {
    const newEntries = input
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item !== "");

    if (newEntries.length > 0) {
      const uniqueNewItems = [...new Set([...items, ...newEntries])];
      setItems(uniqueNewItems);
      setInputValue("");
      onChange?.(uniqueNewItems.join(", "));
    }
  };

  const removeItem = (itemToRemove: string) => {
    const newItems = items.filter((item) => item !== itemToRemove);
    setItems(newItems);
    onChange?.(newItems.join(", "));
  };

  return (
    <div className="w-full">
      <div className="mb-2 flex flex-wrap gap-2">
        {items.map((item) => (
          <div
            key={item} // Using the item itself as the key (assuming items are unique)
            className="rounded-base text-main relative space-x-2 border bg-white px-2 py-1 duration-100"
          >
            <span>{item}</span>
            <IconButton
              className="absolute -right-2 -top-2 h-5 w-5 border bg-white p-1"
              onClick={() => removeItem(item)}
            >
              <X className="h-4 w-4" />
            </IconButton>
          </div>
        ))}
      </div>

      <div className="flex w-full items-center gap-2">
        <CustomInput
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="flex-grow"
        />
        <IconButton
          className="block md:hidden"
          onClick={() => inputValue.trim() && addItems(inputValue)}
        >
          <Plus />
        </IconButton>
      </div>

      {items.length > 0 && (
        <div className="text-sm text-gray-500">
          {items.length} item{items.length !== 1 ? "s" : ""} added
        </div>
      )}
    </div>
  );
};

export default MultiTextInput;
