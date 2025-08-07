function calculateLove() {
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();

    const resultDiv = document.getElementById("result");
    
    if (name1 === "" || name2 === "") {
        resultDiv.textContent = " Please enter both name!";
        return;
    }

    const loveScore = Math.floor(Math.random() * 100) + 1;
    

    document.getElementById("result").textContent = name1 + "💘" + name2 + " = " + loveScore + "% compatible";
}