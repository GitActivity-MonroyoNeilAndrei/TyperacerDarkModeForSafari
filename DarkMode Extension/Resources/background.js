browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Received request: ", request);

    if (request.greeting === "hello")
        sendResponse({ farewell: "goodbye" });
    
    if(request.type == "Found emails") {
        browser.runtime.sendMessage({type: "Read emails response" , emails: request.emails});
    }
    
});
