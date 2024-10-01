let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
let btn = document.querySelector('button');
let addEle = document.querySelector('.main');

btn.addEventListener("click", async () => {

    let inpWord = document.querySelector('.searchArea input').value;
    let h4 = document.createElement('h4');
    h4.innerText = `Word entered : ${inpWord}`;
    h4.style.fontWeight = 600;
    h4.style.color = "rgba(137, 43, 226, 0.834)";
    addEle.append(h4);
    console.log("Word entered : ", inpWord);
    let answers = await getMeaning(inpWord);
    
    let num = 0;
    for(ans of answers) {
        let ansMeanings = ans.meanings;
        let ansArr = ansMeanings;
        for(ansMeaning of ansArr) {
            console.log(ansMeaning.definitions);
            defArr = ansMeaning.definitions;
            for(def of defArr) {
                let h6 = document.createElement('h6');
                num++;
                h6.innerText = `Defination  ${num} :  `;
                let div = document.createElement('div');
                div.classList.add("divStyle");
                addEle.append(div);
                div.appendChild(h6);
                let definationWord = def.definition;
                console.log("DEFINATION : ",definationWord);
                let p = document.createElement('p');
                p.innerText = `${definationWord}`;
                div.appendChild(p);
            }
        }
    }

})


async function getMeaning(word) {
    try {
        let res = await axios.get(url+word);
        return res.data;
    }catch(e) {
        console.log("ERROR : ", e);
    }
}