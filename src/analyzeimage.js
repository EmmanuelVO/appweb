function analyzeimage(){
fetch('https://compubot.cognitiveservices.azure.com/computervision/imageanalysis:analyze?api-version=2023-02-01-preview&features=tags,read,caption,denseCaptions,smartCrops,objects,people', {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        "Ocp-Apim-Subscription-Key": "12ccd13265da4f308abc0ada474ba367",
    },
    body: JSON.stringify({"url":"https://learn.microsoft.com/azure/cognitive-services/computer-vision/images/windows-kitchen.jpg"})
})
.then(response => response.json())
.then(data => console.log(data));
}
