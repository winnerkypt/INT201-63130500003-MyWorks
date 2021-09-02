(()=>{
    const second = 1000; //1000millisecond=1second
    const minute = second*60;
    const hour = minute*60;
    const day = hour*24;
    const month = day*31;

    function setElementInnerText(id,text){
        const element = document.getElementById(id);
        element.innerText=text;
    }

    function countDown(){
        const now =new Date().getTime()//วันและเวลาปัจจุบัน
        const newYear =new Date('December 31, 2021 23:59:59').getTime(); 
        const unixTimeLeft = newYear-now;

        setElementInnerText('months',Math.floor(unixTimeLeft/month));
        setElementInnerText('days',Math.floor(unixTimeLeft%month/day));
        setElementInnerText('hours',Math.floor(unixTimeLeft%day/hour));
        setElementInnerText('minutes',Math.floor(unixTimeLeft%hour/minute));
        setElementInnerText('seconds',Math.floor(unixTimeLeft%minute/second));
        
    }
    function run(){
        countDown();
        setInterval(countDown, second); //เซ็ตทุกๆมิลลิเซค
    }
    run();
})();