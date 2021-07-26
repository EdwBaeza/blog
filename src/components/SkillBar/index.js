import React from "react";
import { useNearScreen } from "../../hooks/useNearScreen";

export function SkillBar({ skillName, percentage }) {
  const [show, elementRef] = useNearScreen();
  return (
    <div className="relative pt-1" ref={elementRef}>
      {show && (
        <div>
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-500 bg-indigo-200">
                {skillName}
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-indigo-500">
                {percentage}%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
            <div
              style={{ width: `${percentage}%` }}
              className="animate-width shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}
