document.addEventListener("change",e=>{
    if (e.target.value != ""){
        if (e.target.hasAttribute("min")){
            e.target.value = Math.max(Number(e.target.value), Number(e.target.getAttribute("min")))
        }
        if (e.target.hasAttribute("max")) {
            e.target.value = Math.min(Number(e.target.value), Number(e.target.getAttribute("max")))
        }
    }
    bonus_reload()
})
function nad(a,b){
    document.getElementById(a).innerText = Number(document.getElementById(a).innerText) + b
}
function bonus_reload(){
    document.getElementById("points").innerText = 12 - Number(document.getElementById("tekisei").value)
    let c = 0
    let ac = 0
    let up = 0
    for (let s of Array.from(document.querySelectorAll("#bonuses code"))) {
        s.innerText = 0
    }
    document.getElementById("max_hp").innerText = 5
    document.getElementById("stm").innerText = 3
    
    let dielist = []
    let killto = null
    for (let i of Array.from(document.getElementById("check_boxes").children)) {
        let tar = i.firstChild
        if (tar.id == killto){
            killto = null
            tar.disabled = true
            tar.checked = false
        } else {
            tar.disabled = false
        }
        if (ac > 2) {
            tar.checked = false
            tar.disabled = true
        }else if (Number(document.getElementById("points").innerText) - up - Number(tar.nextElementSibling.innerText) < 0) {
            tar.checked = false
            tar.disabled = true
        }else if (tar.checked){
            up += Number(tar.nextElementSibling.innerText)
            ac += 1
            switch (Number(tar.id.replace("skill_",""))){
                case 0:
                    document.getElementById("skill_1").disabled = true
                    document.getElementById("skill_1").checked = false
                    killto = "skill_1"
                    break
                case 1:
                    document.getElementById("skill_0").disabled = true
                    document.getElementById("skill_0").checked = false
                    nad("tentyuu_bonus",2)
                    nad("kousen_bonus",2)
                    break
                case 2:
                    break
                case 3:
                    nad("kousen_bonus",1)
                    break
                case 4:
                    nad("tentyuu_bonus",2)
                    break
                case 5:
                    nad("tikurin_bonus",6)
                    break
                case 6:
                    break
                case 7:
                    break
                case 8:
                    nad("hanyou_bonus",1)
                    break
                case 9:
                    nad("max_hp",1)
                    break
                case 10:
                    break
                case 11:
                    break
                case 12:
                    break
                case 13:
                    break
                case 14:
                    break
                case 15:
                    break
                case 16:
                    break
                case 17:
                    break
                case 18:
                    nad("kousen_bonus",5)
                    break
                case 19:
                    nad("tentyuu_bonus",6)
                    break
                case 20:
                    break
                case 21:
                    nad("stm",1)
                    break
                case 22:
                    nad("kousen_bonus",8)
                    break
                case 23:
                    nad("tentyuu_bonus",12)
                    break
                case 24:
                    nad("stm",-1)
                    break
            }  
        }else{
            dielist.push(tar)
        }
    }
    if (ac > 2){
        dielist.forEach(v=>{
            v.disabled = true
        })
    }
    document.getElementById("nokori").innerText = Number(document.getElementById("points").innerText) - up

    let add = 0
    
    for (let e of Array.from(document.querySelectorAll("#bonuses code"))){
        if (e.previousElementSibling.checked){
            add += Number(e.innerText)
        }
    }
    add += Number(document.getElementById("tekisei").value)
    if (document.getElementById("dice_bonus").previousElementSibling.checked){
        add += Number(document.getElementById("dice_bonus").value)
    }
    document.getElementById("bonus_add").innerText = add
}
