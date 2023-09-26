async function getProductcatalogue(language) {
    language = language.toLowerCase()
    const data = "";
    
    if(language == "en" || "english") {
        const res = await fetch("src\JSON\productcatalogue_en.json");
        data = await res.json();
    }
    if (language == "sv" || "english") {
        const res = await load("src\JSON\produktkatalog_sv.json");
        data = await res.json();
    } else {
        console.log("getProductcatalogue: -> Input invalid <-");
    }
    return data
};

export {getProductcatalogue}