function runSearch(){
    let ar=["acids","aerosol can","air conditioner","aluminum baking tray","aluminum cans","aluminum foil",
    "aluminum pie plate","animal bedding","animal waste","antifreeze","aseptic carton","baked goods","barbeque",
    "battery","beer bottle","Boxboard","broken glass","bubble wrap","camera","candy","cardboard","cardboard can",
    "cell phone","ceramics","drinking glasses","cereal box","chips bag","clothes","plastic cup","cosmetics",
    "styrofoam cup","wood","dairy product","desktop computer","crayons","dirt","DVD player","envelope","fireworks",
    "fluorescent tube","fluorescent bulb","glass jar","glass bottle","light bulb","mattress","monitor","meat","paper",
    "paper bag","paper napkins","plastic bottle","plastic plate","plastic straw","shoes","wood","tin can","tissue paper",
    "television","tv","food","yogurt containers","washed ketchup bottles","playdoh containers","newspaper","masks","ketchup packets","soda can"];
    let se=["hazardous waste","trash can","tds recycle facility","recycling bin","recycling bin","recycling bin",
    "recycling bin","trash can","trash can","hazardous waste","recycling bin","trash can","tds recycle facility",
    "hazardous waste","recycling bin","recycling bin","trash can","trash can","hazardous waste","trash can","recycling bin",
    "recycling bin","hazardous waste","trash can","trash can","trash can","recycling bin","recycling bin","recycling bin","hazardous waste",
    "trash can","trash can","trash can","hazardous waste","trash can","bulky item","hazardous waste","recycling bin",
    "hazardous waste","hazardous waste","hazardous waste","recycling bin","recycling bin","trash can","bulky item","hazardous waste",
    "trash can","recycling bin","recycling bin","trash can","recycling bin","recycling bin","trash can","recycling bin","bulky items",
    "recycling bin","recycling bin","hazardous waste","hazardous waste","trash can","trash can","recycling bin","trash can","recyling bin","trash can","trash can","recyling bin"];
    let r;
    let val =document.getElementById("user_text").value;
    let fade =document.getElementById("fade");
    val=val.toLowerCase();
    for (let i=0;i<ar.length;i++){
        if (ar[i]==val){
            r=i;
        }
    }
    if (se[r]!=undefined){document.getElementById("result").innerHTML="Disposing of "+ar[r]+" to "+se[r];fade.style.visibility="hidden";fade.style.opacity="0";}
    else{document.getElementById("result").innerHTML="Sorry, your input may not in the website";fade.style.visibility="visible";fade.style.opacity="100";}
}



