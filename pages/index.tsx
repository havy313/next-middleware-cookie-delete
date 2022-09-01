import { useEffect } from "react";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  useEffect(() => {
    fetch("/api/set-cookie");
  }, []);
  return null;
}
