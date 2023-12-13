"use client";

import React from "react";

import useCopyToClipboard from "@/app/hooks/useCopyToClipboard";

const CopyUrl = () => {
  const [copyToClipboard] = useCopyToClipboard();
  const url = window.location.href;

  const handleClickCopy = () => {
    copyToClipboard(url);
  };

  return (
    <button
      type="button"
      className="block border-2 uppercase mt-20 p-2 w-1/1"
      onClick={handleClickCopy}
    >
      copy address
    </button>
  );
};

export default CopyUrl;
