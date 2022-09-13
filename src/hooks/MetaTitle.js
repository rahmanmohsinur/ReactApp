import { useEffect, useState } from "react";

const useMetaTitle = title => {
  const [metaTitle, setMetaTitle] = useState(title);

  useEffect(() => {
    document.title = metaTitle + " | Mohsinur Rahman";
  }, [metaTitle]);

  return [metaTitle, setMetaTitle];
};

export {useMetaTitle};