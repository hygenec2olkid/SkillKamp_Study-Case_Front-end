import { Menu } from "@headlessui/react";
import { useState } from "react";
import { ChevronDown } from "react-feather";
interface SizeProps {
  option: string[];
}

export default function Size({ option }: SizeProps) {
  const [size, setsize] = useState("Select");
  return (
    <Menu>
      <header>{option.title}</header>
      <Menu.Button
        className={`w-[350px] h-[40px] bg-primary-main2 border-[1px] border-primary-main1 text-start relative pl-2`}
      >
        {size}
        <ChevronDown
          className="absolute top-[30%] right-0 pr-1"
          size={20}
        ></ChevronDown>
      </Menu.Button>
      <Menu.Items>
        {option.selections.map((selection) => (
          <div
            key={selection.id}
            onClick={() => setsize(selection.description)}
            className="cursor-pointer"
          >
            <Menu.Item>
              {({ active }) => <p className="pl-2">{selection.description}</p>}
            </Menu.Item>
          </div>
        ))}
      </Menu.Items>
    </Menu>
  );
}

/* <p>{selection.description}</p> */
// onClick={() => setsize(selection.description)}
