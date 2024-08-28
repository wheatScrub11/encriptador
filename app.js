const textArea = document.querySelector(".txt-1")
const mensaje = document.querySelector(".txt-2")
const btn_encriptar = document.querySelector("btn-encriptar")

const encriptar = (str) =>{
    let matrizCodigo = [["e","entrer"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    str = str.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i ++) {
        if (str.includes(matrizCodigo[i][0])){
            str = str.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return str
}

const desencriptar = (str) =>{
    let matrizCodigo = [["e","entrer"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    str = str.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i ++) {
        if (str.includes(matrizCodigo[i][1])){
            str = str.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return str
}




const click_encriptar = () =>{
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = ""
    mensaje.style.backgroundImage = "none"
}

const click_desencriptar = () =>{
    const txtDesencriptado = desencriptar(textArea.value)
    mensaje.value = txtDesencriptado
    textArea.value = ""
    mensaje.style.backgroundImage = "none"
}