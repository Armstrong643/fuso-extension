import extension from "@/utils/chrome";

extension.onMessage((message, sender, sendResponse) => {
  console.log("bg receive", message);
  sendResponse("bg send");
});
