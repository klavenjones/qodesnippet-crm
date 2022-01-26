import React from "react";

export const SectionHeader = ({ sectionTitle }) => {
  return (
    <div className="pb-5 my-10 border-b border-gray-200">
      <h3 className="text-lg font-medium leading-6 tracking-wide text-gray-900 uppercase">
        {sectionTitle}
      </h3>
    </div>
  );
};
