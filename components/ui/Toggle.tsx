import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function Toggle() {
  const [enabled, setEnabled] = useState(true);

  function onChange() {
    setEnabled(!enabled);
    document.documentElement.classList.toggle("dark");
    window.sessionStorage.setItem("enabled", enabled.toString());
  }

  return (
    <Switch
      checked={enabled}
      onChange={() => {
        onChange();
      }}
      className={`${
        enabled ? "bg-primary" : "bg-gray-200 "
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  );
}
