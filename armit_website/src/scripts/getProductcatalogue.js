export const getProductcatalogue = async (language) => {
    /**
   * This is a method that divides two numbers.
   *
   * @param {String} language - Language for the catalogue. Type 'sv' or 'svenska' for Swedish and 'en' or 'english' for English.
   * @returns {String} A JSON containing all products from the chosen productcatalogue.
   */

    let src = "";

    if(language.toLowerCase() == "sv" || language.toLowerCase() == "svenska") {
        src = "src/JSON/produktkatalog_sv.json";
    }
    if(language.toLowerCase() == "en" || language.toLowerCase() == "english") {
        src = "src/JSON/productcatalogue_en.json";
    }
    if(!src == "") {
        const res = await fetch(src);
        const data = await res.json();
        return data;
    } else {
        console.log("TYPE ERROR. STRING NOT ACCEPTED")
    }
    
        
}