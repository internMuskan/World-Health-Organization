let getDate = ()=>{
    let date = new Date();
    let year = date.getFullYear();
        let month = String(date.getMonth() + 1).padStart(2, '0');
        let day = String(date.getDate()).padStart(2, '0');
        let hours = String(date.getHours()).padStart(2, '0');
        let minutes = String(date.getMinutes()).padStart(2, '0');
        let seconds = String(date.getSeconds()).padStart(2, '0');
        let datetime =  day + "-" + month + "-" +year + " " +  hours + ":" + minutes + ":" + seconds
        return document.getElementById("datatime").innerHTML = datetime
        }
    setInterval(getDate, 1000);